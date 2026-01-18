# [2836. 在传球游戏中最大化函数值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2836.%20%E5%9C%A8%E4%BC%A0%E7%90%83%E6%B8%B8%E6%88%8F%E4%B8%AD%E6%9C%80%E5%A4%A7%E5%8C%96%E5%87%BD%E6%95%B0%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-value-of-function-in-a-ball-passing-game/)

给你一个长度为 `n` 下标从 0 开始的整数数组 `receiver` 和一个整数 `k`。

总共有 `n` 名玩家，玩家 编号 互不相同，且为 `[0, n - 1]` 中的整数。这些玩家玩一个传球游戏，`receiver[i]` 表示编号为 `i` 的玩家会传球给编号为 `receiver[i]` 的玩家。玩家可以传球给自己，也就是说 `receiver[i]` 可能等于 `i`。

你需要从 `n` 名玩家中选择一名玩家作为游戏开始时唯一手中有球的玩家，球会被传 恰好 `k` 次。

如果选择编号为 `x` 的玩家作为开始玩家，定义函数 `f(x)` 表示从编号为 `x` 的玩家开始，`k` 次传球内所有接触过球玩家的编号之 和 ，如果有玩家多次触球，则 累加多次。换句话说， `f(x) = x + receiver[x] + receiver[receiver[x]] + ... + receiver^(k)[x]`。

你的任务时选择开始玩家 `x` ，目的是 最大化 `f(x)`。

请你返回函数的 最大值。

---

注意：`receiver` 可能含有重复元素。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-12-17-45.png)

```txt
输入：receiver = [2,0,1], k = 4
输出：6
解释：上表展示了从编号为 x = 2 开始的游戏过程。
从表中可知，f(2) 等于 6。
6 是能得到最大的函数值。
所以输出为 6。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-12-17-58.png)

```txt
输入：receiver = [1,1,1,2,3], k = 3
输出：10
解释：上表展示了从编号为 x = 4 开始的游戏过程。
从表中可知，f(4) 等于 10。
10 是能得到最大的函数值。
所以输出为 10。
```

---

提示：

- `1 <= receiver.length == n <= 10^5`
- `0 <= receiver[i] <= n - 1`
- `1 <= k <= 10^10`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
