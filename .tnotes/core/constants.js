import { fileURLToPath } from 'url'
import path from 'path'
import { getTnotesConfig } from './utils/index.js'

const {
  author,
  ignore_dirs,
  repoName,
  socialLinks,
  menuItems
} = getTnotesConfig()

export {
  author,
  ignore_dirs,
  repoName,
  socialLinks,
  menuItems
}

export const BILIBILI_VIDEO_BASE_URL = "https://www.bilibili.com/video/"

export const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const ROOT_DIR = path.resolve(__dirname, '..', '..')
export const ROOT_README_PATH = path.resolve(ROOT_DIR, 'README.md')
export const NOTES_DIR = path.resolve(ROOT_DIR, 'notes')
export const VP_DIR = path.resolve(ROOT_DIR, '.vitepress')
export const VP_TOC_PATH = path.resolve(ROOT_DIR, 'TOC.md')
export const VP_SIDEBAR_PATH = path.resolve(VP_DIR, 'sidebar.json')
export const VP_SOCIAL_LINKS_PATH = path.resolve(VP_DIR, 'socialLinks.json')
export const VP_MENU_ITEMS_PATH = path.resolve(VP_DIR, 'menuItems.json')
export const ROOT_PKG_PATH = path.resolve(__dirname, '..', '..', 'package.json')

export const EOL = '\n'
export const MERGED_README_FILENAME = 'MERGED_README.md'
export const MERGED_README_PATH = path.resolve(ROOT_DIR, MERGED_README_FILENAME)
export const SEPERATOR = `<!-- !======> SEPERATOR <====== -->`

export const NOTES_TOC_START_TAG = '<!-- region:toc -->'
export const NOTES_TOC_END_TAG = '<!-- endregion:toc -->'

export const REPO_URL = `https://github.com/${author}/${repoName}/tree/main`
export const REPO_NOTES_URL = `https://github.com/${author}/${repoName}/tree/main/notes`
export const REPO_BOLB_URL = `https://raw.githubusercontent.com/${author}/${repoName}/main` // !主要为了渲染存储在 github 上的图片资源。
export const GITHUB_PAGE_URL = `https://tdahuyou.github.io/${repoName}`
export const GITHUB_PAGE_NOTES_URL = `https://tdahuyou.github.io/${repoName}/notes`

/**
 * 新增笔记 README.md 模板
 */
export const NEW_NOTES_README_MD_TEMPLATE = `

<!-- region:toc -->
<!-- endregion:toc -->

##

`

/**
 * 新增笔记 .tnotes.json 模板
 */
export const NEW_NOTES_TNOTES_JSON_TEMPLATE = `{
  "bilibili": [],
  "done": false
}`

/**
 * 创建根目录下的 package.json 包体描述文件时的默认模板
 */
export const ROOT_PKG_TEMPLATE = `{
  "scripts": {
    "docs:dev": "        vitepress dev",
    "docs:build": "      vitepress build",
    "docs:preview": "    vitepress preview",
    "distribute": "      node ./node_modules/tnotes   --distributeREADME    --repoName=${repoName}",
    "docs:publish": "    node ./node_modules/tnotes/scripts/docs-publish.js",
    "merge": "           node ./node_modules/tnotes   --mergeREADME         --repoName=${repoName}",
    "sync": "            node ./node_modules/tnotes   --syncREADME          --repoName=${repoName}",
    "test": "            echo \"Error: no test specified\" && exit 1",
    "update": "          node ./node_modules/tnotes   --updateREADME        --repoName=${repoName}"
  },
  "dependencies": {
    "github-slugger": "^2.0.0",
    "markdown-it-container": "^4.0.0",
    "markdown-it-link-attributes": "^4.0.1",
    "minimist": "^1.2.8",
    "swiper": "^11.2.1"
  },
  "devDependencies": {
    "markdown-it-task-lists": "^2.1.1",
    "vitepress": "^1.6.3"
  },
}`
