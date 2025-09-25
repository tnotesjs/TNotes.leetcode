# [1812. 判断国际象棋棋盘中一个格子的颜色【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1812.%20%E5%88%A4%E6%96%AD%E5%9B%BD%E9%99%85%E8%B1%A1%E6%A3%8B%E6%A3%8B%E7%9B%98%E4%B8%AD%E4%B8%80%E4%B8%AA%E6%A0%BC%E5%AD%90%E7%9A%84%E9%A2%9C%E8%89%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-color-of-a-chessboard-square/)

给你一个坐标  `coordinates` ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-26-02.png)

如果所给格子的颜色是白色，请你返回  `true`，如果是黑色，请返回  `false` 。

给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。

---

- **示例 1：**

```txt
输入：coordinates = "a1"
输出：false
解释：如上图棋盘所示，"a1" 坐标的格子是黑色的，所以返回 false 。
```

- **示例 2：**

```txt
输入：coordinates = "h3"
输出：true
解释：如上图棋盘所示，"h3" 坐标的格子是白色的，所以返回 true 。
```

- **示例 3：**

```txt
输入：coordinates = "c7"
输出：false
```

---

**提示：**

- `coordinates.length == 2`
- `'a' <= coordinates[0] <= 'h'`
- `'1' <= coordinates[1] <= '8'`

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
