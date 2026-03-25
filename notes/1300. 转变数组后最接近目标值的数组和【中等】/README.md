# [1300. 转变数组后最接近目标值的数组和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1300.%20%E8%BD%AC%E5%8F%98%E6%95%B0%E7%BB%84%E5%90%8E%E6%9C%80%E6%8E%A5%E8%BF%91%E7%9B%AE%E6%A0%87%E5%80%BC%E7%9A%84%E6%95%B0%E7%BB%84%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-mutated-array-closest-to-target/)

给你一个整数数组 `arr` 和一个目标值 `target`，请你返回一个整数 `value`，使得将数组中所有大于 `value` 的值变成 `value` 后，数组的和最接近 `target` （最接近表示两者之差的绝对值最小）。

如果有多种使得和最接近 `target` 的方案，请你返回这些整数中的最小值。

请注意，答案不一定是 `arr` 中的数字。

---

示例 1：

```txt
输入：arr = [4,9,3], target = 10
输出：3
解释：当选择 value 为 3 时，数组会变成 [3, 3, 3]，和为 9，这是最接近 target 的方案。
```

示例 2：

```txt
输入：arr = [2,3,5], target = 10
输出：5
```

示例 3：

```txt
输入：arr = [60864,25176,27249,21296,20204], target = 56803
输出：11361
```

---

提示：

- `1 <= arr.length <= 10^4`
- `1 <= arr[i], target <= 10^5`

## 2. 🎯 s.1 - 排序 + 枚举

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n + M \log n)$，其中 $n$ 是数组长度，$M$ 是数组最大值
- 空间复杂度：$O(n)$，前缀和数组的空间

算法思路：

- 先对数组排序，构建前缀和数组
- 枚举 value 从 0 到 max(arr)，对每个 value，通过二分查找找到第一个 >= value 的位置
- 位置左侧的元素保持原值（前缀和），右侧的元素全部替换为 value，计算总和与 target 的差
- 记录使差值最小的 value，若差值相同取较小的 value
