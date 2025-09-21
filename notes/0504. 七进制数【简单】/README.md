# [0504. 七进制数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0504.%20%E4%B8%83%E8%BF%9B%E5%88%B6%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 除 7 取余法](#2--s1---除-7-取余法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/base-7/)

给定一个整数 `num`，将其转化为 **7 进制**，并以字符串形式输出。

---

- **示例 1:**

```txt
输入: num = 100
输出: "202"
```

- **示例 2:**

```txt
输入: num = -7
输出: "-10"
```

---

**提示：**

- `-10^7 <= num <= 10^7`

## 2. 🎯 s.1 - 除 7 取余法

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js-2]

:::

- **时间复杂度**：$O(\log_{7} n)$，其中 n 是输入数字的绝对值，需要进行 $log_{7} n$ 次除法运算
- **空间复杂度**：$O(\log_{7} n)$，用于存储结果字符串
- `js-2` 采用的是数组式写法，核心逻辑都是除 7 取余。
