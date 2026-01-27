// // dir name init -------------------------------------------------------------------

// import fs from 'fs'

// // 读取文件内容
// fs.readFile('./1.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err)
//     return
//   }

//   // 按行分割
//   const lines = data.split('\n')

//   // 处理每一行
//   const updatedLines = lines.map((line, index) => {
//     const lineNumber = (index + 1).toString().padStart(4, '0') // 补零
//     // 替换序号部分（假设每行都以 "数字. " 开头）
//     return line.replace(/^\d+\.\s/, `${lineNumber}. `)
//   })

//   // 写回文件
//   fs.writeFile('./2.txt', updatedLines.join('\n'), 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing file:', err)
//     } else {
//       console.log('✅ 文件已成功更新为 4 位编号格式！')
//     }
//   })
// })
