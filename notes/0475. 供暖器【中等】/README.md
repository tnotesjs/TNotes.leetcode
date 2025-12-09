# [0475. 供暖器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0475.%20%E4%BE%9B%E6%9A%96%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/heaters/)

冬季已经来临。 你的任务是设计一个有固定加热半径的供暖器向所有房屋供暖。

在加热器的加热半径范围内的每个房屋都可以获得供暖。

现在，给出位于一条水平线上的房屋 `houses` 和供暖器 `heaters` 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。

**注意**：所有供暖器 `heaters` 都遵循你的半径标准，加热的半径也一样。

---

- 示例 1:

```txt
输入: houses = [1,2,3], heaters = [2]
输出: 1

解释:
仅在位置 2 上有一个供暖器。如果我们将加热半径设为 1，那么所有房屋就都能得到供暖。
```

- 示例 2:

```txt
输入: houses = [1,2,3,4], heaters = [1,4]
输出: 1

解释:
在位置 1, 4 上有两个供暖器。我们需要将加热半径设为 1，这样所有房屋就都能得到供暖。
```

- **示例 3：**

```txt
输入：houses = [1,5], heaters = [2]
输出：3
```

---

**提示：**

- `1 <= houses.length, heaters.length <= 3 * 10^4`
- `1 <= houses[i], heaters[i] <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
