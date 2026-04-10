# [0079. 单词搜索【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0079.%20%E5%8D%95%E8%AF%8D%E6%90%9C%E7%B4%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯](#2--s1---回溯)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/word-search/)

给定一个 `m x n` 二维字符网格 `board` 和一个字符串单词 `word`。如果 `word` 存在于网格中，返回 `true`；否则，返回 `false`。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-40-46.png)

```txt
输入：board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], word = "ABCCED"
输出：true
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-40-54.png)

```txt
输入：board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], word = "SEE"
输出：true
```

---

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-41-00.png)

```txt
输入：board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
], word = "ABCB"
输出：false
```

---

提示：

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` 和 `word` 仅由大小写英文字母组成

进阶：你可以使用搜索剪枝的技术来优化解决方案，使其在 `board` 更大的情况下可以更快解决问题？

## 2. 🎯 s.1 - 回溯

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n \times 3^L)$，其中 L 是单词长度，每个位置最多向 3 个方向扩展（排除来路）
- 空间复杂度：$O(L)$，递归栈深度最多为单词长度

算法思路：

- 枚举网格中每个位置作为起点，从该位置开始 DFS 匹配单词
- DFS 时，若当前字符匹配 `word[k]`，将其临时修改为 `'\0'` 标记已访问，向四个方向递归匹配下一个字符
- 递归返回后恢复原字符（回溯），保证不影响其他路径的搜索
- 若 `k == word.length` 说明所有字符已匹配成功，返回 `true`
