# [1318. 或运算的最小翻转次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1318.%20%E6%88%96%E8%BF%90%E7%AE%97%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BF%BB%E8%BD%AC%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 位运算](#2--s1---位运算)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-flips-to-make-a-or-b-equal-to-c/)

给你三个正整数 `a`、`b` 和 `c`。

你可以对 `a` 和 `b` 的二进制表示进行位翻转操作，返回能够使按位或运算 `a` OR `b` == `c` 成立的最小翻转次数。

「位翻转操作」是指将一个数的二进制表示任何单个位上的 1 变成 0 或者 0 变成 1。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-19-06-29-16.png)

```txt
输入：a = 2, b = 6, c = 5
输出：3
解释：翻转后 a = 1 , b = 4 , c = 5 使得 a OR b == c
```

示例 2：

```txt
输入：a = 4, b = 2, c = 7
输出：1
```

示例 3：

```txt
输入：a = 1, b = 2, c = 3
输出：0
```

---

提示：

- `1 <= a <= 10^9`
- `1 <= b <= 10^9`
- `1 <= c <= 10^9`

## 2. 🎯 s.1 - 位运算

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log C)$，其中 $C$ 是输入数字的最大值，这里为 30 位
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 逐位检查 a、b、c 的每一个二进制位
- 若 c 的当前位为 1，则 a 和 b 至少有一个为 1，否则需翻转 1 次
- 若 c 的当前位为 0，则 a 和 b 中所有为 1 的位都需要翻转
