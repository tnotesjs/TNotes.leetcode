import { exec } from 'child_process'

export async function runCommand(command, dir) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd: dir }, (error, stdout, stderr) => {
      if (error) {
        console.error(`处理 ${dir} 时出错：${stderr}`)
        reject(error)
      } else {
        // console.log(stdout.trim());
        resolve(stdout.trim())
      }
    })
  })
}
