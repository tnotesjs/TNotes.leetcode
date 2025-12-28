# [0845. 数组中的最长山脉【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0845.%20%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E9%95%BF%E5%B1%B1%E8%84%89%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-mountain-in-array/)

把符合下列属性的数组 `arr` 称为 山脉数组 ：

- `arr.length >= 3`
- 存在下标 `i`（`0 < i < arr.length - 1`），满足
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

给出一个整数数组 `arr`，返回最长山脉子数组的长度。如果不存在山脉子数组，返回 `0`。

---

示例 1：

```txt
输入：arr = [2,1,4,7,3,2,5]
输出：5
解释：最长的山脉子数组是 [1,4,7,3,2]，长度为 5。
```

示例 2：

```txt
输入：arr = [2,2,2]
输出：0
解释：不存在山脉子数组。
```

---

提示：

- `1 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^4`

进阶：

- 你可以仅用一趟扫描解决此问题吗？
- 你可以用 `O(1)` 空间解决此问题吗？

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
