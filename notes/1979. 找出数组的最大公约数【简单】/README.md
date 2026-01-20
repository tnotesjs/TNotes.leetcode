# [1979. 找出数组的最大公约数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1979.%20%E6%89%BE%E5%87%BA%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%85%AC%E7%BA%A6%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-greatest-common-divisor-of-array/)

给你一个整数数组 `nums`，返回数组中最大数和最小数的最大公约数。

两个数的最大公约数是能够被两个数整除的最大正整数。

---

示例 1：

```txt
输入：nums = [2,5,6,9,10]
输出：2

解释：
nums 中最小的数是 2
nums 中最大的数是 10
2 和 10 的最大公约数是 2
```

---

示例 2：

```txt
输入：nums = [7,5,6,8,3]
输出：1

解释：
nums 中最小的数是 3
nums 中最大的数是 8
3 和 8 的最大公约数是 1
```

---

示例 3：

```txt
输入：nums = [3,3]
输出：3

解释：
nums 中最小的数是 3
nums 中最大的数是 3
3 和 3 的最大公约数是 3
```

---

提示：

- `2 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N + \log M)$，其中 N 是数组长度，M 是数组中的最大值，遍历数组需要 $O(N)$，辗转相除法求 GCD 需要 $O(\log M)$
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 遍历数组找出最小值 minVal 和最大值 maxVal
- 使用辗转相除法（欧几里得算法）计算 gcd(maxVal, minVal)
- 返回计算得到的最大公约数
