import fs from 'fs'
import {
  ROOT_PKG_TEMPLATE,
  ROOT_DIR,
  ROOT_PKG_PATH,
} from './constants.js'
import { sortObjectKeys, runCommand } from './utils/index.js'

async function initRootPkg() {
  if (fs.existsSync(ROOT_PKG_PATH)) {
    try {
      const pkgContent = fs.readFileSync(ROOT_PKG_PATH, { encoding: 'utf8' })
      let pkg = JSON.parse(pkgContent)
      pkg = sortObjectKeys(pkg)
      fs.writeFileSync(ROOT_PKG_PATH, JSON.stringify(pkg, null, 2))
      return pkg
    } catch (error) {
      console.error(
        `❌ Error reading or parsing package.json: ${error.message}`
      )
      return null
    }
  }

  fs.writeFileSync(ROOT_PKG_PATH, ROOT_PKG_TEMPLATE)
  await runCommand('pnpm i', ROOT_DIR)
  return ROOT_PKG_TEMPLATE
}

;(async () => {
  const pkg = await initRootPkg()
  if (pkg) {
    console.log('✅ Successfully initialized package.json')
    console.log('\n', pkg)
  }
})()
