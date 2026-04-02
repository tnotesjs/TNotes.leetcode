# [2563. 统计公平数对的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2563.%20%E7%BB%9F%E8%AE%A1%E5%85%AC%E5%B9%B3%E6%95%B0%E5%AF%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 双指针](#2--s1---排序--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-number-of-fair-pairs/)

给你一个下标从 0 开始、长度为 `n` 的整数数组 `nums`，和两个整数 `lower` 和 `upper`，返回 公平数对的数目。

如果 `(i, j)` 数对满足以下情况，则认为它是一个 公平数对 ：

- `0 <= i < j < n`，且
- `lower <= nums[i] + nums[j] <= upper`

---

示例 1：

```txt
输入：nums = [0,1,7,4,4,5], lower = 3, upper = 6
输出：6
解释：共计 6 个公平数对：(0,3)、(0,4)、(0,5)、(1,3)、(1,4) 和 (1,5)。
```

示例 2：

```txt
输入：nums = [1,7,9,2,5], lower = 11, upper = 11
输出：1
解释：只有单个公平数对：(2,3)。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `nums.length == n`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= lower <= upper <= 10^9`

## 2. 🎯 s.1 - 排序 + 双指针

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，排序的时间复杂度
- 空间复杂度：$O(\log n)$，排序使用的栈空间

算法思路：

- 将数组排序后，问题转化为统计满足 `lower ≤ nums[i] + nums[j] ≤ upper` 的对数
- 利用双指针分别计算 `nums[i] + nums[j] < upper + 1` 的对数和 `< lower` 的对数
- 两者之差即为公平数对的数目
