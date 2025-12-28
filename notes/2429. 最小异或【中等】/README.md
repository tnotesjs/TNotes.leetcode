# [2429. 最小异或【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2429.%20%E6%9C%80%E5%B0%8F%E5%BC%82%E6%88%96%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimize-xor/)

给你两个正整数 `num1` 和 `num2` ，找出满足下述条件的正整数 `x` ：

- `x` 的置位数和 `num2` 相同，且
- `x XOR num1` 的值 最小

注意 `XOR` 是按位异或运算。

返回整数 `x`。题目保证，对于生成的测试用例， `x` 是 唯一确定 的。

整数的 置位数 是其二进制表示中 `1` 的数目。

---

示例 1：

```txt
输入：num1 = 3, num2 = 5
输出：3
解释：
num1 和 num2 的二进制表示分别是 0011 和 0101。
整数 3 的置位数与 num2 相同，且 3 XOR 3 = 0 是最小的。
```

示例 2：

```txt
输入：num1 = 1, num2 = 12
输出：3
解释：
num1 和 num2 的二进制表示分别是 0001 和 1100。
整数 3 的置位数与 num2 相同，且 3 XOR 1 = 2 是最小的。
```

---

提示：

- `1 <= num1, num2 <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
