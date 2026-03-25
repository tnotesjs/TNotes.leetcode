# [1343. 大小为 K 且平均值大于等于阈值的子数组数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1343.%20%E5%A4%A7%E5%B0%8F%E4%B8%BA%20K%20%E4%B8%94%E5%B9%B3%E5%9D%87%E5%80%BC%E5%A4%A7%E4%BA%8E%E7%AD%89%E4%BA%8E%E9%98%88%E5%80%BC%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)

给你一个整数数组 `arr` 和两个整数 `k` 和 `threshold`。

请你返回长度为 `k` 且平均值大于等于 `threshold` 的子数组数目。

---

示例 1：

```txt
输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
输出：3
解释：子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。
```

示例 2：

```txt
输入：arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
输出：6
解释：前 6 个长度为 3 的子数组平均值都大于 5。注意平均值不是整数。
```

---

提示：

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^4`
- `1 <= k <= arr.length`
- `0 <= threshold <= 10^4`

## 2. 🎯 s.1 - 滑动窗口

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 维护一个大小为 k 的滑动窗口，计算窗口内元素之和
- 将平均值 >= threshold 的条件转化为窗口和 >= k × threshold，避免浮点运算
- 每次窗口滑动时加入新元素、移出旧元素，判断是否满足条件
