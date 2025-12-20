# [0671. 二叉树中第二小的节点【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0671.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E7%AC%AC%E4%BA%8C%E5%B0%8F%E7%9A%84%E8%8A%82%E7%82%B9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 深度优先搜索](#2--s1---深度优先搜索)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/second-minimum-node-in-a-binary-tree/)

给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 `2` 或 `0`。如果一个节点有两个子节点的话，那么该节点的值等于两个子节点中较小的一个。

更正式地说，即 `root.val = min(root.left.val, root.right.val)` 总成立。

给出这样的一个二叉树，你需要输出所有节点中的 第二小的值 。

如果第二小的值不存在的话，输出 -1 。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-26-56.png)

```txt
输入：root = [2,2,5,null,null,5,7]
输出：5
解释：最小的值是 2 ，第二小的值是 5 。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-27-01.png)

```txt
输入：root = [2,2,2]
输出：-1
解释：最小的值是 2, 但是不存在第二小的值。
```

---

提示：

- 树中节点数目在范围 `[1, 25]` 内
- `1 <= Node.val <= 2^31 - 1`
- 对于树中每个节点 `root.val == min(root.left.val, root.right.val)`

## 2. 🎯 s.1 - 深度优先搜索

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树中的节点数量，最坏情况下需要遍历所有节点
- 空间复杂度：$O(h)$，其中 h 是二叉树的高度，主要是递归调用栈的空间消耗
- 解题思路：
  - 利用题目描述中树的特殊性质，可以推断出根节点的值是最小值，我们只需要找到比根节点值大的最小值即可。
- 提交结果：
  - ![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-10-01-10-18-21.png)
