# [2719. 统计整数数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2719.%20%E7%BB%9F%E8%AE%A1%E6%95%B4%E6%95%B0%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 数位 DP](#2--s1---数位-dp)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-of-integers/)

给你两个数字字符串 `num1` 和 `num2`，以及两个整数 `max_sum` 和 `min_sum`。如果一个整数 `x` 满足以下条件，我们称它是一个好整数：

- `num1 <= x <= num2`
- `min_sum <= digit_sum(x) <= max_sum`.

请你返回好整数的数目。答案可能很大，请返回答案对 `10^9 + 7` 取余后的结果。

注意，`digit_sum(x)` 表示 `x` 各位数字之和。

---

示例 1：

```txt
输入：num1 = "1", num2 = "12", min_num = 1, max_num = 8
输出：11
解释：总共有 11 个整数的数位和在 1 到 8 之间，分别是 1,2,3,4,5,6,7,8,10,11 和 12。所以我们返回 11。
```

示例 2：

```txt
输入：num1 = "1", num2 = "5", min_num = 1, max_num = 5
输出：5
解释：数位和在 1 到 5 之间的 5 个整数分别为 1,2,3,4 和 5。所以我们返回 5。
```

---

提示：

- `1 <= num1 <= num2 <= 10^22`
- `1 <= min_sum <= max_sum <= 400`

## 2. 🎯 s.1 - 数位 DP

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(D \cdot S \cdot 10)$，其中 D 是数字位数，S 是 max\_sum
- 空间复杂度：$O(D \cdot S)$

算法思路：

- 利用数位 DP 计算 `[1, num]` 范围内数位和在 `[min_sum, max_sum]` 之间的整数个数
- 答案为 `count(num2) - count(num1 - 1)`
- DP 状态：当前位置、已累加的数位和、是否紧贴上界
