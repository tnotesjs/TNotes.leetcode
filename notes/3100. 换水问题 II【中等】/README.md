# [3100. 换水问题 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3100.%20%E6%8D%A2%E6%B0%B4%E9%97%AE%E9%A2%98%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟](#2--s1---模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/water-bottles-ii/)

给你两个整数 `numBottles` 和 `numExchange`。

`numBottles` 代表你最初拥有的满水瓶数量。在一次操作中，你可以执行以下操作之一：

- 喝掉任意数量的满水瓶，使它们变成空水瓶。
- 用 `numExchange` 个空水瓶交换一个满水瓶。然后，将 `numExchange` 的值增加 1。

注意，你不能使用相同的 `numExchange` 值交换多批空水瓶。例如，如果 `numBottles == 3` 并且 `numExchange == 1`，则不能用 `3` 个空水瓶交换成 `3` 个满水瓶。

返回你 最多 可以喝到多少瓶水。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-22-20-45.png)

```txt
输入：numBottles = 13, numExchange = 6
输出：15

解释：
上表显示了满水瓶的数量、空水瓶的数量、numExchange 的值，以及累计喝掉的水瓶数量。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-22-20-58.png)

```txt
输入：numBottles = 10, numExchange = 3
输出：13

解释：
上表显示了满水瓶的数量、空水瓶的数量、numExchange 的值，以及累计喝掉的水瓶数量。
```

---

提示：

- `1 <= numBottles <= 100`
- `1 <= numExchange <= 100`

## 2. 🎯 s.1 - 模拟

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(\sqrt{numBottles})$，每次交换后 numExchange 递增
- 空间复杂度：$O(1)$，只用常数额外空间

算法思路：

- 先喝完所有满水瓶，记录空瓶数
- 每次用 numExchange 个空瓶换一瓶水，喝完后空瓶加 1，numExchange 加 1
- 重复直到空瓶不足以交换

