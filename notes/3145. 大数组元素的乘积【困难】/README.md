# [3145. 大数组元素的乘积【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3145.%20%E5%A4%A7%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E7%9A%84%E4%B9%98%E7%A7%AF%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-products-of-elements-of-big-array/)

一个非负整数 `x` 的 **强数组** 指的是满足元素为 2 的幂且元素总和为 `x` 的最短有序数组。下表说明了如何确定 **强数组** 的示例。可以证明，`x` 对应的强数组是独一无二的。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-08-07-55.png)

我们将每一个升序的正整数 `i` （即 1，2，3 等等）的 **强数组** 连接得到数组 `big_nums` ，`big_nums` 开始部分为 `[1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, ...]` 。

给你一个二维整数数组 `queries` ，其中 `queries[i] = [fromi, toi, modi]` ，你需要计算 `(big_nums[fromi] * big_nums[fromi + 1] * ... * big_nums[toi]) % modi` 。

请你返回一个整数数组 `answer` ，其中 `answer[i]` 是第 `i` 个查询的答案。

---

- **示例 1：**

**输入：** queries = [[1,3,7]]

**输出：** [4]

**解释：**

只有一个查询。

`big_nums[1..3] = [2,1,2]` 。它们的乘积为 4。结果为 `4 % 7 = 4`。

---

- **示例 2：**

**输入：** queries = [[2,5,3],[7,7,4]]

**输出：** [2,2]

**解释：**

有两个查询。

第一个查询：`big_nums[2..5] = [1,2,4,1]` 。它们的乘积为 8 。结果为 `8 % 3 = 2`。

第二个查询：`big_nums[7] = 2` 。结果为 `2 % 4 = 2`。

---

**提示：**

- `1 <= queries.length <= 500`
- `queries[i].length == 3`
- `0 <= queries[i][0] <= queries[i][1] <= 10^15`
- `1 <= queries[i][2] <= 10^5`

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
