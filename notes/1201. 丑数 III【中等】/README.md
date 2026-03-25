# [1201. 丑数 III【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1201.%20%E4%B8%91%E6%95%B0%20III%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/ugly-number-iii/)

丑数是可以被 `a` 或 `b` 或 `c` 整除的 正整数。

给你四个整数：`n` 、`a` 、`b` 、`c`，请你设计一个算法来找出第 `n` 个丑数。

---

示例 1：

```txt
输入：n = 3, a = 2, b = 3, c = 5
输出：4
解释：丑数序列为 2, 3, 4, 5, 6, 8, 9, 10... 其中第 3 个是 4。
```

示例 2：

```txt
输入：n = 4, a = 2, b = 3, c = 4
输出：6
解释：丑数序列为 2, 3, 4, 6, 8, 9, 10, 12... 其中第 4 个是 6。
```

示例 3：

```txt
输入：n = 5, a = 2, b = 11, c = 13
输出：10
解释：丑数序列为 2, 4, 6, 8, 10, 11, 12, 13... 其中第 5 个是 10。
```

---

提示：

- `1 <= n, a, b, c <= 10^9`
- `1 <= a * b * c <= 10^18`
- 本题结果在 `[1, 2 * 10^9]` 的范围内

## 2. 🎯 s.1 - 二分查找 + 容斥原理

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log(2 \times 10^9))$，二分查找的范围
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 二分查找第 `n` 个丑数的值，对于给定的 `x`，用容斥原理计算 `[1, x]` 中能被 `a`、`b`、`c` 整除的数的个数
- 容斥公式：$count(x) = \lfloor x/a \rfloor + \lfloor x/b \rfloor + \lfloor x/c \rfloor - \lfloor x/lcm(a,b) \rfloor - \lfloor x/lcm(a,c) \rfloor - \lfloor x/lcm(b,c) \rfloor + \lfloor x/lcm(a,b,c) \rfloor$
- 找到最小的 `x` 使得 `count(x) >= n`
