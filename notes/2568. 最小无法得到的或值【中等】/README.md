# [2568. 最小无法得到的或值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2568.%20%E6%9C%80%E5%B0%8F%E6%97%A0%E6%B3%95%E5%BE%97%E5%88%B0%E7%9A%84%E6%88%96%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-impossible-or/)

给你一个下标从 **0**  开始的整数数组  `nums` 。

如果存在一些整数满足  `0 <= index1 < index2 < ... < indexk < nums.length` ，得到  `nums[index1] | nums[index2] | ... | nums[indexk] = x` ，那么我们说  `x`  是  **可表达的** 。换言之，如果一个整数能由  `nums`  的某个子序列的或运算得到，那么它就是可表达的。

请你返回 `nums`  不可表达的 **最小非零整数** 。

---

- **示例 1：**

```txt
输入：nums = [2,1]
输出：4

解释：
1 和 2 已经在数组中，因为 nums[0] | nums[1] = 2 | 1 = 3 ，所以 3 是可表达的。
由于 4 是不可表达的，所以我们返回 4 。
```

- **示例 2：**

```txt
输入：nums = [5,3,2]
输出：1

解释：
1 是最小不可表达的数字。
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

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
