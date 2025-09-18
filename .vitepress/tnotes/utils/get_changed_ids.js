import { execSync } from 'child_process'

export function getChangedIds() {
  const changedFiles = execSync(
    `git diff --name-only HEAD~1 HEAD -- 'notes/[0-9][0-9][0-9][0-9]*/README.md'`
  )
    .toString()
    .split(/\r?\n/)
    .filter(Boolean)

  /**
   * 本次更新的笔记 ID 集合
   */
  const changedIds = changedFiles
    .map((fp) => {
      const parts = fp.split(path.sep)
      const dirName = parts.find((p, i) => parts[i - 1] === 'notes')
      return dirName?.slice(0, 4)
    })
    .filter(Boolean)

  console.log('本次更新的笔记 ID 集合:', changedIds)

  return new Set(changedIds)
}
