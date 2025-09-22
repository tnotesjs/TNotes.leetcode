# [0637. 二叉树的层平均值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0637.%20%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E5%B1%82%E5%B9%B3%E5%9D%87%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/average-of-levels-in-binary-tree/)

给定一个非空二叉树的根节点 `root` , 以数组的形式返回每一层节点的平均值。与实际答案相差 `10^-5` 以内的答案可以被接受。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-13-27.png)

```txt
输入：root = [3,9,20,null,null,15,7]
输出：[3.00000,14.50000,11.00000]
解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
因此返回 [3, 14.5, 11] 。
```

- **示例 2:**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-13-32.png)

```txt
输入：root = [3,9,20,15,7]
输出：[3.00000,14.50000,11.00000]
```

---

**提示：**

- 树中节点数量在 `[1, 10^4]` 范围内
- `-2^31 <= Node.val <= 2^31 - 1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是二叉树中的节点数量，每个节点都需要访问一次
- 空间复杂度：$O(w)$，其中 w 是二叉树的最大宽度，队列中最多存储一层的所有节点
