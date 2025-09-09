# [0415. 字符串相加【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0415.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E5%8A%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/add-strings/)

给定两个字符串形式的非负整数  `num1` 和`num2` ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 `BigInteger`），  也不能直接将输入的字符串转换为整数形式。

---

- **示例 1：**

```txt
输入：num1 = "11", num2 = "123"
输出："134"
```

- **示例 2：**

```txt
输入：num1 = "456", num2 = "77"
输出："533"
```

- **示例 3：**

```txt
输入：num1 = "0", num2 = "0"
输出："0"

```

---

**提示：**

- `1 <= num1.length, num2.length <= 10^4`
- `num1` 和`num2` 都只包含数字  `0-9`
- `num1` 和`num2` 都不包含任何前导零

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
