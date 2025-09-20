# [1354. 多次求和构造目标数组【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1354.%20%E5%A4%9A%E6%AC%A1%E6%B1%82%E5%92%8C%E6%9E%84%E9%80%A0%E7%9B%AE%E6%A0%87%E6%95%B0%E7%BB%84%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/construct-target-array-with-multiple-sums/)

给你一个整数数组 `target` 。一开始，你有一个数组 `A` ，它的所有元素均为 1 ，你可以执行以下操作：

- 令 `x` 为你数组里所有元素的和
- 选择满足 `0 <= i < target.size` 的任意下标 `i` ，并让 `A` 数组里下标为 `i` 处的值为 `x` 。
- 你可以重复该过程任意次

如果能从 `A` 开始构造出目标数组 `target` ，请你返回 True ，否则返回 False 。

---

- **示例 1：**

```txt
输入：target = [9,3,5]
输出：true
解释：从 [1, 1, 1] 开始
[1, 1, 1], 和为 3 ，选择下标 1
[1, 3, 1], 和为 5， 选择下标 2
[1, 3, 5], 和为 9， 选择下标 0
[9, 3, 5] 完成
```

- **示例 2：**

```txt
输入：target = [1,1,1,2]
输出：false
解释：不可能从 [1,1,1,1] 出发构造目标数组。
```

- **示例 3：**

```txt
输入：target = [8,5]
输出：true
```

---

**提示：**

- `N == target.length`
- `1 <= target.length <= 5 * 10^4`
- `1 <= target[i] <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
