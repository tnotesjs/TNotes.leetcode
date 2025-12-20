# [0894. 所有可能的真二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0894.%20%E6%89%80%E6%9C%89%E5%8F%AF%E8%83%BD%E7%9A%84%E7%9C%9F%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/all-possible-full-binary-trees/)

给你一个整数 `n` ，请你找出所有可能含 `n` 个节点的 真二叉树 ，并以列表形式返回。答案中每棵树的每个节点都必须符合 `Node.val == 0` 。

答案的每个元素都是一棵真二叉树的根节点。你可以按 任意顺序 返回最终的真二叉树列表。

真二叉树 是一类二叉树，树中每个节点恰好有 `0` 或 `2` 个子节点。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-12-10-20.png)

```txt
输入：n = 7
输出：[
  [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
  [0, 0, 0, null, null, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
  [0, 0, 0, 0, 0, null, null, 0, 0]
]
```

- 示例 2：

```txt
输入：n = 3
输出：[[0,0,0]]
```

---

提示：

- `1 <= n <= 20`

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
