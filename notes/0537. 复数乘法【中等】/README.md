# [0537. 复数乘法【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0537.%20%E5%A4%8D%E6%95%B0%E4%B9%98%E6%B3%95%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/complex-number-multiplication/)

[复数](https://baike.baidu.com/item/%E5%A4%8D%E6%95%B0/254365?fr=aladdin) 可以用字符串表示，遵循 `"实部+虚部i"` 的形式，并满足下述条件：

- `实部` 是一个整数，取值范围是 `[-100, 100]`
- `虚部` 也是一个整数，取值范围是 `[-100, 100]`
- `i^2 == -1`

给你两个字符串表示的复数 `num1` 和 `num2`，请你遵循复数表示形式，返回表示它们乘积的字符串。

---

示例 1：

```txt
输入：num1 = "1+1i", num2 = "1+1i"
输出："0+2i"
解释：(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i，你需要将它转换为 0+2i 的形式。
```

示例 2：

```txt
输入：num1 = "1+-1i", num2 = "1+-1i"
输出："0+-2i"
解释：(1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i，你需要将它转换为 0+-2i 的形式。
```

---

提示：

- `num1` 和 `num2` 都是有效的复数表示。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
