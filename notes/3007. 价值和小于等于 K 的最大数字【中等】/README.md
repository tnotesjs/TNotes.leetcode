# [3007. 价值和小于等于 K 的最大数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3007.%20%E4%BB%B7%E5%80%BC%E5%92%8C%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E%20K%20%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/)

给你一个整数 `k` 和一个整数 `x` 。整数 `num` 的价值是它的二进制表示中在 `x`，`2x`，`3x` 等位置处 **设置位** 的数目（从最低有效位开始）。下面的表格包含了如何计算价值的例子。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-32-34.png)

`num` 的 **累加价值** 是从 `1` 到 `num` 的数字的 **总** 价值。如果 `num` 的累加价值小于或等于 `k` 则被认为是 **廉价** 的。

请你返回 **最大** 的廉价数字。

---

- **示例 1：**

```txt
输入：k = 9, x = 1
输出：6
解释：由下表所示，6 是最大的廉价数字。
```

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-32-50.png)

---

- **示例 2：**

```txt
输入：k = 7, x = 2
输出：9
解释：由下表所示，9 是最大的廉价数字。
```

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-33-11.png)

---

**提示：**

- `1 <= k <= 10^15`
- `1 <= x <= 8`

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
