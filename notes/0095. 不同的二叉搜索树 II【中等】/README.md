# [0095. 不同的二叉搜索树 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0095.%20%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - xxx](#2--s1---xxx)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/unique-binary-search-trees-ii/)

给你一个整数 `n`，请你生成并返回所有由 `n` 个节点组成且节点值从 `1` 到 `n` 互不相同的不同 二叉搜索树。可以按 任意顺序 返回答案。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-51-42.png)

```txt
输入：n = 3
输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```

示例 2：

```txt
输入：n = 1
输出：[[1]]
```

---

提示：

- `1 <= n <= 8`

## 2. 🎯 s.1 - 递归构建

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\frac{4^n}{\sqrt{n}})$，即卡特兰数 $C_n$，每棵树还需 $O(n)$ 时间构建节点
- 空间复杂度：$O(\frac{4^n}{\sqrt{n}})$，存储所有生成的树

算法思路：

- 对于 BST，任意选择一个节点 `i` 作为根，则 `[lo, i-1]` 构成左子树，`[i+1, hi]` 构成右子树
- 递归函数 `build(lo, hi)` 返回 `[lo, hi]` 范围内所有可能的 BST 根节点列表
- 枚举每个 `i` 作为根，组合所有左子树和右子树的可能性，拼接成完整的树
- 当 `lo > hi` 时，返回 `[null]` 表示空子树
