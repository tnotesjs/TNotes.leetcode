# [2939. 最大异或乘积【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2939.%20%E6%9C%80%E5%A4%A7%E5%BC%82%E6%88%96%E4%B9%98%E7%A7%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-xor-product/)

给你三个整数 `a` ，`b` 和 `n` ，请你返回 `(a XOR x) * (b XOR x)` 的 **最大值** 且 `x` 需要满足 `0 <= x < 2^n`。

由于答案可能会很大，返回它对 `10^9 + 7` **取余** 后的结果。

**注意**，`XOR` 是按位异或操作。

---

- **示例 1：**

```txt
输入：a = 12, b = 5, n = 4
输出：98
解释：当 x = 2 时，(a XOR x) = 14 且 (b XOR x) = 7 。所以，(a XOR x) * (b XOR x) = 98 。
98 是所有满足 0 <= x < 2n 中 (a XOR x) * (b XOR x) 的最大值。
```

- **示例 2：**

```txt
输入：a = 6, b = 7 , n = 5
输出：930
解释：当 x = 25 时，(a XOR x) = 31 且 (b XOR x) = 30 。所以，(a XOR x) * (b XOR x) = 930 。
930 是所有满足 0 <= x < 2n 中 (a XOR x) * (b XOR x) 的最大值。
```

- **示例 3：**

```txt
输入：a = 1, b = 6, n = 3
输出：12
解释： 当 x = 5 时，(a XOR x) = 4 且 (b XOR x) = 3 。所以，(a XOR x) * (b XOR x) = 12 。
12 是所有满足 0 <= x < 2n 中 (a XOR x) * (b XOR x) 的最大值。
```

---

**提示：**

- `0 <= a, b < 2^50`
- `0 <= n <= 50`

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
