# [1362. 最接近的因数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1362.%20%E6%9C%80%E6%8E%A5%E8%BF%91%E7%9A%84%E5%9B%A0%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/closest-divisors/)

给你一个整数 `num`，请你找出同时满足下面全部要求的两个整数：

- 两数乘积等于 `num + 1` 或 `num + 2`
- 以绝对差进行度量，两数大小最接近

你可以按任意顺序返回这两个整数。

---

示例 1：

```txt
输入：num = 8
输出：[3,3]

解释：
对于 num + 1 = 9，最接近的两个因数是 3 & 3；
对于 num + 2 = 10, 最接近的两个因数是 2 & 5，因此返回 3 & 3。
```

示例 2：

```txt
输入：num = 123
输出：[5,25]
```

示例 3：

```txt
输入：num = 999
输出：[40,25]
```

---

提示：

- `1 <= num <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
