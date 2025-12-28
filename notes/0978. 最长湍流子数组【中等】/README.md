# [0978. 最长湍流子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0978.%20%E6%9C%80%E9%95%BF%E6%B9%8D%E6%B5%81%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-turbulent-subarray/)

给定一个整数数组 `arr` ，返回 `arr` 的 最大湍流子数组的长度。

如果比较符号在子数组中的每个相邻元素对之间翻转，则该子数组是 湍流子数组。

更正式地来说，当 `arr` 的子数组 `A[i], A[i+1], ..., A[j]` 满足仅满足下列条件时，我们称其为*湍流子数组*：

- 若 `i <= k < j` ：
  - 当 `k` 为奇数时， `A[k] > A[k+1]`，且
  - 当 `k` 为偶数时，`A[k] < A[k+1]`；
- 或 若 `i <= k < j` ：
  - 当 `k` 为偶数时，`A[k] > A[k+1]` ，且
  - 当 `k` 为奇数时， `A[k] < A[k+1]`。

---

- 示例 1：

```txt
输入：arr = [9,4,2,10,7,8,8,1,9]
输出：5
解释：arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
```

- 示例 2：

```txt
输入：arr = [4,8,12,16]
输出：2
```

- 示例 3：

```txt
输入：arr = [100]
输出：1
```

---

提示：

- `1 <= arr.length <= 4 * 10^4`
- `0 <= arr[i] <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
