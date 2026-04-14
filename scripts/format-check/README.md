# scripts/format-check

用于存放格式检查相关脚本。

| 文件              | 简介                                                           |
| ----------------- | -------------------------------------------------------------- |
| `format-check.js` | 检查 `notes/` 与 `scripts/` 下的文件是否符合仓库约定的格式规则 |

## 用法

```bash
node scripts/format-check/format-check.js
node scripts/format-check/format-check.js --notes-range=all
node scripts/format-check/format-check.js --notes-range=0001-0100
node scripts/format-check/format-check.js --notes-range=0026,0131,0200-0210
node scripts/format-check/format-check.js --help
```

## 说明

- 默认会扫描 `notes/` 与 `scripts/` 目录
- 只检查格式，不会改写文件
- `--notes-range` 支持单个编号、编号区间和多个条件组合
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
  - 当前配置以 LLVM 风格为基础，并结合 LeetCode 上 C 代码的主流排版习惯进行覆盖
- `.vscode/settings.json`
  - 负责 VS Code 中各语言格式化器的绑定方式
  - 例如 JS / Markdown 默认走 Prettier，Python 默认走 Black，C / C++ 默认走 cpptools + `.clang-format`
- `scripts/format-check/format-check.js`
  - 负责将上述规则串起来执行检查
  - 只负责检测，不负责改写文件

## 格式化配置规范

- 仓库中的格式化结果应尽量和 LeetCode 平台上的默认格式化风格保持一致
- 对于仓库当前维护的各类语言，LeetCode 页面中使用 `Ctrl + Shift + F` 格式化后的代码，应当能较自然地落到当前仓库风格中
- 如果任意语言在 LeetCode 上的格式化行为与本地保存后的格式化行为不一致，则优先调整本地的格式化配置，使本地行为尽量向 LeetCode 靠拢，而不是要求手动适配每一份代码
- 格式差异如果属于仓库级统一规则，应优先修改 `.clang-format`、`.prettierrc.json`、`.editorconfig` 这类仓库级配置，而不是依赖某台设备上的个人编辑器设置
- `.vscode/settings.json` 主要用于指定“由谁来格式化”，不应承载过多仅在当前机器生效的个性化格式规则
- 当需要验证某种语言的格式化规则是否与 LeetCode 一致时，按下面流程执行：

1. 将仓库中格式化后的题解复制到 LeetCode 中
2. 在 LeetCode 中按下 `Ctrl + Shift + F` 完成格式化
3. 如果代码格式发生变化，则说明当前本地规则与 LeetCode 不一致，应调整仓库中的格式化规则，保持和 LeetCode 一致

- 新增或调整格式化规则时，优先保证：
  - 规则稳定、可自动化执行
  - 不依赖单台设备的本地环境
  - 与 LeetCode 平台的排版体验尽量一致
  - 与 `scripts/format-check/format-check.js` 的检测结果保持一致
