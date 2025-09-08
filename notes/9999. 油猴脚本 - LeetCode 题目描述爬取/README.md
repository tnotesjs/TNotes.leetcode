# [9999. 油猴脚本 - LeetCode 题目描述爬取](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/9999.%20%E6%B2%B9%E7%8C%B4%E8%84%9A%E6%9C%AC%20-%20LeetCode%20%E9%A2%98%E7%9B%AE%E6%8F%8F%E8%BF%B0%E7%88%AC%E5%8F%96)

<!-- region:toc -->

- [1. 📝 概述](#1--概述)
- [2. 💻 demo](#2--demo)

<!-- endregion:toc -->

## 1. 📝 概述

- 该油猴脚本用于从 LeetCode 网站上抓取题目描述并转换成 Markdown 格式，方便用户复制使用。
- 脚本通过添加在右键菜单中注入一个能一键复制 LeetCode 题目描述为 markdown 文本的菜单项。
- 复制的 markdown 内容适配 TNotes.leetcode 中的题目描述格式。在 TNotes.leetcode 中的相关 LeetCode 例题的 `📝 Description` 部分，就是通过这个脚本来获取的。

## 2. 💻 demo

::: code-group

<<< ./scripts/youhou.js [scripts/youhou.js]

:::

- 将上述脚本直接丢到油猴中，然后保存即可。
- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-24-22-15-35.png)
- 使用方式也非常简单，只需要在对应的题解描述区域右键，然后点击【力扣题目转 Markdown】即可复制题目描述。
- ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-10-24-22-17-24.png)
- 下面是以第一题为例复制下来的结果。
  - ![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-05-07-49-29.png)
  - 内容复制下来后，丢到 VSCode 的 markdown 文件中，保存文件内容，自动格式化后，基本没有太多地方需要调整。
  - 在 vscode 中配置 .md 文件保存自动格式化：

::: code-group

```json [.vscode/settings.json]
{
  // 保存时设置文件格式。
  "editor.formatOnSave": true,
  "[markdown]": {
    // 定义一个默认格式化程序, 该格式化程序优先于所有其他格式化程序设置。
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

:::
