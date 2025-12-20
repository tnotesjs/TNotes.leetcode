# [1026. 节点与其祖先之间的最大差值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1026.%20%E8%8A%82%E7%82%B9%E4%B8%8E%E5%85%B6%E7%A5%96%E5%85%88%E4%B9%8B%E9%97%B4%E7%9A%84%E6%9C%80%E5%A4%A7%E5%B7%AE%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/)

给定二叉树的根节点 `root`，找出存在于 不同 节点 `A` 和 `B` 之间的最大值 `V`，其中 `V = |A.val - B.val|`，且 `A` 是 `B` 的祖先。

（如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-21-11.png)

```txt
输入：root = [8,3,10,1,6,null,14,null,null,4,7,13]
输出：7
解释：
我们有大量的节点与其祖先的差值，其中一些如下：
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
在所有可能的差值中，最大值 7 由 |8 - 1| = 7 得出。
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-21-18.png)

```txt
输入：root = [1,null,2,null,0,3]
输出：3
```

---

提示：

- 树中的节点数在 `2` 到 `5000` 之间。
- `0 <= Node.val <= 10^5`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
