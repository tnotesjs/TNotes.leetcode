# [2096. 从二叉树一个节点到另一个节点每一步的方向【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2096.%20%E4%BB%8E%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%80%E4%B8%AA%E8%8A%82%E7%82%B9%E5%88%B0%E5%8F%A6%E4%B8%80%E4%B8%AA%E8%8A%82%E7%82%B9%E6%AF%8F%E4%B8%80%E6%AD%A5%E7%9A%84%E6%96%B9%E5%90%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)

给你一棵 二叉树 的根节点 `root` ，这棵二叉树总共有 `n` 个节点。每个节点的值为 `1` 到 `n` 中的一个整数，且互不相同。给你一个整数 `startValue` ，表示起点节点 `s` 的值，和另一个不同的整数 `destValue` ，表示终点节点 `t` 的值。

请找到从节点 `s` 到节点 `t` 的 最短路径 ，并以字符串的形式返回每一步的方向。每一步用 大写 字母 `'L'` ，`'R'` 和 `'U'` 分别表示一种方向：

- `'L'` 表示从一个节点前往它的 左孩子 节点。
- `'R'` 表示从一个节点前往它的 右孩子 节点。
- `'U'` 表示从一个节点前往它的 父 节点。

请你返回从 `s` 到 `t` 最短路径 每一步的方向。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-22-07.png)

```txt
输入：root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
输出："UURL"
解释：最短路径为：3 → 1 → 5 → 2 → 6 。
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-22-12.png)

```txt
输入：root = [2,1], startValue = 2, destValue = 1
输出："L"
解释：最短路径为：2 → 1 。
```

---

提示：

- 树中节点数目为 `n` 。
- `2 <= n <= 10^5`
- `1 <= Node.val <= n`
- 树中所有节点的值 互不相同 。
- `1 <= startValue, destValue <= n`
- `startValue != destValue`

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
