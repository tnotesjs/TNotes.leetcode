# [1569. 将子数组重新排序得到同一个二叉搜索树的方案数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1569.%20%E5%B0%86%E5%AD%90%E6%95%B0%E7%BB%84%E9%87%8D%E6%96%B0%E6%8E%92%E5%BA%8F%E5%BE%97%E5%88%B0%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%96%B9%E6%A1%88%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-ways-to-reorder-array-to-get-same-bst/)

给你一个数组 `nums` 表示 `1` 到 `n` 的一个排列。我们按照元素在 `nums` 中的顺序依次插入一个初始为空的二叉搜索树（BST）。请你统计将 `nums` 重新排序后，统计满足如下条件的方案数：重排后得到的二叉搜索树与 `nums` 原本数字顺序得到的二叉搜索树相同。

比方说，给你 `nums = [2,1,3]`，我们得到一棵 2 为根，1 为左孩子，3 为右孩子的树。数组 `[2,3,1]` 也能得到相同的 BST，但 `[3,2,1]` 会得到一棵不同的 BST。

请你返回重排 `nums` 后，与原数组 `nums` 得到相同二叉搜索树的方案数。

由于答案可能会很大，请将结果对 `10^9 + 7` 取余数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-02-20.png)

```txt
输入：nums = [2,1,3]
输出：1
解释：我们将 nums 重排， [2,3,1] 能得到相同的 BST。没有其他得到相同 BST 的方案了。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-02-25.png)

```txt
输入：nums = [3,4,5,1,2]
输出：5
解释：下面 5 个数组会得到相同的 BST：
[3,1,2,4,5]
[3,1,4,2,5]
[3,1,4,5,2]
[3,4,1,2,5]
[3,4,1,5,2]
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-15-02-34.png)

```txt
输入：nums = [1,2,3]
输出：0
解释：没有别的排列顺序能得到相同的 BST。
```

---

提示：

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= nums.length`
- `nums` 中所有数 互不相同。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
