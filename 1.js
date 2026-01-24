import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const notesDir = path.join(__dirname, 'notes')
const txtFile = path.join(__dirname, '1.txt')

// 读取 1.txt 内容
const content = fs.readFileSync(txtFile, 'utf-8')
const lines = content.trim().split('\n')

// 解析每一行，提取题号和完整名称
const nameMap = new Map()
for (const line of lines) {
  const match = line.match(/^(\d+)\.\s+(.+)$/)
  if (match) {
    const num = match[1]
    const fullName = `${num}. ${match[2]}`
    nameMap.set(num, fullName)
  }
}

// 获取 notes 目录下的所有文件夹
const dirs = fs.readdirSync(notesDir).filter((name) => {
  const fullPath = path.join(notesDir, name)
  return fs.statSync(fullPath).isDirectory()
})

let renamed = 0
let skipped = 0

for (const dir of dirs) {
  // 提取题号
  const match = dir.match(/^(\d+)\./)
  if (!match) continue

  const num = match[1]
  const newName = nameMap.get(num)

  if (!newName) continue

  // 如果名称相同，跳过
  if (dir === newName) {
    skipped++
    continue
  }

  // 重命名
  const oldPath = path.join(notesDir, dir)
  const newPath = path.join(notesDir, newName)

  try {
    fs.renameSync(oldPath, newPath)
    console.log(`✓ ${dir} -> ${newName}`)
    renamed++
  } catch (err) {
    console.error(`✗ 重命名失败: ${dir} -> ${newName}`, err.message)
  }
}

console.log(`\n完成: 重命名 ${renamed} 个目录，跳过 ${skipped} 个（名称相同）`)
