import { spawn, exec } from 'child_process'

export async function runCommand_spawn(command, dir) {
  return new Promise((resolve, reject) => {
    console.log(`Running command: "${command}" in directory: "${dir}"`)
    const [cmd, ...args] = command.split(' ') // 分割命令和参数
    const child = spawn(cmd, args, { cwd: dir, stdio: 'inherit' }) // 继承标准输入/输出

    child.on('error', (err) => {
      console.error(`Error occurred while running command: ${command}`)
      reject(err)
    })

    child.on('close', (code) => {
      if (code === 0) {
        // console.log('Command completed successfully.')
        resolve()
      } else {
        console.error(`Command exited with code ${code}`)
        reject(new Error(`Command failed with code ${code}`))
      }
    })
  })
}

export async function runCommand(command, dir) {
  return new Promise((resolve, reject) => {
    // console.log(`Running command: "${command}" in directory: "${dir}"`)
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
