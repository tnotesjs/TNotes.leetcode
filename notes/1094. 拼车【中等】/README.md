# [1094. 拼车【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1094.%20%E6%8B%BC%E8%BD%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/car-pooling/)

车上最初有 `capacity` 个空座位。车 只能 向一个方向行驶（也就是说，不允许掉头或改变方向）

给定整数 `capacity` 和一个数组 `trips` , `trips[i] = [numPassengersi, fromi, toi]` 表示第 `i` 次旅行有 `numPassengersi` 乘客，接他们和放他们的位置分别是 `fromi` 和 `toi`。这些位置是从汽车的初始位置向东的公里数。

当且仅当你可以在所有给定的行程中接送所有乘客时，返回 `true`，否则请返回 `false`。

---

示例 1：

```txt
输入：trips = [[2,1,5],[3,3,7]], capacity = 4
输出：false
```

示例 2：

```txt
输入：trips = [[2,1,5],[3,3,7]], capacity = 5
输出：true
```

---

提示：

- `1 <= trips.length <= 1000`
- `trips[i].length == 3`
- `1 <= numPassengersi <= 100`
- `0 <= fromi < toi <= 1000`
- `1 <= capacity <= 10^5`

## 2. 🎯 s.1 - 差分数组

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + M)$，其中 $n$ 是 trips 的长度，$M = 1000$
- 空间复杂度：$O(M)$，差分数组的大小

算法思路：

- 建立差分数组，在上车点 from 加上乘客数，在下车点 to 减去乘客数
- 前缀和还原每个位置的实际乘客数
- 若任一位置超过 capacity 则返回 false
