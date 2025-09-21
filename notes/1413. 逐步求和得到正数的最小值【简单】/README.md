# [1413. 逐步求和得到正数的最小值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1413.%20%E9%80%90%E6%AD%A5%E6%B1%82%E5%92%8C%E5%BE%97%E5%88%B0%E6%AD%A3%E6%95%B0%E7%9A%84%E6%9C%80%E5%B0%8F%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum/)

给你一个整数数组 `nums` 。你可以选定任意的 **正数** startValue 作为初始值。

你需要从左到右遍历 `nums` 数组，并将 startValue 依次累加上 `nums` 数组中的值。

请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 **正数** 作为 startValue 。

---

- **示例 1：**

```txt
输入：nums = [-3,2,-3,4,2]
输出：5
解释：
如果你选择 startValue = 4，在第三次累加时，和小于 1 。
  累加求和
  startValue = 4 | startValue = 5 | nums
    (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
    (1 +2 ) = 3  | (2 +2 ) = 4    |   2
    (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
    (0 +4 ) = 4  | (1 +4 ) = 5    |   4
    (4 +2 ) = 6  | (5 +2 ) = 7    |   2
```

- **示例 2：**

```txt
输入：nums = [1,2]
输出：1
解释：最小的 startValue 需要是正数。
```

- **示例 3：**

```txt
输入：nums = [1,-2,-3]
输出：5
```

---

**提示：**

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

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
