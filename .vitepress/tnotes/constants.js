import { fileURLToPath } from 'url'
import path from 'path'
import { getTnotesConfig } from './utils/index.js'

const {
  author,
  ignore_dirs,
  repoName,
  socialLinks,
  menuItems,
  sidebar_isNotesIDVisible,
  sidebar_isCollapsed
} = getTnotesConfig()

export {
  author,
  ignore_dirs,
  repoName,
  socialLinks,
  menuItems,
  sidebar_isNotesIDVisible,
  sidebar_isCollapsed
}

export const BILIBILI_VIDEO_BASE_URL = "https://www.bilibili.com/video/"

export const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * TNotes.* 笔记仓库的基路径
 * @example
 * `/Users/huyouda/zm/notes/` 【在此目录下存放其它 TNotes.* 笔记仓库】
 */
export const TNOTES_BASE_DIR = path.resolve(__dirname, '..', '..', '..') 

/**
 * TNotes.* 当前的笔记仓库根路径
 * @example
 * `/Users/huyouda/zm/notes/TNotes.template/`
 */
export const ROOT_DIR = path.resolve(__dirname, '..', '..')
export const ROOT_README_PATH = path.resolve(ROOT_DIR, 'README.md')
export const NOTES_DIR = path.resolve(ROOT_DIR, 'notes')
export const VP_DIR_PATH = path.resolve(ROOT_DIR, '.vitepress')
export const GITHUB_DIR_PATH = path.resolve(ROOT_DIR, '.github')
export const GITHUB_DEPLOYYML_PATH = path.resolve(GITHUB_DIR_PATH, 'workflows', 'deploy.yml')
export const VP_TOC_PATH = path.resolve(ROOT_DIR, 'TOC.md')
export const VP_SIDEBAR_PATH = path.resolve(ROOT_DIR, 'sidebar.json')
export const ROOT_PKG_PATH = path.resolve(ROOT_DIR, 'package.json')

export const EOL = '\n'
export const MERGED_README_FILENAME = 'MERGED_README.md'
export const MERGED_README_PATH = path.resolve(ROOT_DIR, MERGED_README_FILENAME)
export const SEPERATOR = `<!-- !======> SEPERATOR <====== -->`

export const NOTES_TOC_START_TAG = '<!-- region:toc -->'
export const NOTES_TOC_END_TAG = '<!-- endregion:toc -->'

export const REPO_URL = `https://github.com/${author}/${repoName}/tree/main`
export const REPO_NOTES_URL = `https://github.com/${author}/${repoName}/tree/main/notes`

// !Deprecated
// export const REPO_BOLB_URL = `https://raw.githubusercontent.com/${author}/${repoName}/main`
// 原先主要为了渲染存储在 github 上的图片资源。在 2025 年 3 月 14 日 22:28:06 测试发现 github 给图片添加了 token，现在已经没法直接将图片资源通过上述这种方式做成站外访问的形式了。
// 在 github 上预览图片，然后右键图片，在新窗口中打开，观察 URL 的变化
// https://github.com/Tdahuyou/TNotes.0/blob/main/notes/0004.%20electron--%E6%B8%A1%E4%B8%80--%E8%B0%A2%E6%9D%B0/assets/2024-11-26-22-21-40.png
// https://raw.githubusercontent.com/Tdahuyou/TNotes.0/refs/heads/main/notes/0004.%20electron--%E6%B8%A1%E4%B8%80--%E8%B0%A2%E6%9D%B0/assets/2024-11-26-22-21-40.png?token=GHSAT0AAAAAACXSBQ2Y3CVQKZYVNU4CUI5IZ6UHSMA

export const GITHUB_PAGE_URL = `https://tdahuyou.github.io/${repoName}`
export const GITHUB_PAGE_NOTES_URL = `https://tdahuyou.github.io/${repoName}/notes`

/**
 * 新增笔记 README.md 模板
 */
export const NEW_NOTES_README_MD_TEMPLATE = `

<!-- region:toc -->
<!-- endregion:toc -->

## 📒 notes_title

`

/**
 * 新增笔记 .tnotes.json 模板
 */
export const NEW_NOTES_TNOTES_JSON_TEMPLATE = `{
  "bilibili": [],
  "done": false,
  "enableDiscussions": false
}`