# [0050. Pow(x, n)【中等】](<https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0050.%20Pow(x%2C%20n)%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91>)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/powx-n/)

实现 [pow(_x_, _n_)](https://www.cplusplus.com/reference/valarray/pow/)，即计算 `x` 的整数 `n` 次幂函数（即，$x^n$ ）。

---

- 示例 1：

```txt
输入：x = 2.00000, n = 10
输出：1024.00000
```

- 示例 2：

```txt
输入：x = 2.10000, n = 3
输出：9.26100
```

- 示例 3：

```txt
输入：x = 2.00000, n = -2
输出：0.25000
解释：2-2 = 1/22 = 1/4 = 0.25
```

---

提示：

- `-100.0 < x < 100.0`
- `-2^31 <= n <= 2^31-1`
- `n` 是一个整数
- 要么 `x` 不为零，要么 `n > 0` 。
- `-10^4 <= x^n <= 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
