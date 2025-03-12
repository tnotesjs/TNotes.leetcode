import { runCommand } from './run_command.js'
import { ROOT_DIR } from '../constants.js';

/**
 * 同步本地和远程 Git 仓库
 * 
 * 该函数尝试拉取远程仓库的更新，并在必要时提交和推送本地更改
 * 它首先检查指定目录是否为有效的 Git 仓库，然后根据预定义的策略处理未提交的更改
 * 最后，它提交新的更改并推送到远程仓库
 * 
 * @param {string} dir - 本地仓库目录路径
 */
export async function syncRepo(dir = ROOT_DIR) {
  try {
    // 确保是 Git 仓库
    const isGitRepo = await runCommand("git rev-parse --is-inside-work-tree", dir).catch(() => false);
    if (!isGitRepo) {
      throw new Error(`${dir} 不是一个有效的 Git 仓库。`);
    }

    // #region pull 之前的预处理 - 策略一 stash
    // 处理未暂存更改
    const statusOutput = await runCommand("git status --porcelain", dir);
    if (statusOutput) {
      console.log(`${dir} 存在未暂存的更改，先 stash...`);
      await runCommand("git stash", dir);
    }
    
    // 拉取远程更新
    await runCommand("git pull --rebase", dir);
    
    // 恢复 stash 的更改
    if (statusOutput) {
      console.log(`${dir} 取回之前的更改`);
      await runCommand("git stash pop", dir);
    }
    // #endregion pull 之前的预处理 - 策略一 stash

    
    
    // #region pull 之前的预处理 - 策略二 commit
    // 在 git pull 之前先暂存并提交未提交的更改
    // 弊端：每次一旦有变更，都会预先 commit 一次。策略一则是先 stash，git stash 不会创建新的提交记录，只是临时保存更改，适用你不想立即提交更改的情况。
    // await runCommand("git add .", dir);
    // await runCommand('git commit -m "auto commit before pull"', dir);
    // await runCommand("git pull --rebase", dir);
    // #endregion pull 之前的预处理 - 策略二 commit


    // 再次检查是否有未提交的更改
    const newStatus = await runCommand("git status --porcelain", dir);
    if (!newStatus) {
      console.log(`${dir} 没有新的更改，跳过提交`);
      return;
    }

    // 提交并推送
    await runCommand("git add .", dir);
    const changedFiles = newStatus.split("\n").length;
    await runCommand(`git commit -m "update: ${changedFiles} files modified"`, dir);
    await runCommand("git push", dir);

    // 获取远程 URL
    const url = await runCommand("git remote -v", dir);
    const remoteMatch = url.match(/https:\/\/[^\s]+|git@[^:\s]+:[^\s]+/);
    console.log(`✅ 笔记同步完成 ${remoteMatch ? remoteMatch[0] : "（无法解析远程 URL）"}`);
  } catch (error) {
    console.error(`处理 ${dir} 时出错：${error.message}`);
  }
}