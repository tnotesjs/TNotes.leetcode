# [3274. 检查棋盘方格颜色是否相同【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3274.%20%E6%A3%80%E6%9F%A5%E6%A3%8B%E7%9B%98%E6%96%B9%E6%A0%BC%E9%A2%9C%E8%89%B2%E6%98%AF%E5%90%A6%E7%9B%B8%E5%90%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-two-chessboard-squares-have-the-same-color/)

给你两个字符串 `coordinate1` 和 `coordinate2`，代表 `8 x 8` 国际象棋棋盘上的两个方格的坐标。

以下是棋盘的参考图。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-20-53-17.png)

如果这两个方格颜色相同，返回 `true`，否则返回 `false`。

坐标总是表示有效的棋盘方格。坐标的格式总是先字母（表示列），再数字（表示行）。

---

- **示例 1：**

**输入：** coordinate1 = "a1", coordinate2 = "c3"

**输出：** true

**解释：**

两个方格均为黑色。

---

- **示例 2：**

**输入：** coordinate1 = "a1", coordinate2 = "h3"

**输出：** false

**解释：**

方格 `"a1"` 是黑色，而 `"h3"` 是白色。

---

**提示：**

- `coordinate1.length == coordinate2.length == 2`
- `'a' <= coordinate1[0], coordinate2[0] <= 'h'`
- `'1' <= coordinate1[1], coordinate2[1] <= '8'`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
