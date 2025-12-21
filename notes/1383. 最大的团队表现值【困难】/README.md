# [1383. 最大的团队表现值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1383.%20%E6%9C%80%E5%A4%A7%E7%9A%84%E5%9B%A2%E9%98%9F%E8%A1%A8%E7%8E%B0%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-performance-of-a-team/)

给定两个整数 `n` 和 `k`，以及两个长度为 `n` 的整数数组 `speed` 和 `efficiency`。现有 `n` 名工程师，编号从 `1` 到 `n`。其中 `speed[i]` 和 `efficiency[i]` 分别代表第 `i` 位工程师的速度和效率。

从这 `n` 名工程师中最多选择 `k` 名不同的工程师，使其组成的团队具有最大的团队表现值。

团队表现值 的定义为：一个团队中「所有工程师速度的和」乘以他们「效率值中的最小值」。

请你返回该团队的 ​​​​​​ 最大团队表现值，由于答案可能很大，请你返回结果对 `10^9 + 7` 取余后的结果。

---

- 示例 1：

```txt
输入：n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
输出：60

解释：
我们选择工程师 2（speed=10 且 efficiency=4）和工程师 5（speed=5 且 efficiency=7）。
他们的团队表现值为 performance = (10 + 5) * min(4, 7) = 60 。
```

- 示例 2：

```txt
输入：n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
输出：68

解释：
此示例与第一个示例相同，除了 k = 3 。
我们可以选择工程师 1 ，工程师 2 和工程师 5 得到最大的团队表现值。
表现值为 performance = (2 + 10 + 5) * min(5, 4, 7) = 68 。
```

- 示例 3：

```txt
输入：n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
输出：72
```

---

提示：

- `1 <= k <= n <= 10^5`
- `speed.length == n`
- `efficiency.length == n`
- `1 <= speed[i] <= 10^5`
- `1 <= efficiency[i] <= 10^8`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
