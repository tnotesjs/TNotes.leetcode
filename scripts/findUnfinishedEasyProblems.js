import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 获取 notes 目录的路径
const notesDir = path.resolve(__dirname, '..')

// 存储未完成的简单题目录名
const unfinishedEasyProblems = []

// 读取 notes 目录下的所有子目录
const dirs = fs
  .readdirSync(notesDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

// 遍历每个目录
for (const dir of dirs) {
  // 跳过 0000 目录本身
  if (dir === '0000') continue

  // 检查是否为简单题（目录名包含【简单】）
  if (!dir.includes('【简单】')) continue

  // 读取 .tnotes.json 文件
  const tnotesPath = path.join(notesDir, dir, '.tnotes.json')

  if (fs.existsSync(tnotesPath)) {
    try {
      const content = fs.readFileSync(tnotesPath, 'utf-8')
      const data = JSON.parse(content)

      // 检查 done 字段
      if (
        data.done === false ||
        data.done === undefined ||
        data.done === null
      ) {
        unfinishedEasyProblems.push(dir)
      }
    } catch (error) {
      console.error(`Error reading ${dir}/.tnotes.json:`, error.message)
    }
  }
}

// 按题号排序
unfinishedEasyProblems.sort((a, b) => {
  const numA = parseInt(a.match(/^\d+/)?.[0] || '0')
  const numB = parseInt(b.match(/^\d+/)?.[0] || '0')
  return numA - numB
})

// 输出到文件
const outputPath = path.join(__dirname, 'unfinished-easy-problems.txt')
const output =
  `# 未完成的简单题目录 (共 ${unfinishedEasyProblems.length} 题)\n\n` +
  unfinishedEasyProblems.join('\n')

fs.writeFileSync(outputPath, output, 'utf-8')

console.log(`✅ 已找到 ${unfinishedEasyProblems.length} 道未完成的简单题`)
console.log(`📝 结果已保存到: ${outputPath}`)
