# [2961. 双模幂运算【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2961.%20%E5%8F%8C%E6%A8%A1%E5%B9%82%E8%BF%90%E7%AE%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟 + 快速幂](#2--s1---模拟--快速幂)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/double-modular-exponentiation/)

给你一个下标从 0 开始的二维数组 `variables`，其中 `variables[i] = [ai, bi, ci, mi]`，以及一个整数 `target`。

如果满足以下公式，则下标 `i` 是 好下标：

- `0 <= i < variables.length`
- `((ai^bi % 10)^ci) % mi == target`

返回一个由 好下标 组成的数组，顺序不限。

---

示例 1：

```txt
输入：variables = [[2,3,3,10],[3,3,3,1],[6,1,1,4]], target = 2
输出：[0,2]
解释：对于 variables 数组中的每个下标 i ：
1) 对于下标 0，variables[0] = [2,3,3,10]，(23 % 10)3 % 10 = 2。
2) 对于下标 1，variables[1] = [3,3,3,1]，(33 % 10)3 % 1 = 0。
3) 对于下标 2，variables[2] = [6,1,1,4]，(61 % 10)1 % 4 = 2。
因此，返回 [0,2] 作为答案。
```

示例 2：

```txt
输入：variables = [[39,3,1000,1000]], target = 17
输出：[]
解释：对于 variables 数组中的每个下标 i ：
1) 对于下标 0，variables[0] = [39,3,1000,1000]，(393 % 10)1000 % 1000 = 1。
因此，返回 [] 作为答案。
```

---

提示：

- `1 <= variables.length <= 100`
- `variables[i] == [ai, bi, ci, mi]`
- `1 <= ai, bi, ci, mi <= 10^3`
- `0 <= target <= 10^3`

## 2. 🎯 s.1 - 模拟 + 快速幂

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(L \cdot \log M)$，其中 $L$ 是 `variables` 长度，$M$ 是指数最大值
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 遍历每个 $[a, b, c, m]$，用快速幂依次计算 $a^b \bmod 10$ 和 $(a^b \bmod 10)^c \bmod m$
- 判断结果是否等于 `target`，等于则记录下标
