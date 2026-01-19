# [1530. 好叶子节点对的数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1530.%20%E5%A5%BD%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%E5%AF%B9%E7%9A%84%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-good-leaf-nodes-pairs/)

给你二叉树的根节点 `root` 和一个整数 `distance`。

如果二叉树中两个 叶 节点之间的 最短路径长度 小于或者等于 `distance`，那它们就可以构成一组 好叶子节点对。

返回树中 好叶子节点对的数量。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-19-29.png)

```txt
输入：root = [1,2,3,null,4], distance = 3
输出：1
解释：树的叶节点是 3 和 4，它们之间的最短路径的长度是 3。这是唯一的好叶子节点对。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-19-34.png)

```txt
输入：root = [1,2,3,4,5,6,7], distance = 3
输出：2
解释：好叶子节点对为 [4,5] 和 [6,7]，最短路径长度都是 2。但是叶子节点对 [4,6] 不满足要求，因为它们之间的最短路径长度为 4。
```

示例 3：

```txt
输入：root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
输出：1
解释：唯一的好叶子节点对是 [2,5]。
```

示例 4：

```txt
输入：root = [100], distance = 1
输出：0
```

示例 5：

```txt
输入：root = [1,1,1], distance = 2
输出：1
```

---

提示：

- `tree` 的节点数在 `[1, 2^10]` 范围内。
- 每个节点的值都在 `[1, 100]` 之间。
- `1 <= distance <= 10`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
