#!/usr/bin/env node

// node scripts/format-check/format-check.js
// node scripts/format-check/format-check.js --fix
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

const PRETTIER_EXTS = new Set(['.js'])
const CLANG_EXTS = new Set(['.c', '.cpp'])
const PYTHON_EXTS = new Set(['.py'])

function printHelp() {
  console.log('用法：node scripts/format-check/format-check.js [选项]')
  console.log('')
  console.log('选项：')
  console.log('  --fix                      自动修复格式问题')
  console.log('  --notes-range=范围         指定检查的题目范围')
  console.log('  --help, -h                 显示帮助信息')
  console.log('')
  console.log('范围示例：')
  console.log('  --notes-range=all              扫描全部题目（默认值）')
  console.log('  --notes-range=0001-0100        只扫描编号 0001~0100')
  console.log('  --notes-range=0026,0131,0200-0210  多个编号或区间，逗号分隔')
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
    fix: false,
    showHelp: false,
  }

  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') {
      options.showHelp = true
      continue
    }

    if (arg === '--fix') {
      options.fix = true
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

// 递归收集 solutions 目录下的所有可格式化文件
function collectSolutionFiles(solutionsDir) {
  const result = []
  if (!fs.existsSync(solutionsDir)) return result

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name))
        continue
      }

      const ext = path.extname(entry.name).toLowerCase()
      if (
        PRETTIER_EXTS.has(ext) ||
        CLANG_EXTS.has(ext) ||
        PYTHON_EXTS.has(ext)
      ) {
        result.push(path.join(dir, entry.name))
      }
    }
  }

  walk(solutionsDir)
  return result
}

function run(command, args) {
  return spawnSync(command, args, {
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
  })
}

// ---- 检查函数 ----

function checkWithPrettier(filePath, prettier) {
  const result = run(prettier.command, [
    ...prettier.argsPrefix,
    '--check',
    filePath,
  ])
  if (result.status === 0) return null
  if (result.status === 1) return { reason: 'Prettier 检查未通过' }
  return {
    reason: (result.stderr || result.stdout || 'Prettier 执行失败').trim(),
    isError: true,
  }
}

function checkWithClangFormat(filePath, clangFormat) {
  const original = fs.readFileSync(filePath, 'utf8')
  const result = run(clangFormat.command, [
    ...clangFormat.argsPrefix,
    '--style=file',
    filePath,
  ])

  if (result.status !== 0) {
    return {
      reason: (
        result.stderr ||
        result.stdout ||
        'clang-format 执行失败'
      ).trim(),
      isError: true,
    }
  }

  if (result.stdout !== original) return { reason: 'clang-format 检查未通过' }
  return null
}

function checkWithBlack(filePath, black) {
  const result = run(black.command, [
    ...black.argsPrefix,
    '--check',
    '--quiet',
    filePath,
  ])
  if (result.status === 0) return null
  if (result.status === 1) return { reason: 'Black 检查未通过' }
  return {
    reason: (result.stderr || result.stdout || 'Black 执行失败').trim(),
    isError: true,
  }
}

// ---- 修复函数 ----

function fixWithPrettier(filePath, prettier) {
  const before = fs.readFileSync(filePath, 'utf8')
  const result = run(prettier.command, [
    ...prettier.argsPrefix,
    '--write',
    filePath,
  ])
  if (result.status !== 0) {
    return {
      reason: (result.stderr || result.stdout || 'Prettier 修复失败').trim(),
      isError: true,
    }
  }
  const after = fs.readFileSync(filePath, 'utf8')
  if (before !== after) return { reason: 'Prettier 已修复', isFixed: true }
  return null
}

function fixWithClangFormat(filePath, clangFormat) {
  const before = fs.readFileSync(filePath, 'utf8')
  const result = run(clangFormat.command, [
    ...clangFormat.argsPrefix,
    '-i',
    '--style=file',
    filePath,
  ])
  if (result.status !== 0) {
    return {
      reason: (
        result.stderr ||
        result.stdout ||
        'clang-format 修复失败'
      ).trim(),
      isError: true,
    }
  }
  const after = fs.readFileSync(filePath, 'utf8')
  if (before !== after) return { reason: 'clang-format 已修复', isFixed: true }
  return null
}

function fixWithBlack(filePath, black) {
  const before = fs.readFileSync(filePath, 'utf8')
  const result = run(black.command, [...black.argsPrefix, '--quiet', filePath])
  if (result.status !== 0) {
    return {
      reason: (result.stderr || result.stdout || 'Black 修复失败').trim(),
      isError: true,
    }
  }
  const after = fs.readFileSync(filePath, 'utf8')
  if (before !== after) return { reason: 'Black 已修复', isFixed: true }
  return null
}

// ---- 统一处理入口 ----

function processFile(filePath, fix, formatters) {
  const ext = path.extname(filePath).toLowerCase()

  if (PRETTIER_EXTS.has(ext)) {
    if (!formatters.prettier) return null
    return fix
      ? fixWithPrettier(filePath, formatters.prettier)
      : checkWithPrettier(filePath, formatters.prettier)
  }

  if (CLANG_EXTS.has(ext)) {
    if (!formatters.clangFormat) return null
    return fix
      ? fixWithClangFormat(filePath, formatters.clangFormat)
      : checkWithClangFormat(filePath, formatters.clangFormat)
  }

  if (PYTHON_EXTS.has(ext)) {
    if (!formatters.black) return null
    return fix
      ? fixWithBlack(filePath, formatters.black)
      : checkWithBlack(filePath, formatters.black)
  }

  return null
}

function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.showHelp) {
    printHelp()
    return
  }

  const formatters = {
    prettier: resolvePrettier(),
    clangFormat: resolveClangFormat(),
    black: resolveBlack(),
  }

  const warnings = []
  if (!formatters.prettier) {
    warnings.push('未找到 Prettier，建议执行 `pnpm add -D prettier`')
  }
  if (!formatters.clangFormat) {
    warnings.push('未找到 clang-format，无法处理 C/C++ 文件')
  }
  if (!formatters.black) {
    warnings.push(
      process.platform === 'win32'
        ? '未找到 Black，建议执行 `py -3 -m venv .venv && .venv\\Scripts\\python.exe -m pip install black`'
        : '未找到 Black，建议执行 `python3 -m venv .venv && ./.venv/bin/python -m pip install black`',
    )
  }

  if (warnings.length > 0) {
    for (const w of warnings) console.log(`⚠ ${w}`)
    console.log('')
  }

  const mode = options.fix ? '修复' : '检查'
  console.log(`格式${mode} — notes 范围：${options.notesRangeText}`)
  console.log('')

  if (!fs.existsSync(notesRoot)) {
    console.log('notes 目录不存在')
    return
  }

  const noteEntries = fs
    .readdirSync(notesRoot, { withFileTypes: true })
    .filter(
      (e) => e.isDirectory() && isNoteInRange(e.name, options.notesRanges),
    )
    .sort((a, b) => a.name.localeCompare(b.name))

  let totalFiles = 0
  let totalIssues = 0
  let totalFixed = 0
  let totalErrors = 0

  for (const noteEntry of noteEntries) {
    const noteDir = path.join(notesRoot, noteEntry.name)
    const solutionsDir = path.join(noteDir, 'solutions')
    const files = collectSolutionFiles(solutionsDir)

    if (files.length === 0) continue

    const results = []

    for (const filePath of files) {
      const result = processFile(filePath, options.fix, formatters)
      if (result) {
        const displayPath = path
          .relative(noteDir, filePath)
          .split(path.sep)
          .join('/')
        results.push({ ...result, displayPath })
      }
    }

    totalFiles += files.length

    const errors = results.filter((r) => r.isError)
    const fixed = results.filter((r) => r.isFixed)
    const issues = results.filter((r) => !r.isError && !r.isFixed)

    totalErrors += errors.length
    totalFixed += fixed.length
    totalIssues += issues.length

    // 按题目为单位输出进度
    if (options.fix) {
      if (errors.length > 0) {
        console.log(
          `✗ ${noteEntry.name} — ${errors.length} errors, ${fixed.length} fixed`,
        )
      } else if (fixed.length > 0) {
        console.log(`✓ ${noteEntry.name} — ${fixed.length} fixed`)
      } else {
        console.log(`✓ ${noteEntry.name} — ${files.length} files`)
      }
    } else {
      if (issues.length > 0 || errors.length > 0) {
        console.log(
          `✗ ${noteEntry.name} — ${issues.length + errors.length}/${files.length} files need formatting`,
        )
      } else {
        console.log(`✓ ${noteEntry.name} — ${files.length} files`)
      }
    }

    for (const r of [...issues, ...errors, ...fixed]) {
      console.log(`  - ${r.displayPath}: ${r.reason}`)
    }
  }

  // 汇总
  console.log('')
  console.log('摘要')
  console.log(`- 扫描文件总数：${totalFiles}`)
  if (options.fix) {
    console.log(`- 已修复文件数：${totalFixed}`)
    if (totalErrors > 0) console.log(`- 修复失败数：${totalErrors}`)
  } else {
    if (totalIssues > 0) console.log(`- 格式问题数：${totalIssues}`)
    if (totalErrors > 0) console.log(`- 工具执行失败数：${totalErrors}`)
  }

  if (totalIssues > 0 || totalErrors > 0) {
    if (!options.fix && totalIssues > 0) {
      console.log('')
      console.log('提示：可使用 --fix 参数自动修复格式问题')
    }
    process.exitCode = 1
    return
  }

  console.log('')
  console.log(
    options.fix ? '所有格式问题已修复' : '所有已检查文件都符合当前格式规则',
  )
}

try {
  main()
} catch (error) {
  console.error(`格式检查脚本执行失败：${error.message}`)
  process.exitCode = 1
}
