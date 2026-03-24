# [0212. 单词搜索 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0212.%20%E5%8D%95%E8%AF%8D%E6%90%9C%E7%B4%A2%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/word-search-ii/)

给定一个 `m x n` 二维字符网格 `board` 和一个单词（字符串）列表 `words`，_返回所有二维网格上的单词_。

单词必须按照字母顺序，通过 相邻的单元格 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-41-12.png)

```txt
输入：board = [
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
], words = ["oath","pea","eat","rain"]
输出：["eat","oath"]
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-21-41-17.png)

```txt
输入：board = [
  ["a","b"],
  ["c","d"]
], words = ["abcb"]
输出：[]
```

---

提示：

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 12`
- `board[i][j]` 是一个小写英文字母
- `1 <= words.length <= 3 * 10^4`
- `1 <= words[i].length <= 10`
- `words[i]` 由小写英文字母组成
- `words` 中的所有字符串互不相同

## 2. 🎯 s.1 - 字典树 + 回溯

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n \times 4^L)$，其中 $m \times n$ 是网格大小，$L$ 是单词最大长度
- 空间复杂度：$O(T)$，其中 $T$ 是所有单词的字符总数

算法思路：

- 将所有单词插入字典树，然后从网格每个位置出发 DFS
- 沿着字典树节点探索，节点不存在则剪枝，找到单词后置空以去重
