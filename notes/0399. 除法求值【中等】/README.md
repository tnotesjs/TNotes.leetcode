# [0399. 除法求值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0399.%20%E9%99%A4%E6%B3%95%E6%B1%82%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/evaluate-division/)

给你一个变量对数组 `equations` 和一个实数值数组 `values` 作为已知条件，其中 `equations[i] = [Ai, Bi]` 和 `values[i]` 共同表示等式 `Ai / Bi = values[i]`。每个 `Ai` 或 `Bi` 是一个表示单个变量的字符串。

另有一些以数组 `queries` 表示的问题，其中 `queries[j] = [Cj, Dj]` 表示第 `j` 个问题，请你根据已知条件找出 `Cj / Dj = ?` 的结果作为答案。

返回 所有问题的答案。如果存在某个无法确定的答案，则用 `-1.0` 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 `-1.0` 替代这个答案。

---

注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。

---

注意：未在等式列表中出现的变量是未定义的，因此无法确定它们的答案。

---

示例 1：

```txt
输入：
equations = [["a","b"],["b","c"]],
values = [2.0,3.0],
queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

输出：
[6.00000,0.50000,-1.00000,1.00000,-1.00000]

解释：
条件：a / b = 2.0, b / c = 3.0
问题：a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
注意：x 是未定义的 => -1.0
```

示例 2：

```txt
输入：
equations = [["a","b"],["b","c"],["bc","cd"]],
values = [1.5,2.5,5.0],
queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]

输出：
[3.75000,0.40000,5.00000,0.20000]
```

示例 3：

```txt
输入：
equations = [["a","b"]],
values = [0.5],
queries = [["a","b"],["b","a"],["a","c"],["x","y"]]

输出：
[0.50000,2.00000,-1.00000,-1.00000]
```

---

提示：

- `1 <= equations.length <= 20`
- `equations[i].length == 2`
- `1 <= Ai.length, Bi.length <= 5`
- `values.length == equations.length`
- `0.0 < values[i] <= 20.0`
- `1 <= queries.length <= 20`
- `queries[i].length == 2`
- `1 <= Cj.length, Dj.length <= 5`
- `Ai, Bi, Cj, Dj` 由小写英文字母与数字组成

## 2. 🎯 s.1 - 带权并查集

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O((N + Q) \cdot \alpha(N))$，其中 $N$ 是等式数，$Q$ 是查询数
- 空间复杂度：$O(N)$

算法思路：

- 建立带权并查集，$weight[x] = x / root(x)$
- `a / b = val` 即合并 a、b，权值传递除法关系
- 查询时若同根则 $a/b = weight[a] / weight[b]$
