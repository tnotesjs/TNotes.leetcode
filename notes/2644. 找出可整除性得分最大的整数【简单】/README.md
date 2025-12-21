# [2644. 找出可整除性得分最大的整数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2644.%20%E6%89%BE%E5%87%BA%E5%8F%AF%E6%95%B4%E9%99%A4%E6%80%A7%E5%BE%97%E5%88%86%E6%9C%80%E5%A4%A7%E7%9A%84%E6%95%B4%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-maximum-divisibility-score/)

给你两个整数数组 `nums` 和 `divisors` 。

`divisors[i]` 的 可整除性得分 等于满足 `nums[j]` 能被 `divisors[i]` 整除的下标 `j` 的数量。

返回 可整除性得分 最大的整数 `divisors[i]` 。如果有多个整数具有最大得分，则返回数值最小的一个。

---

- 示例 1：

```txt
输入：nums = [2,9,15,50], divisors = [5,3,7,2]
输出：2
```

- 解释：
  - `divisors[0]` 的可整除性分数为 2 因为 `nums[2]` 和 `nums[3]` 能被 5 整除。
  - `divisors[1]` 的可整除性分数为 2 因为 `nums[1]` 和 `nums[2]` 能被 3 整除。
  - `divisors[2]` 的可整除性分数为 0 因为 `nums` 中没有数字能被 7 整除。
  - `divisors[3]` 的可整除性分数为 2 因为 `nums[0]` 和 `nums[3]` 能够被 2 整除。
  - 因为 `divisors[0]` 、`divisor[1]` 和 `divisors[3]` 有相同的可整除性分数，我们返回更小的那个 `divisors[3]`。

---

- 示例 2：

```txt
输入：nums = [4,7,9,3,9], divisors = [5,2,3]
输出：3
```

- 解释：
  - `divisors[0]` 的可整除性分数为 0 因为 `nums` 中没有数字能被 5 整除。
  - `divisors[1]` 的可整除性分数为 1 因为只有 `nums[0]` 能被 2 整除。
  - `divisors[2]` 的可整除性分数为 3 因为 `nums[2]` ，`nums[3]` 和 `nums[4]` 能被 3 整除。

---

- 示例 3：

```txt
输入：nums = [20,14,21,10], divisors = [10,16,20]
输出：10
```

- 解释：
  - `divisors[0]` 的可整除性分数为 2 因为 `nums[0]` 和 `nums[3]` 能被 10 整除。
  - `divisors[1]` 的可整除性分数为 0 因为 `nums` 中没有数字能被 16 整除。
  - `divisors[2]` 的可整除性分数为 1 因为 `nums[0]` 能被 20 整除。
  - 因为 `divisors[0]` 的可整除性分数最大，我们返回 `divisors[0]`。

---

提示：

- `1 <= nums.length, divisors.length <= 1000`
- `1 <= nums[i], divisors[i] <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
