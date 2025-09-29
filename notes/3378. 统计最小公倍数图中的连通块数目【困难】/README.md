# [3378. 统计最小公倍数图中的连通块数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3378.%20%E7%BB%9F%E8%AE%A1%E6%9C%80%E5%B0%8F%E5%85%AC%E5%80%8D%E6%95%B0%E5%9B%BE%E4%B8%AD%E7%9A%84%E8%BF%9E%E9%80%9A%E5%9D%97%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-connected-components-in-lcm-graph/)

给你一个长度为 `n` 的整数数组 `nums` 和一个 **正** 整数 `threshold` 。

有一张 `n` 个节点的图，其中第 `i` 个节点的值为 `nums[i]` 。如果两个节点对应的值满足 `lcm(nums[i], nums[j]) <= threshold` ，那么这两个节点在图中有一条 **无向** 边连接。

请你返回这张图中 **连通块** 的数目。

一个 **连通块** 指的是一张图中的一个子图，子图中任意两个节点都存在路径相连，且子图中没有任何一个节点与子图以外的任何节点有边相连。

`lcm(a, b)` 的意思是 `a` 和 `b` 的 **最小公倍数** 。

---

- **示例 1：**

**输入：** nums = [2,4,8,3,9], threshold = 5

**输出：** 4

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-38-14.png)

四个连通块分别为 `(2, 4)` ，`(3)` ，`(8)` ，`(9)` 。

---

- **示例 2：**

**输入：** nums = [2,4,8,3,9,12], threshold = 10

**输出：** 2

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-38-27.png)

两个连通块分别为 `(2, 3, 4, 8, 9)` 和 `(12)` 。

---

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `nums` 中所有元素互不相同。
- `1 <= threshold <= 2 * 10^5`

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
