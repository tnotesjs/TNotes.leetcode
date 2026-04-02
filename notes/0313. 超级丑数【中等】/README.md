# [0313. 超级丑数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0313.%20%E8%B6%85%E7%BA%A7%E4%B8%91%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 多指针动态规划](#2--s1---多指针动态规划)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/super-ugly-number/)

超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 `primes` 中。

给你一个整数 `n` 和一个整数数组 `primes`，返回第 `n` 个 超级丑数。

题目数据保证第 `n` 个 超级丑数 在 32-bit 带符号整数范围内。

---

示例 1：

```txt
输入：n = 12, primes = [2,7,13,19]
输出：32
解释：给定长度为 4 的质数数组 primes = [2,7,13,19]，前 12 个超级丑数序列为：[1,2,4,7,8,13,14,16,19,26,28,32]。
```

示例 2：

```txt
输入：n = 1, primes = [2,3,5]
输出：1
解释：1 不含质因数，因此它的所有质因数都在质数数组 primes = [2,3,5] 中。
```

---

提示：

- `1 <= n <= 10^5`
- `1 <= primes.length <= 100`
- `2 <= primes[i] <= 1000`
- 题目数据 保证 `primes[i]` 是一个质数
- `primes` 中的所有值都 互不相同，且按 递增顺序 排列

## 2. 🎯 s.1 - 多指针动态规划

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times k)$，其中 $k$ 是质数个数
- 空间复杂度：$O(n + k)$

算法思路：

- 与丑数 II 类似，为每个质数维护一个指针
- 每次取所有 $dp[pointer_j] \times prime_j$ 的最小值，同时推进等于最小值的指针
