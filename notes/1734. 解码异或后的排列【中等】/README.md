# [1734. 解码异或后的排列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1734.%20%E8%A7%A3%E7%A0%81%E5%BC%82%E6%88%96%E5%90%8E%E7%9A%84%E6%8E%92%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/decode-xored-permutation/)

给你一个整数数组  `perm` ，它是前  `n`  个正整数的排列，且  `n`  是个 **奇数** 。

它被加密成另一个长度为 `n - 1`  的整数数组  `encoded` ，满足  `encoded[i] = perm[i] XOR perm[i + 1]` 。比方说，如果  `perm = [1,3,2]` ，那么  `encoded = [2,1]` 。

给你  `encoded`  数组，请你返回原始数组  `perm` 。题目保证答案存在且唯一。

---

- **示例 1：**

```txt
输入：encoded = [3,1]
输出：[1,2,3]
解释：如果 perm = [1,2,3] ，那么 encoded = [1 XOR 2,2 XOR 3] = [3,1]
```

- **示例 2：**

```txt
输入：encoded = [6,5,4,6]
输出：[2,4,1,5,3]
```

---

**提示：**

- `3 <= n < 10^5`
- `n`  是奇数。
- `encoded.length == n - 1`

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
