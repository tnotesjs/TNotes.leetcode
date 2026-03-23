# [0043. 字符串相乘【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0043.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E4%B9%98%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 竖式乘法模拟](#2--s1---竖式乘法模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/multiply-strings/)

给定两个以字符串形式表示的非负整数 `num1` 和 `num2`，返回 `num1` 和 `num2` 的乘积，它们的乘积也表示为字符串形式。

---

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

---

示例 1：

```txt
输入: num1 = "2", num2 = "3"
输出: "6"
```

示例 2：

```txt
输入: num1 = "123", num2 = "456"
输出: "56088"
```

---

提示：

- `1 <= num1.length, num2.length <= 200`
- `num1` 和 `num2` 只能由数字组成。
- `num1` 和 `num2` 都不包含任何前导零，除了数字 0 本身。

## 2. 🎯 s.1 - 竖式乘法模拟

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$ 和 $n$ 分别是 `num1` 和 `num2` 的长度
- 空间复杂度：$O(m + n)$，结果数组长度最多为 $m + n$

算法思路：

- 模拟竖式乘法：`num1[i]` 与 `num2[j]` 相乘的结果，进位影响 `pos[i+j]`，个位存入 `pos[i+j+1]`
- 用长度为 $m+n$ 的整数数组 `pos` 累加每一位的贡献，最后将各位合并为字符串
- 跳过结果字符串的前导零，若全为零则返回 `"0"`
