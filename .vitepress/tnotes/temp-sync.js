// .vitepress/tnotes/template-sync.js
import fs from 'fs'
import path from 'path'
import { VP_DIR_PATH, ROOT_PKG_PATH } from './constants.js'

const VP_SYNC_LIST = ['components', 'theme', 'tnotes', 'config.mts']

/**
 * 获取父目录路径
 * @param {string} dir - 当前目录路径
 * @returns {string} 父目录路径
 */
const getParentDir = (dir) => {
  return path.dirname(dir)
}

/**
 * 获取目标目录列表（排除当前模块所在目录）
 * @param {string} baseDir - 基础目录路径
 * @param {string} excludeDir - 需要排除的目录路径
 * @returns {string[]} 符合条件的目标目录列表
 */
const getTargetDirs = (baseDir, excludeDir) => {
  try {
    const entries = fs.readdirSync(baseDir, { withFileTypes: true })
    const targetDirs = entries
      .filter(
        (entry) => entry.isDirectory() && entry.name.startsWith('TNotes.')
      )
      .map((entry) => path.join(baseDir, entry.name))
      .filter((dir) => dir !== excludeDir)
    return targetDirs
  } catch (error) {
    console.error(`读取目录 ${baseDir} 时出错：${error.message}`)
    return []
  }
}

/**
 * 删除整个目录
 * @param {string} dir - 要删除的目录路径
 */
const deleteDirectory = (dir) => {
  try {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true })
      console.log(`✅ 已删除目录：${dir}`)
    }
  } catch (error) {
    console.error(`❌ 删除目录失败：${dir}: ${error.message}`)
  }
}

/**
 * 复制白名单中的文件或目录
 * @param {string} source - 源路径
 * @param {string} target - 目标路径
 */
const copyWhitelistedFiles = (source, target) => {
  try {
    // 如果目标目录不存在，则创建
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target, { recursive: true })
    }

    for (const item of VP_SYNC_LIST) {
      const sourcePath = path.join(source, item)
      const targetPath = path.join(target, item)

      if (fs.existsSync(sourcePath)) {
        if (fs.statSync(sourcePath).isDirectory()) {
          // 递归复制目录
          fs.cpSync(sourcePath, targetPath, { recursive: true })
          // console.log(`已复制目录：${sourcePath} -> ${targetPath}`)
        } else {
          // 直接复制文件
          fs.copyFileSync(sourcePath, targetPath)
          // console.log(`已复制文件：${sourcePath} -> ${targetPath}`)
        }
      } else {
        console.warn(`⚠️ 源路径中不存在：${sourcePath}`)
      }
    }
    console.log(`✅ 复制完成 ${target}`)
  } catch (error) {
    console.error(`❌ 复制失败：${source} -> ${target}: ${error.message}`)
  }
}

/**
 * 复制 package.json 文件
 * @param {string} sourcePkgPath - 源 package.json 路径
 * @param {string} targetDir - 目标目录路径
 */
const copyPackageJson = (sourcePkgPath, targetDir) => {
  try {
    const targetPkgPath = path.join(targetDir, 'package.json')
    if (fs.existsSync(sourcePkgPath)) {
      fs.copyFileSync(sourcePkgPath, targetPkgPath)
      console.log(`✅ 已复制 package.json 到 ${targetDir}`)
    } else {
      console.warn(`⚠️ 源路径中不存在：${sourcePkgPath}`)
    }
  } catch (error) {
    console.error(`❌ 复制 package.json 失败：${error.message}`)
  }
}

/**
 * 实现模板同步功能
 */
export async function tempSync() {
  try {
    // 获取基础目录和当前模块所在的目录
    const baseDir = getParentDir(getParentDir(VP_DIR_PATH)) // /Users/huyouda/zm/notes/
    const currentModuleDir = getParentDir(VP_DIR_PATH) // 当前模块所在目录，例如 /Users/huyouda/zm/notes/TNotes.template/.vitepress
    const targetDirs = getTargetDirs(baseDir, currentModuleDir)

    if (targetDirs.length === 0) {
      console.log('未找到符合条件的目标目录')
      return
    }

    // 遍历目标目录并同步内容
    for (const targetDir of targetDirs) {
      const targetVitepressDir = path.join(targetDir, '.vitepress')
      deleteDirectory(targetVitepressDir) // 删除目标目录下的整个 .vitepress 文件夹

      // 创建新的 .vitepress 文件夹，并复制 NEED_TO_SYNC_LIST 中的内容
      copyWhitelistedFiles(VP_DIR_PATH, targetVitepressDir)

      // 复制 package.json 文件
      copyPackageJson(ROOT_PKG_PATH, targetDir)

      console.log('---------------')
    }

    console.log('✅ 模板同步完成')

    // 调试信息
    // console.log('VP_DIR_PATH', VP_DIR_PATH)
    // console.log('ROOT_PKG_PATH', ROOT_PKG_PATH)
    // console.log('baseDir', baseDir)
    // console.log('currentModuleDir', currentModuleDir)
    // console.log('targetDirs', targetDirs)
  } catch (error) {
    console.error(`模板同步失败：${error.message}`)
  }
}