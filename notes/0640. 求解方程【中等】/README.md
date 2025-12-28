# [0640. 求解方程【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0640.%20%E6%B1%82%E8%A7%A3%E6%96%B9%E7%A8%8B%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/solve-the-equation/)

求解一个给定的方程，将 `x` 以字符串 `"x=#value"` 的形式返回。该方程仅包含 `'+'` ， `'-'` 操作，变量 `x` 和其对应系数。

如果方程没有解或存在的解不为整数，请返回 `"No solution"`。如果方程有无限解，则返回 `“Infinite solutions”`。

题目保证，如果方程中只有一个解，则 `'x'` 的值是一个整数。

---

示例 1：

```txt
输入: equation = "x+5-3+x=6+x-2"
输出: "x=2"
```

示例 2：

```txt
输入: equation = "x=x"
输出: "Infinite solutions"
```

示例 3：

```txt
输入: equation = "2x=x"
输出: "x=0"
```

---

提示：

- `3 <= equation.length <= 1000`
- `equation` 只有一个 `'='`.
- 方程由绝对值在 `[0, 100]` 范围内且无任何前导零的整数和变量 `'x'` 组成。​​​

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
