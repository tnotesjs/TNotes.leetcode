# [0136. 只出现一次的数字【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0136.%20%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 异或运算](#2--s1---异或运算)
- [3. 🎯 s.2 - 使用 Map 计数](#3--s2---使用-map-计数)
- [4. 🎯 s.3 - 使用 Set](#4--s3---使用-set)
- [5. 🎯 s.4 - 数学求和](#5--s4---数学求和)
- [6. 🎯 s.5 - 排序 ➕ 双指针查找](#6--s5---排序--双指针查找)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/single-number/)

给你一个 **非空** 整数数组 `nums` ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

---

**示例 1 ：**

- **输入：** nums = \[2,2,1\]
- **输出：** 1

**示例 2 ：**

- **输入：** nums = \[4,1,2,1,2\]
- **输出：** 4

**示例 3 ：**

- **输入：** nums = \[1\]
- **输出：** 1

---

**提示：**

- `1 <= nums.length <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
- 除了某个元素只出现一次以外，其余每个元素均出现两次。

:::

## 2. 🎯 s.1 - 异或运算

::: code-group

<<< ./solutions/1/1.js [js]

:::

## 3. 🎯 s.2 - 使用 Map 计数

::: code-group

<<< ./solutions/2/1.js [js]

:::

## 4. 🎯 s.3 - 使用 Set

::: code-group

<<< ./solutions/3/1.js [js]

:::

## 5. 🎯 s.4 - 数学求和

::: code-group

<<< ./solutions/4/1.js [js]

:::

## 6. 🎯 s.5 - 排序 ➕ 双指针查找

::: code-group

<<< ./solutions/5/1.js [js]

:::
