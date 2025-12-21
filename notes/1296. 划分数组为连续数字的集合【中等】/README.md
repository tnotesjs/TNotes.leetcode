# [1296. 划分数组为连续数字的集合【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1296.%20%E5%88%92%E5%88%86%E6%95%B0%E7%BB%84%E4%B8%BA%E8%BF%9E%E7%BB%AD%E6%95%B0%E5%AD%97%E7%9A%84%E9%9B%86%E5%90%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/divide-array-in-sets-of-k-consecutive-numbers/)

给你一个整数数组 `nums` 和一个正整数 `k`，请你判断是否可以把这个数组划分成一些由 `k` 个连续数字组成的集合。  
如果可以，请返回 `true`；否则，返回 `false`。

---

- 示例 1：

```txt
输入：nums = [1,2,3,3,4,4,5,6], k = 4
输出：true
解释：数组可以分成 [1,2,3,4] 和 [3,4,5,6]。
```

- 示例 2：

```txt
输入：nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
输出：true
解释：数组可以分成 [1,2,3] , [2,3,4] , [3,4,5] 和 [9,10,11]。
```

- 示例 4：

```txt
输入：nums = [1,2,3,4], k = 3
输出：false
解释：数组不能分成几个大小为 3 的子数组。
```

---

提示：

- `1 <= k <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

---

注意： 此题目与 [846. 一手顺子][1] 重复

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 5. 🔗 引用

- [846. 一手顺子][1]

[1]: https://leetcode.cn/problems/hand-of-straights/description/
