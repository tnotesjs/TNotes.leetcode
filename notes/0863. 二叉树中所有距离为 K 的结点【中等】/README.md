# [0863. 二叉树中所有距离为 K 的结点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0863.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E6%89%80%E6%9C%89%E8%B7%9D%E7%A6%BB%E4%B8%BA%20K%20%E7%9A%84%E7%BB%93%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/all-nodes-distance-k-in-binary-tree/)

给定一个二叉树（具有根结点 `root`）， 一个目标结点 `target` ，和一个整数值 `k` ，返回到目标结点 `target` 距离为 `k` 的所有结点的值的数组。

答案可以以 **任何顺序** 返回。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-11-55-15.png)

```txt
输入：root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
输出：[7,4,1]
解释：所求结点为与目标结点（值为 5）距离为 2 的结点，值分别为 7，4，以及 1
```

- **示例 2:**

```txt
输入: root = [1], target = 1, k = 3
输出: []
```

---

**提示:**

- 节点数在 `[1, 500]` 范围内
- `0 <= Node.val <= 500`
- `Node.val` 中所有值 **不同**
- 目标结点 `target` 是树上的结点。
- `0 <= k <= 1000`

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
