// leetcode 题目目录 init --------------------------------------------------------

// import { exec } from 'child_process'

// // 配置要执行的命令和次数
// const command = 'npm run tn:new'
// const executionCount = 8

// // 执行命令的函数
// function executeCommand(cmd) {
//   return new Promise((resolve, reject) => {
//     exec(cmd, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`执行出错: ${error.message}`)
//         reject(error)
//         return
//       }
//       if (stderr) {
//         console.error(`错误输出: ${stderr}`)
//       }
//       resolve(stdout)
//     })
//   })
// }

// // 主函数
// async function main() {
//   console.log(`开始执行命令 "${command}" 共 ${executionCount} 次`)

//   for (let i = 0; i < executionCount; i++) {
//     try {
//       const output = await executeCommand(command)
//       console.log(`第 ${i + 1} 次执行完成`)
//     } catch (err) {
//       console.error(`第 ${i + 1} 次执行失败`)
//     }
//   }

//   console.log('所有任务已完成')
// }

// // 运行主函数
// main()

// README.md init -------------------------------------------------------------------

for (let i = 1; i <= 3564; i++) {
  console.log(`- [ ] ${i.toString().padStart(4, '0')}`)
}
