# [2018. 判断单词是否能放入填字游戏内【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2018.%20%E5%88%A4%E6%96%AD%E5%8D%95%E8%AF%8D%E6%98%AF%E5%90%A6%E8%83%BD%E6%94%BE%E5%85%A5%E5%A1%AB%E5%AD%97%E6%B8%B8%E6%88%8F%E5%86%85%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-word-can-be-placed-in-crossword/)

给你一个 `m x n` 的矩阵 `board` ，它代表一个填字游戏 当前 的状态。填字游戏格子中包含小写英文字母（已填入的单词），表示 空 格的 `' '` 和表示 障碍 格子的 `'#'`。

如果满足以下条件，那么我们可以 水平 （从左到右 或者 从右到左）或 竖直 （从上到下 或者 从下到上）填入一个单词：

- 该单词不占据任何 `'#'` 对应的格子。
- 每个字母对应的格子要么是 `' '` （空格）要么与 `board` 中已有字母 匹配。
- 如果单词是 水平 放置的，那么该单词左边和右边 相邻 格子不能为 `' '` 或小写英文字母。
- 如果单词是 竖直 放置的，那么该单词上边和下边 相邻 格子不能为 `' '` 或小写英文字母。

给你一个字符串 `word` ，如果 `word` 可以被放入 `board` 中，请你返回 `true` ，否则请返回 `false`。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-04-34.png)

```txt
输入：board = [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], word = "abc"
输出：true
解释：单词 "abc" 可以如上图放置（从上往下）。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-04-40.png)

```txt
输入：board = [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], word = "ac"
输出：false
解释：无法放置单词，因为放置该单词后上方或者下方相邻格会有空格。
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-04-47.png)

```txt
输入：board = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word = "ca"
输出：true
解释：单词 "ca" 可以如上图放置（从右到左）。
```

---

提示：

- `m == board.length`
- `n == board[i].length`
- `1 <= m * n <= 2 * 10^5`
- `board[i][j]` 可能为 `' '` ，`'#'` 或者一个小写英文字母。
- `1 <= word.length <= max(m, n)`
- `word` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
