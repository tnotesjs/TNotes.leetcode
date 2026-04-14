#!/usr/bin/env node

// node scripts/format-check/format-check.js
// node scripts/format-check/format-check.js --notes-range=all
// node scripts/format-check/format-check.js --notes-range=0001-0100
// node scripts/format-check/format-check.js --notes-range=0026,0131,0200-0210
// node scripts/format-check/format-check.js --help

import fs from 'fs'
import path from 'path'
import { spawnSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '../..')
const notesRoot = path.join(repoRoot, 'notes')
const scriptsRoot = path.join(repoRoot, 'scripts')

const IGNORE_DIRS = new Set([
  '.git',
  'node_modules',
  'dist',
  'out',
  '.vitepress',
  '.venv',
  'assets',
])

const PRETTIER_EXTS = new Set(['.js'])
const CLANG_EXTS = new Set(['.c', '.cpp'])
const PYTHON_EXTS = new Set(['.py'])

function printHelp() {
  console.log(
    '用法：node scripts/format-check/format-check.js [--notes-range=范围]',
  )
  console.log('')
  console.log('参数说明：')
  console.log('- --notes-range=all')
  console.log('  扫描全部 notes 目录（默认值）')
  console.log('- --notes-range=0001-0100')
  console.log('  只扫描编号落在 0001~0100 的题目目录')
  console.log('- --notes-range=0026,0131,0200-0210')
  console.log('  支持多个编号或编号区间，使用英文逗号分隔')
}

function parseNotesRange(rangeText) {
  if (!rangeText || rangeText === 'all') return null

  return rangeText.split(',').map((segment) => {
    const value = segment.trim()
    const match = value.match(/^(\d+)(?:-(\d+))?$/)

    if (!match) {
      throw new Error(`无效的 notes 扫描范围：${value}`)
    }

    const start = Number(match[1])
    const end = Number(match[2] ?? match[1])

    if (start > end) {
      throw new Error(`无效的 notes 扫描范围：${value}`)
    }

    return { start, end }
  })
}

function parseArgs(argv) {
  const options = {
    notesRanges: null,
    notesRangeText: 'all',
    showHelp: false,
  }

  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      options.showHelp = true
      continue
    }

    if (arg.startsWith('--notes-range=')) {
      const rangeText = arg.slice('--notes-range='.length).trim()
      options.notesRanges = parseNotesRange(rangeText || 'all')
      options.notesRangeText = rangeText || 'all'
      continue
    }

    throw new Error(`不支持的参数：${arg}`)
  }

  return options
}

function toPosix(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join('/')
}

function getLocalBin(name) {
  const executable = process.platform === 'win32' ? `${name}.cmd` : name
  const fullPath = path.join(repoRoot, 'node_modules', '.bin', executable)
  return fs.existsSync(fullPath) ? fullPath : null
}

function canRun(command, args) {
  const result = spawnSync(command, args, {
    encoding: 'utf8',
    stdio: 'ignore',
  })
  return result.status === 0
}

function resolvePrettier() {
  const localBin = getLocalBin('prettier')
  if (localBin) return { command: localBin, argsPrefix: [] }
  if (canRun('prettier', ['--version']))
    return { command: 'prettier', argsPrefix: [] }
  return null
}

function resolveClangFormat() {
  if (canRun('clang-format', ['--version'])) {
    return { command: 'clang-format', argsPrefix: [] }
  }
  return null
}

function resolveBlack() {
  const localCandidates =
    process.platform === 'win32'
      ? [
          {
            command: path.join(repoRoot, '.venv', 'Scripts', 'python.exe'),
            argsPrefix: ['-m', 'black'],
          },
        ]
      : [
          {
            command: path.join(repoRoot, '.venv', 'bin', 'python'),
            argsPrefix: ['-m', 'black'],
          },
        ]

  const candidates = [
    ...localCandidates,
    { command: 'python3', argsPrefix: ['-m', 'black'] },
    { command: 'python', argsPrefix: ['-m', 'black'] },
  ]

  if (process.platform === 'win32') {
    candidates.unshift(
      { command: 'py', argsPrefix: ['-3', '-m', 'black'] },
      { command: 'py', argsPrefix: ['-m', 'black'] },
    )
  }

  for (const candidate of candidates) {
    if (canRun(candidate.command, [...candidate.argsPrefix, '--version'])) {
      return candidate
    }
  }

  return null
}

function extractNoteNumber(dirName) {
  const match = dirName.match(/^(\d+)\./)
  return match ? Number(match[1]) : null
}

function isNoteInRange(dirName, notesRanges) {
  if (!notesRanges) return true

  const noteNumber = extractNoteNumber(dirName)
  if (noteNumber === null) return false

  return notesRanges.some(
    (range) => noteNumber >= range.start && noteNumber <= range.end,
  )
}

function collectFiles(dirPath, result = []) {
  if (!fs.existsSync(dirPath)) return result

  const entries = fs.readdirSync(dirPath, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue
      collectFiles(path.join(dirPath, entry.name), result)
      continue
    }

    const filePath = path.join(dirPath, entry.name)
    const ext = path.extname(entry.name).toLowerCase()
    if (PRETTIER_EXTS.has(ext) || CLANG_EXTS.has(ext) || PYTHON_EXTS.has(ext)) {
      result.push(filePath)
    }
  }

  return result
}

// notes 目录按题号分目录组织，这里允许通过命令行参数只检查某一段题号范围。
function collectNoteFiles(notesRanges) {
  const result = []

  if (!fs.existsSync(notesRoot)) return result

  const entries = fs.readdirSync(notesRoot, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(notesRoot, entry.name)

    if (!entry.isDirectory()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (
        PRETTIER_EXTS.has(ext) ||
        CLANG_EXTS.has(ext) ||
        PYTHON_EXTS.has(ext)
      ) {
        result.push(fullPath)
      }
      continue
    }

    if (!isNoteInRange(entry.name, notesRanges)) continue
    collectFiles(fullPath, result)
  }

  return result
}

function run(command, args) {
  return spawnSync(command, args, {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
  })
}

function checkBasicTextRules(filePath, issues) {
  const content = fs.readFileSync(filePath, 'utf8')
  const ext = path.extname(filePath).toLowerCase()

  if (content.includes('\r')) {
    issues.push({ file: toPosix(filePath), reason: '包含 CRLF 或 CR 换行符' })
  }

  if (content.length > 0 && !content.endsWith('\n')) {
    issues.push({ file: toPosix(filePath), reason: '文件末尾缺少换行' })
  }

  if (ext === '.md') return

  const lines = content.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (/[ \t]+$/.test(lines[i])) {
      issues.push({
        file: toPosix(filePath),
        reason: `第 ${i + 1} 行存在行尾空白字符`,
      })
      break
    }
  }
}

function checkWithPrettier(filePath, prettier, issues, errors) {
  const result = run(prettier.command, [
    ...prettier.argsPrefix,
    '--check',
    filePath,
  ])
  if (result.status === 0) return
  if (result.status === 1) {
    issues.push({ file: toPosix(filePath), reason: 'Prettier 检查未通过' })
    return
  }
  errors.push({
    file: toPosix(filePath),
    reason: (result.stderr || result.stdout || 'Prettier 执行失败').trim(),
  })
}

function checkWithClangFormat(filePath, clangFormat, issues, errors) {
  const original = fs.readFileSync(filePath, 'utf8')
  const result = run(clangFormat.command, [
    ...clangFormat.argsPrefix,
    '--style=file',
    filePath,
  ])

  if (result.status !== 0) {
    errors.push({
      file: toPosix(filePath),
      reason: (
        result.stderr ||
        result.stdout ||
        'clang-format 执行失败'
      ).trim(),
    })
    return
  }

  if (result.stdout !== original) {
    issues.push({ file: toPosix(filePath), reason: 'clang-format 检查未通过' })
  }
}

function checkWithBlack(filePath, black, issues, errors) {
  const result = run(black.command, [
    ...black.argsPrefix,
    '--check',
    '--quiet',
    filePath,
  ])
  if (result.status === 0) return
  if (result.status === 1) {
    issues.push({ file: toPosix(filePath), reason: 'Black 检查未通过' })
    return
  }
  errors.push({
    file: toPosix(filePath),
    reason: (result.stderr || result.stdout || 'Black 执行失败').trim(),
  })
}

function printSection(title, items) {
  if (items.length === 0) return
  console.log(`\n${title}`)
  for (const item of items) {
    console.log(`- ${item.file}: ${item.reason}`)
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.showHelp) {
    printHelp()
    return
  }

  const files = [
    ...collectNoteFiles(options.notesRanges),
    ...collectFiles(scriptsRoot),
  ]
  const prettierFiles = []
  const clangFiles = []
  const pythonFiles = []

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase()
    if (PRETTIER_EXTS.has(ext)) prettierFiles.push(filePath)
    else if (CLANG_EXTS.has(ext)) clangFiles.push(filePath)
    else if (PYTHON_EXTS.has(ext)) pythonFiles.push(filePath)
  }

  const basicIssues = []
  const formatterIssues = []
  const formatterErrors = []
  const warnings = []

  for (const filePath of files) {
    checkBasicTextRules(filePath, basicIssues)
  }

  const prettier = resolvePrettier()
  const clangFormat = resolveClangFormat()
  const black = resolveBlack()

  if (prettierFiles.length > 0) {
    if (!prettier) {
      warnings.push({
        file: 'prettier',
        reason:
          '未找到 Prettier。建议在仓库根目录执行 `pnpm add -D prettier` 后重试。',
      })
    } else {
      for (const filePath of prettierFiles) {
        checkWithPrettier(filePath, prettier, formatterIssues, formatterErrors)
      }
    }
  }

  if (clangFiles.length > 0) {
    if (!clangFormat) {
      warnings.push({
        file: 'clang-format',
        reason: '未找到 clang-format，无法检查 C/C++ 文件格式',
      })
    } else {
      for (const filePath of clangFiles) {
        checkWithClangFormat(
          filePath,
          clangFormat,
          formatterIssues,
          formatterErrors,
        )
      }
    }
  }

  if (pythonFiles.length > 0) {
    if (!black) {
      warnings.push({
        file: 'black',
        reason:
          process.platform === 'win32'
            ? '未找到 Black。建议先创建虚拟环境并安装：`py -3 -m venv .venv`，再执行 `.venv\\Scripts\\python.exe -m pip install black`。'
            : '未找到 Black。建议先创建虚拟环境并安装：`python3 -m venv .venv`，再执行 `./.venv/bin/python -m pip install black`。',
      })
    } else {
      for (const filePath of pythonFiles) {
        checkWithBlack(filePath, black, formatterIssues, formatterErrors)
      }
    }
  }

  console.log('格式检查摘要')
  console.log(`- notes 扫描范围：${options.notesRangeText}`)
  console.log(`- 扫描文件总数：${files.length}`)
  console.log(`- Prettier 检查文件数：${prettierFiles.length}`)
  console.log(`- clang-format 检查文件数：${clangFiles.length}`)
  console.log(`- Black 检查文件数：${pythonFiles.length}`)

  printSection('基础文本规则问题：', basicIssues)
  printSection('格式化检查未通过：', formatterIssues)
  printSection('格式化工具执行失败：', formatterErrors)
  printSection('缺少格式化工具：', warnings)

  const hasProblems =
    basicIssues.length > 0 ||
    formatterIssues.length > 0 ||
    formatterErrors.length > 0 ||
    warnings.length > 0

  if (hasProblems) {
    console.log('\n格式检查未通过')
    process.exitCode = 1
    return
  }

  console.log('\n所有已检查文件都符合当前格式规则')
}

try {
  main()
} catch (error) {
  console.error(`格式检查脚本执行失败：${error.message}`)
  process.exitCode = 1
}
