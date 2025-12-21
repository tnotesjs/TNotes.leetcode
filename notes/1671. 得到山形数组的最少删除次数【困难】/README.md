# [1671. 得到山形数组的最少删除次数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1671.%20%E5%BE%97%E5%88%B0%E5%B1%B1%E5%BD%A2%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%91%E5%88%A0%E9%99%A4%E6%AC%A1%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/)

我们定义 `arr` 是 山形数组 当且仅当它满足：

- `arr.length >= 3`
- 存在某个下标 `i` （从 0 开始） 满足 `0 < i < arr.length - 1` 且：
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

给你整数数组 `nums`​ ，请你返回将 `nums` 变成 山形状数组 的 ​ 最少 删除次数。

---

- 示例 1：

```txt
输入：nums = [1,3,1]
输出：0
解释：数组本身就是山形数组，所以我们不需要删除任何元素。
```

- 示例 2：

```txt
输入：nums = [2,1,1,5,6,2,3,1]
输出：3
解释：一种方法是将下标为 0，1 和 5 的元素删除，剩余元素为 [1,5,6,3,1] ，是山形数组。
```

---

提示：

- `3 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^9`
- 题目保证 `nums` 删除一些元素后一定能得到山形数组。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
