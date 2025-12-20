# [0998. 最大二叉树 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0998.%20%E6%9C%80%E5%A4%A7%E4%BA%8C%E5%8F%89%E6%A0%91%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-binary-tree-ii/)

最大树 定义：一棵树，并满足：其中每个节点的值都大于其子树中的任何其他值。

给你最大树的根节点 `root` 和一个整数 `val` 。

就像 之前的问题（[654. 最大二叉树][1]） 那样，给定的树是利用 `Construct(a)` 例程从列表 `a`（`root = Construct(a)`）递归地构建的：

- 如果 `a` 为空，返回 `null` 。
- 否则，令 `a[i]` 作为 `a` 的最大元素。创建一个值为 `a[i]` 的根节点 `root` 。
- `root` 的左子树将被构建为 `Construct([a[0], a[1], ..., a[i - 1]])` 。
- `root` 的右子树将被构建为 `Construct([a[i + 1], a[i + 2], ..., a[a.length - 1]])` 。
- 返回 `root` 。

请注意，题目没有直接给出 `a` ，只是给出一个根节点 `root = Construct(a)` 。

假设 `b` 是 `a` 的副本，并在末尾附加值 `val`。题目数据保证 `b` 中的值互不相同。

返回 `Construct(b)` 。

---

- 示例 1：

```txt
输入：root = [4,1,3,null,null,2], val = 5
输出：[5,4,null,1,3,null,null,2]
解释：a = [1,4,2,3], b = [1,4,2,3,5]
```

- \*示例 2：

```txt
输入：root = [5,2,4,null,1], val = 3
输出：[5,2,4,null,1,null,3]
解释：a = [2,1,5,4], b = [2,1,5,4,3]
```

示例 3：

```txt
输入：root = [5,2,3,null,1], val = 4
输出：[5,2,4,null,1,3]
解释：a = [2,1,5,3], b = [2,1,5,3,4]
```

---

提示：

- 树中节点数目在范围 `[1, 100]` 内
- `1 <= Node.val <= 100`
- 树中的所有值 互不相同
- `1 <= val <= 100`

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

## 5. 🔗 引用

- [654. 最大二叉树][1]

[1]: https://leetcode.cn/problems/maximum-binary-tree/
