# [0166. 分数到小数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0166.%20%E5%88%86%E6%95%B0%E5%88%B0%E5%B0%8F%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/fraction-to-recurring-decimal/)

给定两个整数，分别表示分数的分子 `numerator` 和分母 `denominator`，以 字符串形式返回小数。

如果小数部分为循环小数，则将循环的部分括在括号内。

如果存在多个答案，只需返回 任意一个。

对于所有给定的输入，保证 答案字符串的长度小于 `10^4`。

---

示例 1：

```txt
输入：numerator = 1, denominator = 2
输出："0.5"
```

示例 2：

```txt
输入：numerator = 2, denominator = 1
输出："2"
```

示例 3：

```txt
输入：numerator = 4, denominator = 333
输出："0.(012)"
```

---

提示：

- `-2^31 <= numerator, denominator <= 2^31 - 1`
- `denominator != 0`

## 2. 🎯 s.1 - 长除法 + 哈希表

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(d)$，其中 $d$ 是小数部分的长度
- 空间复杂度：$O(d)$，哈希表存储余数位置

算法思路：

- 先处理符号和整数部分
- 对小数部分模拟长除法，用哈希表记录每个余数首次出现的位置
- 当余数重复出现时，说明开始循环，在对应位置插入括号
