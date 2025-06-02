import fs from 'fs'
let str = ''
for (let i = 1; i <= 3600; i++) {
  const numStr = i.toString().padStart(4, '0')
  if (i % 100 === 1) {
    str += `\n## ${numStr}~${(i + 99).toString().padStart(4, '0')}\n\n`
  }
  str += `- [ ] ${numStr}\n`
}
fs.writeFileSync('output.txt', str)
