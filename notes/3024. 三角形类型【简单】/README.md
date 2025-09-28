# [3024. 三角形类型【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3024.%20%E4%B8%89%E8%A7%92%E5%BD%A2%E7%B1%BB%E5%9E%8B%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/type-of-triangle/)

给你一个下标从 **0** 开始长度为 `3` 的整数数组 `nums` ，需要用它们来构造三角形。

- 如果一个三角形的所有边长度相等，那么这个三角形称为 **equilateral** 。
- 如果一个三角形恰好有两条边长度相等，那么这个三角形称为 **isosceles** 。
- 如果一个三角形三条边的长度互不相同，那么这个三角形称为 **scalene** 。

如果这个数组无法构成一个三角形，请你返回字符串 `"none"` ，否则返回一个字符串表示这个三角形的类型。

---

- **示例 1：**

```txt
输入：nums = [3,3,3]
输出："equilateral"
解释：由于三条边长度相等，所以可以构成一个等边三角形，返回 "equilateral" 。
```

- **示例 2：**

```txt
输入：nums = [3,4,5]
输出："scalene"
解释：
nums[0] + nums[1] = 3 + 4 = 7 ，大于 nums[2] = 5 。
nums[0] + nums[2] = 3 + 5 = 8 ，大于 nums[1] = 4 。
nums[1] + nums[2] = 4 + 5 = 9 ，大于 nums[0] = 3 。
由于任意两边之和都大于第三边，所以可以构成一个三角形，因为三条边的长度互不相等，所以返回 "scalene"。
```

---

**提示：**

- `nums.length == 3`
- `1 <= nums[i] <= 100`

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
