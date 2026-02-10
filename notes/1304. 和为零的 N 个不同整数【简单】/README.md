# [1304. 和为零的 N 个不同整数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1304.%20%E5%92%8C%E4%B8%BA%E9%9B%B6%E7%9A%84%20N%20%E4%B8%AA%E4%B8%8D%E5%90%8C%E6%95%B4%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 对称配对](#2--s1---对称配对)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-n-unique-integers-sum-up-to-zero/)

给你一个整数 `n`，请你返回任意一个由 `n` 个各不相同的整数组成的数组，并且这 `n` 个数相加和为 `0`。

---

示例 1：

```txt
输入：n = 5
输出：[-7, -1, 1, 3, 4]
```

解释：这些数组也是正确的 `[-5, -1, 1, 2, 3]`，`[-3, -1, 2, -2, 4]`。

---

示例 2：

```txt
输入：n = 3
输出：[-1, 0, 1]
```

---

示例 3：

```txt
输入：n = 1
输出：[0]
```

---

提示：

- `1 <= n <= 1000`

## 2. 🎯 s.1 - 对称配对

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$
- 空间复杂度：$O(N)$

算法思路：

- 从 1 到 $\lfloor n/2 \rfloor$ 生成成对的正负数放入数组，保证互不相同且和为 0
- 若 $n$ 为奇数，再补一个 0 即可保持总和为 0
