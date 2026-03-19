import fs from 'fs'
import path from 'path'

const notesDir = path.resolve('../notes')
const notesDirList = fs.readdirSync(notesDir)

const FILES = [
  { name: '1.c', content: '// todo\n' },
  { name: '1.py', content: '# todo\n' },
]

let createdCount = 0

notesDirList.forEach((dirName) => {
  const match = dirName.match(/^(\d{4})\.\s.+/)
  if (!match) return

  const fullPath = path.join(notesDir, dirName)
  if (!fs.statSync(fullPath).isDirectory()) return

  const solutionsDir = path.join(fullPath, 'solutions')
  if (!fs.existsSync(solutionsDir)) return

  // 遍历 solutions 下的子目录（1, 2, 3 ...）
  const subDirs = fs.readdirSync(solutionsDir).filter((name) => {
    return fs.statSync(path.join(solutionsDir, name)).isDirectory()
  })

  subDirs.forEach((subDir) => {
    const subDirPath = path.join(solutionsDir, subDir)

    FILES.forEach(({ name, content }) => {
      const filePath = path.join(subDirPath, name)
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content)
        createdCount++
        console.log(`✅ Created ${filePath}`)
      }
    })
  })
})

console.log(`\nDone! Created ${createdCount} files.`)
