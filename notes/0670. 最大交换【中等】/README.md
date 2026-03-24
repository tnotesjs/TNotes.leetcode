# [0670. 最大交换【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0670.%20%E6%9C%80%E5%A4%A7%E4%BA%A4%E6%8D%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-swap/)

给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

示例 1 :

```txt
输入: 2736
输出: 7236
解释: 交换数字2和数字7。
```

示例 2 :

```txt
输入: 9973
输出: 9973
解释: 不需要交换。
```

注意:

1. 给定数字的范围是 $[0, 10^8]$

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数字位数
- 空间复杂度：$O(n)$

算法思路：

- 记录每个数字 0-9 最后出现的位置
- 从高位到低位遍历，对每一位尝试找后方更大的数字交换，第一次交换即可返回
