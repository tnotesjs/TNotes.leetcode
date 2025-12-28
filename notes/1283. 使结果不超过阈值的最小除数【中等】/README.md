# [1283. 使结果不超过阈值的最小除数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1283.%20%E4%BD%BF%E7%BB%93%E6%9E%9C%E4%B8%8D%E8%B6%85%E8%BF%87%E9%98%88%E5%80%BC%E7%9A%84%E6%9C%80%E5%B0%8F%E9%99%A4%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-smallest-divisor-given-a-threshold/)

给你一个整数数组 `nums` 和一个正整数 `threshold` ，你需要选择一个正整数作为除数，然后将数组里每个数都除以它，并对除法结果求和。

请你找出能够使上述结果小于等于阈值 `threshold` 的除数中 最小 的那个。

每个数除以除数后都向上取整，比方说 7/3 = 3 ， 10/2 = 5。

题目保证一定有解。

---

- 示例 1：

```txt
输入：nums = [1,2,5,9], threshold = 6
输出：5
解释：如果除数为 1 ，我们可以得到和为 17 （1+2+5+9）。
如果除数为 4 ，我们可以得到和为 7 (1+1+2+3)。如果除数为 5 ，和为 5 (1+1+1+2)。
```

- 示例 2：

```txt
输入：nums = [2,3,5,7,11], threshold = 11
输出：3
```

- 示例 3：

```txt
输入：nums = [19], threshold = 5
输出：4
```

---

提示：

- `1 <= nums.length <= 5 * 10^4`
- `1 <= nums[i] <= 10^6`
- `nums.length <= threshold <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
