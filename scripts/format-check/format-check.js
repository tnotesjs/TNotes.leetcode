#!/usr/bin/env node

// node scripts/format-check/format-check.js
// node scripts/format-check/format-check.js --mode=2
// node scripts/format-check/format-check.js --notes-range=0001-0100
// node scripts/format-check/format-check.js --notes-range=0026,0131,0200-0210 --mode=1 --ext=js,py
// node scripts/format-check/format-check.js --help

import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { spawnSync } from 'child_process'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, '../..')
const notesRoot = path.join(repoRoot, 'notes')

const DEFAULT_NOTES_RANGE = '0001'
const DEFAULT_MODE = '1'
const DEFAULT_EXTENSION_FILTER = 'all'

const FORMATTER_CONFIGS = [
  {
    key: 'prettier',
    label: 'Prettier',
    extensions: ['.js'],
    resolve: resolvePrettier,
    check: checkWithPrettier,
    fix: fixWithPrettier,
    warning: '未找到 Prettier，建议执行 `pnpm add -D prettier`',
  },
  {
    key: 'clangFormat',
    label: 'clang-format',
    extensions: ['.c', '.cpp'],
    resolve: resolveClangFormat,
    check: checkWithClangFormat,
    fix: fixWithClangFormat,
    warning: '未找到 clang-format，无法处理 C/C++ 文件',
  },
  {
    key: 'black',
    label: 'Black',
    extensions: ['.py'],
    resolve: resolveBlack,
    check: checkWithBlack,
    fix: fixWithBlack,
    warning:
      process.platform === 'win32'
        ? '未找到 Black，建议执行 `py -3 -m venv .venv && .venv\\Scripts\\python.exe -m pip install black`'
        : '未找到 Black，建议执行 `python3 -m venv .venv && ./.venv/bin/python -m pip install black`',
  },
]

const SUPPORTED_EXTENSIONS = Array.from(
  new Set(FORMATTER_CONFIGS.flatMap((config) => config.extensions)),
)

function printHelp() {
  console.log('用法：node scripts/format-check/format-check.js [选项]')
  console.log('')
  console.log('选项：')
  console.log(
    `  --notes-range=范围         指定检查的题目范围（默认 ${DEFAULT_NOTES_RANGE}）`,
  )
  console.log(
    '  --mode=1|2                 选择执行模式：1=只检查，2=检查并修复',
  )
  console.log(
    `  --ext=后缀列表             指定检查后缀，支持 ${SUPPORTED_EXTENSIONS.map((ext) => ext.slice(1)).join(', ')} 或 all`,
  )
  console.log('  --fix                      等价于 --mode=2，保留为兼容别名')
  console.log('  --help, -h                 显示帮助信息')
  console.log('')
  console.log('范围示例：')
  console.log(`  默认范围：${DEFAULT_NOTES_RANGE}`)
  console.log('  --notes-range=all              扫描全部题目')
  console.log('  --notes-range=0001-0100        只扫描编号 0001~0100')
  console.log('  --notes-range=0026,0131,0200-0210  多个编号或区间，逗号分隔')
  console.log('')
  console.log('后缀示例：')
  console.log('  --ext=all                      扫描所有受支持后缀（默认值）')
  console.log('  --ext=js,py                    只扫描 JS 和 Python 题解')
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

function parseMode(modeText) {
  if (!modeText || modeText === '1') return false
  if (modeText === '2') return true
  throw new Error('无效的执行模式：仅支持 1（只检查）或 2（检查并修复）')
}

function normalizeExtensionToken(token) {
  const value = token.trim().toLowerCase()
  if (!value) return null
  return value.startsWith('.') ? value : `.${value}`
}

function parseExtensionFilter(filterText) {
  if (!filterText || filterText === DEFAULT_EXTENSION_FILTER) {
    return {
      extensionFilterText: DEFAULT_EXTENSION_FILTER,
      activeExtensions: new Set(SUPPORTED_EXTENSIONS),
    }
  }

  const activeExtensions = new Set()

  for (const segment of filterText.split(',')) {
    const extension = normalizeExtensionToken(segment)
    if (!extension) continue
    if (!SUPPORTED_EXTENSIONS.includes(extension)) {
      throw new Error(`不支持的后缀：${segment.trim()}`)
    }
    activeExtensions.add(extension)
  }

  if (activeExtensions.size === 0) {
    throw new Error('后缀列表不能为空')
  }

  return {
    extensionFilterText: Array.from(activeExtensions)
      .map((extension) => extension.slice(1))
      .join(','),
    activeExtensions,
  }
}

function createDefaultOptions() {
  return {
    notesRanges: parseNotesRange(DEFAULT_NOTES_RANGE),
    notesRangeText: DEFAULT_NOTES_RANGE,
    fix: parseMode(DEFAULT_MODE),
    modeText: DEFAULT_MODE,
    extensionFilterText: DEFAULT_EXTENSION_FILTER,
    activeExtensions: new Set(SUPPORTED_EXTENSIONS),
    showHelp: false,
    notesRangeProvided: false,
    modeProvided: false,
    extensionProvided: false,
  }
}

function applyNotesRangeOption(options, rangeText) {
  options.notesRanges = parseNotesRange(rangeText)
  options.notesRangeText = rangeText || DEFAULT_NOTES_RANGE
  options.notesRangeProvided = true
}

function applyModeOption(options, modeText) {
  options.fix = parseMode(modeText)
  options.modeText = modeText || DEFAULT_MODE
  options.modeProvided = true
}

function applyExtensionOption(options, filterText) {
  const parsed = parseExtensionFilter(filterText)
  options.activeExtensions = parsed.activeExtensions
  options.extensionFilterText = parsed.extensionFilterText
  options.extensionProvided = true
}

function parseArgs(argv) {
  const options = createDefaultOptions()

  for (const arg of argv) {
    if (arg === '--') {
      continue
    }

    if (arg === '--help' || arg === '-h') {
      options.showHelp = true
      continue
    }

    if (arg === '--fix') {
      applyModeOption(options, '2')
      continue
    }

    if (arg.startsWith('--notes-range=')) {
      const rangeText = arg.slice('--notes-range='.length).trim()
      applyNotesRangeOption(options, rangeText || DEFAULT_NOTES_RANGE)
      continue
    }

    if (arg.startsWith('--mode=')) {
      const modeText = arg.slice('--mode='.length).trim()
      applyModeOption(options, modeText || DEFAULT_MODE)
      continue
    }

    if (arg.startsWith('--ext=')) {
      const filterText = arg.slice('--ext='.length).trim()
      applyExtensionOption(options, filterText || DEFAULT_EXTENSION_FILTER)
      continue
    }

    throw new Error(`不支持的参数：${arg}`)
  }

  return options
}

function shouldPromptForMissingOptions(options) {
  return (
    process.stdin.isTTY &&
    process.stdout.isTTY &&
    (!options.notesRangeProvided ||
      !options.modeProvided ||
      !options.extensionProvided)
  )
}

function askQuestion(rl, message) {
  return new Promise((resolve) => rl.question(message, resolve))
}

async function promptOption(rl, message, applyValue) {
  while (true) {
    const answer = (await askQuestion(rl, message)).trim()
    if (!answer) return

    try {
      applyValue(answer)
      return
    } catch (error) {
      console.log(`输入无效：${error.message}`)
      console.log('')
    }
  }
}

async function completeOptionsWithPrompts(options) {
  if (!shouldPromptForMissingOptions(options)) return options

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  try {
    console.log('格式化配置：直接回车表示使用默认值。')
    console.log('')

    if (!options.notesRangeProvided) {
      await promptOption(
        rl,
        `请输入 notes 范围（默认 ${DEFAULT_NOTES_RANGE}）：`,
        (value) => applyNotesRangeOption(options, value),
      )
    }

    if (!options.modeProvided) {
      await promptOption(
        rl,
        `请选择执行模式（1: 只检查, 2: 检查 + 修复，默认 ${DEFAULT_MODE}）：`,
        (value) => applyModeOption(options, value),
      )
    }

    if (!options.extensionProvided) {
      await promptOption(
        rl,
        `请输入检查后缀（默认 ${DEFAULT_EXTENSION_FILTER}，支持 c,cpp,js,py 或逗号组合）：`,
        (value) => applyExtensionOption(options, value),
      )
    }
  } finally {
    rl.close()
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

function getFormatterConfigByExtension(extension) {
  return FORMATTER_CONFIGS.find((config) =>
    config.extensions.includes(extension),
  )
}

function getActiveFormatterConfigs(activeExtensions) {
  return FORMATTER_CONFIGS.filter((config) =>
    config.extensions.some((extension) => activeExtensions.has(extension)),
  )
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
function collectSolutionFiles(solutionsDir, activeExtensions) {
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
      if (activeExtensions.has(ext)) {
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

  const formatterConfig = getFormatterConfigByExtension(ext)
  if (!formatterConfig) return null

  const formatter = formatters[formatterConfig.key]
  if (!formatter) return null

  return fix
    ? formatterConfig.fix(filePath, formatter)
    : formatterConfig.check(filePath, formatter)

  return null
}

async function main() {
  const options = parseArgs(process.argv.slice(2))
  if (options.showHelp) {
    printHelp()
    return
  }

  await completeOptionsWithPrompts(options)

  const activeFormatterConfigs = getActiveFormatterConfigs(
    options.activeExtensions,
  )
  const formatters = Object.fromEntries(
    FORMATTER_CONFIGS.map((config) => [config.key, config.resolve()]),
  )

  const warnings = []
  for (const config of activeFormatterConfigs) {
    if (!formatters[config.key]) {
      warnings.push(config.warning)
    }
  }

  if (warnings.length > 0) {
    for (const w of warnings) console.log(`⚠ ${w}`)
    console.log('')
  }

  const mode = options.fix ? '检查并修复' : '检查'
  console.log(
    `格式${mode} — notes 范围：${options.notesRangeText} — 后缀：${options.extensionFilterText}`,
  )
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
    const files = collectSolutionFiles(solutionsDir, options.activeExtensions)

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
      console.log('提示：可重新执行并选择模式 2 自动修复格式问题')
    }
    process.exitCode = 1
    return
  }

  console.log('')
  console.log(
    options.fix ? '所有格式问题已修复' : '所有已检查文件都符合当前格式规则',
  )
}

main().catch((error) => {
  console.error(`格式检查脚本执行失败：${error.message}`)
  process.exitCode = 1
})
