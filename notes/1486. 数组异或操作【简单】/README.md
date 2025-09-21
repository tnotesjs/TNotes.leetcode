# [1486. 数组异或操作【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1486.%20%E6%95%B0%E7%BB%84%E5%BC%82%E6%88%96%E6%93%8D%E4%BD%9C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/xor-operation-in-an-array/)

给你两个整数，`n` 和 `start` 。

数组 `nums` 定义为：`nums[i] = start + 2*i`（下标从 0 开始）且 `n == nums.length` 。

请返回 `nums` 中所有元素按位异或（**XOR**）后得到的结果。

---

- **示例 1：**

```txt
输入：n = 5, start = 0
输出：8
解释：数组 nums 为 [0, 2, 4, 6, 8]，其中 (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。
     "^" 为按位异或 XOR 运算符。
```

- **示例 2：**

```txt
输入：n = 4, start = 3
输出：8
解释：数组 nums 为 [3, 5, 7, 9]，其中 (3 ^ 5 ^ 7 ^ 9) = 8.
```

- **示例 3：**

```txt
输入：n = 1, start = 7
输出：7
```

- **示例 4：**

```txt
输入：n = 10, start = 5
输出：2
```

---

**提示：**

- `1 <= n <= 1000`
- `0 <= start <= 1000`
- `n == nums.length`

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
