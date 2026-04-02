# [0371. 两整数之和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0371.%20%E4%B8%A4%E6%95%B4%E6%95%B0%E4%B9%8B%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 位运算](#2--s1---位运算)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-two-integers/)

给你两个整数 `a` 和 `b`，不使用 运算符 `+` 和 `-` ​​​​​​​，计算并返回两整数之和。

---

示例 1：

```txt
输入：a = 1, b = 2
输出：3
```

示例 2：

```txt
输入：a = 2, b = 3
输出：5
```

---

提示：

- `-1000 <= a, b <= 1000`

## 2. 🎯 s.1 - 位运算

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$，最多循环 32 次
- 空间复杂度：$O(1)$

算法思路：

- 异或 `a ^ b` 得到无进位和，与 `(a & b) << 1` 得到进位
- 重复直到进位为 0
