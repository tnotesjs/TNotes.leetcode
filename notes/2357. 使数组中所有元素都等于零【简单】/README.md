# [2357. 使数组中所有元素都等于零【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2357.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E4%B8%AD%E6%89%80%E6%9C%89%E5%85%83%E7%B4%A0%E9%83%BD%E7%AD%89%E4%BA%8E%E9%9B%B6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/make-array-zero-by-subtracting-equal-amounts/)

给你一个非负整数数组 `nums` 。在一步操作中，你必须：

- 选出一个正整数 `x` ，`x` 需要小于或等于 `nums` 中 最小 的 非零 元素。
- `nums` 中的每个正整数都减去 `x`。

返回使 `nums` 中所有元素都等于 `0` 需要的 最少 操作数。

---

- 示例 1：

```txt
输入：nums = [1,5,0,3,5]
输出：3
解释：
第一步操作：选出 x = 1 ，之后 nums = [0,4,0,2,4] 。
第二步操作：选出 x = 2 ，之后 nums = [0,2,0,0,2] 。
第三步操作：选出 x = 2 ，之后 nums = [0,0,0,0,0] 。
```

- 示例 2：

```txt
输入：nums = [0]
输出：0
解释：nums 中的每个元素都已经是 0 ，所以不需要执行任何操作。
```

---

提示：

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`

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
