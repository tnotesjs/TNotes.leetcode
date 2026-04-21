# scripts/format-check

用于存放格式检查相关脚本。

| 文件              | 简介                                         |
| ----------------- | -------------------------------------------- |
| `format-check.js` | 检查或修复各题目 solutions/ 下的题解文件格式 |

## 用法

```bash
pnpm tn:format
pnpm tn:format -- --mode=2
node scripts/format-check/format-check.js
node scripts/format-check/format-check.js --mode=2
node scripts/format-check/format-check.js --notes-range=0001
node scripts/format-check/format-check.js --notes-range=0001-0100
node scripts/format-check/format-check.js --notes-range=0026,0131,0200-0210 --mode=2
node scripts/format-check/format-check.js --notes-range=0001-0100 --ext=js,py
node scripts/format-check/format-check.js --help
```

## 说明

- 只扫描 `notes/` 下各题目目录中的 `solutions/` 子目录
- 默认作用范围是 `0001`
- 默认执行模式是 `1`，表示只检查不改写文件
  - `1` 表示只检查
  - `2` 表示检查并修复
- 默认检查后缀是 `all`，当前支持 `c`、`cpp`、`js`、`py`
- `--notes-range` 支持单个编号、编号区间和多个条件组合
- `--mode` 支持通过数字选择执行模式
- `--ext` 支持指定一个或多个后缀，使用逗号分隔
- `--fix` 仍可用作兼容别名，等价于 `--mode=2`
- 按题目为单位实时输出检查/修复进度
- 执行 `pnpm tn:format` 时，脚本会交互式询问范围、模式和后缀；直接回车则使用默认值
- 检查规则会结合仓库中的 `.editorconfig`、`.clang-format` 以及本机可用的 Prettier、clang-format、Black

## 格式化配置信息的分布

- `.editorconfig`
  - 负责仓库级的基础文本规则
  - 包括换行符、末尾换行、行尾空白、默认缩进宽度等通用约束
- `.prettierrc.json`
  - 负责 Prettier 的仓库级规则
  - 当前主要用于约束 JS / JSON / Markdown / HTML / CSS / Vue 等文件的格式化行为
- `.clang-format`
  - 负责 C / C++ 的仓库级格式化规则
  - 当前配置以 LLVM 风格为基础，并结合仓库当前的 C / C++ 书写习惯做少量覆盖
- `.vscode/settings.json`
  - 负责 VS Code 中各语言格式化器的绑定方式
  - 例如 JS / Markdown 默认走 Prettier，Python 默认走 Black，C / C++ 默认走 cpptools + `.clang-format`
- `scripts/format-check/format-check.js`
  - 负责将上述规则串起来执行检查或修复
  - 支持交互式输入，也支持通过命令行参数直接指定范围、模式和后缀

## 格式化配置规范

- 仓库当前保留的格式化基础设施包括 `.editorconfig`、`.prettierrc.json`、`.clang-format` 和 `scripts/format-check/format-check.js`
- 当前各语言的主格式化工具如下：
  - JS / JSON / Markdown / HTML / CSS / SCSS / Vue：Prettier
  - Python：Black
  - C / C++：clang-format（通过 VS Code C/C++ 扩展读取 `.clang-format`）
- 保存时自动格式化保持开启，确保仓库中的日常改动能够及时落到统一规则上
- 格式化方案的目标是“仓库内部一致 + 社区主流实践”，不以追求与 LeetCode 平台逐行一致为目标
- 仓库级格式规则优先落在 `.editorconfig`、`.prettierrc.json`、`.clang-format` 这类配置文件中，而不是散落在某台设备的个人编辑器设置里
- `.vscode/settings.json` 主要负责绑定格式化器和控制触发时机，不承载诸如分号、引号这类已经由仓库配置文件定义的格式规则
- 在当前格式化方案稳定后，这些配置默认视为只读基础设施，除非遇到必须修复的格式化问题，否则尽量不再调整
- 如果确实需要调整格式化配置，修改完成后必须执行一次批量格式修复，保持历史文件与新规则一致
  - 全量修复推荐命令：`pnpm tn:format -- --notes-range=all --mode=2`
  - 如果只修复明确受影响的题号范围，可继续通过 `--notes-range` 指定局部范围
  - 如果使用交互模式执行 `pnpm tn:format`，则需要在提示中显式选择目标范围，并将模式设为 `2`
- 如果能够明确确认影响范围，也可以结合 `--notes-range` 对局部题号执行修复，但默认应优先保证仓库内相关文件与新规则一致
- 新增或调整格式化规则时，优先保证：
  - 规则稳定、可自动化执行
  - 不依赖单台设备的本地环境
  - 与主流工具的默认行为或常见工程实践相兼容
  - 与 `scripts/format-check/format-check.js` 的检测结果保持一致
