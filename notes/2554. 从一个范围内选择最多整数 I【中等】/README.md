# [2554. 从一个范围内选择最多整数 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2554.%20%E4%BB%8E%E4%B8%80%E4%B8%AA%E8%8C%83%E5%9B%B4%E5%86%85%E9%80%89%E6%8B%A9%E6%9C%80%E5%A4%9A%E6%95%B4%E6%95%B0%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-integers-to-choose-from-a-range-i/)

给你一个整数数组 `banned` 和两个整数 `n` 和 `maxSum` 。你需要按照以下规则选择一些整数：

- 被选择整数的范围是 `[1, n]` 。
- 每个整数 至多 选择 一次 。
- 被选择整数不能在数组 `banned` 中。
- 被选择整数的和不超过 `maxSum` 。

请你返回按照上述规则 最多 可以选择的整数数目。

---

- 示例 1：

```txt
输入：banned = [1,6,5], n = 5, maxSum = 6
输出：2
解释：你可以选择整数 2 和 4 。
2 和 4 在范围 [1, 5] 内，且它们都不在 banned 中，它们的和是 6 ，没有超过 maxSum 。
```

- 示例 2：

```txt
输入：banned = [1,2,3,4,5,6,7], n = 8, maxSum = 1
输出：0
解释：按照上述规则无法选择任何整数。
```

- 示例 3：

```txt
输入：banned = [11], n = 7, maxSum = 50
输出：7
解释：你可以选择整数 1, 2, 3, 4, 5, 6 和 7 。
它们都在范围 [1, 7] 中，且都没出现在 banned 中，它们的和是 28 ，没有超过 maxSum 。
```

---

提示：

- `1 <= banned.length <= 10^4`
- `1 <= banned[i], n <= 10^4`
- `1 <= maxSum <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
