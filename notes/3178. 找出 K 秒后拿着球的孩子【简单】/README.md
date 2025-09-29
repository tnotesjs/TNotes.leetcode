# [3178. 找出 K 秒后拿着球的孩子【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3178.%20%E6%89%BE%E5%87%BA%20K%20%E7%A7%92%E5%90%8E%E6%8B%BF%E7%9D%80%E7%90%83%E7%9A%84%E5%AD%A9%E5%AD%90%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

::: warning

- 同 [2582. 递枕头][1]

:::

- [leetcode](https://leetcode.cn/problems/find-the-child-who-has-the-ball-after-k-seconds/)

给你两个 **正整数** `n` 和 `k`。有 `n` 个编号从 `0` 到 `n - 1` 的孩子按顺序从左到右站成一队。

最初，编号为 0 的孩子拿着一个球，并且向右传球。每过一秒，拿着球的孩子就会将球传给他旁边的孩子。一旦球到达队列的 **任一端** ，即编号为 0 的孩子或编号为 `n - 1` 的孩子处，传球方向就会 **反转** 。

返回 `k` 秒后接到球的孩子的编号。

---

- **示例 1：**

**输入：** n = 3, k = 5

**输出：** 1

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-07-45.png)

---

- **示例 2：**

**输入：** n = 5, k = 6

**输出：** 2

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-07-58.png)

---

- **示例 3：**

**输入：** n = 4, k = 2

**输出：** 2

**解释：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-08-09.png)

---

**提示：**

- `2 <= n <= 50`
- `1 <= k <= 50`

---

**注意：** 此问题与 [2582. 递枕头][1] 一致。

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

## 5. 🔗 引用

- [2582. 递枕头][1]

[1]: https://leetcode.cn/problems/pass-the-pillow/
