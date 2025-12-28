# [2455. 可被三整除的偶数的平均值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2455.%20%E5%8F%AF%E8%A2%AB%E4%B8%89%E6%95%B4%E9%99%A4%E7%9A%84%E5%81%B6%E6%95%B0%E7%9A%84%E5%B9%B3%E5%9D%87%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/average-value-of-even-numbers-that-are-divisible-by-three/)

给你一个由正整数组成的整数数组 `nums` ，返回其中可被 `3` 整除的所有偶数的平均值。

注意：`n` 个元素的平均值等于 `n` 个元素 求和 再除以 `n` ，结果 向下取整 到最接近的整数。

---

示例 1：

```txt
输入：nums = [1,3,6,10,12,15]
输出：9
解释：6 和 12 是可以被 3 整除的偶数。(6 + 12) / 2 = 9。
```

示例 2：

```txt
输入：nums = [1,2,4,7,10]
输出：0
解释：不存在满足题目要求的整数，所以返回 0。
```

---

提示：

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
