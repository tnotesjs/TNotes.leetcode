# [2520. 统计能整除数字的位数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2520.%20%E7%BB%9F%E8%AE%A1%E8%83%BD%E6%95%B4%E9%99%A4%E6%95%B0%E5%AD%97%E7%9A%84%E4%BD%8D%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-digits-that-divide-a-number/)

给你一个整数 `num` ，返回 `num` 中能整除 `num` 的数位的数目。

如果满足  `nums % val == 0` ，则认为整数 `val` 可以整除 `nums` 。

---

- **示例 1：**

```txt
输入：num = 7
输出：1
解释：7 被自己整除，因此答案是 1 。
```

- **示例 2：**

```txt
输入：num = 121
输出：2
解释：121 可以被 1 整除，但无法被 2 整除。由于 1 出现两次，所以返回 2 。
```

- **示例 3：**

```txt
输入：num = 1248
输出：4
解释：1248 可以被它每一位上的数字整除，因此答案是 4 。
```

---

**提示：**

- `1 <= num <= 10^9`
- `num` 的数位中不含 `0`

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
