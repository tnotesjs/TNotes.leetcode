# [3264. K 次乘运算后的最终数组 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3264.%20K%20%E6%AC%A1%E4%B9%98%E8%BF%90%E7%AE%97%E5%90%8E%E7%9A%84%E6%9C%80%E7%BB%88%E6%95%B0%E7%BB%84%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/final-array-state-after-k-multiplication-operations-i/)

给你一个整数数组 `nums` ，一个整数 `k` 和一个整数 `multiplier` 。

你需要对 `nums` 执行 `k` 次操作，每次操作中：

- 找到 `nums` 中的 **最小** 值 `x` ，如果存在多个最小值，选择最 **前面** 的一个。
- 将 `x` 替换为 `x * multiplier` 。

请你返回执行完 `k` 次乘运算之后，最终的 `nums` 数组。

---

- **示例 1：**

**输入：** nums = [2,1,3,5,6], k = 5, multiplier = 2

**输出：** [8,4,6,5,6]

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-20-49-30.png)

---

- **示例 2：**

**输入：** nums = [1,2], k = 3, multiplier = 4

**输出：** [16,8]

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-20-49-44.png)

---

**提示：**

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 10`
- `1 <= multiplier <= 5`

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
