# [1954. 收集足够苹果的最小花园周长【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1954.%20%E6%94%B6%E9%9B%86%E8%B6%B3%E5%A4%9F%E8%8B%B9%E6%9E%9C%E7%9A%84%E6%9C%80%E5%B0%8F%E8%8A%B1%E5%9B%AD%E5%91%A8%E9%95%BF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-garden-perimeter-to-collect-enough-apples/)

给你一个用无限二维网格表示的花园，每一个 整数坐标处都有一棵苹果树。整数坐标 `(i, j)` 处的苹果树有 `|i| + |j|` 个苹果。

你将会买下正中心坐标是 `(0, 0)` 的一块 正方形土地，且每条边都与两条坐标轴之一平行。

给你一个整数 `neededApples`，请你返回土地的 最小周长，使得 至少 有 `neededApples` 个苹果在土地 里面或者边缘上。

`|x|` 的值定义为：

- 如果 `x >= 0`，那么值为 `x`
- 如果 `x < 0`，那么值为 `-x`

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-27-38.png)

```txt
输入：neededApples = 1
输出：8
解释：边长长度为 1 的正方形不包含任何苹果。
但是边长为 2 的正方形包含 12 个苹果（如上图所示）。
周长为 2 * 4 = 8。
```

示例 2：

```txt
输入：neededApples = 13
输出：16
```

示例 3：

```txt
输入：neededApples = 1000000000
输出：5040
```

---

提示：

- `1 <= neededApples <= 10^15`

## 2. 🎯 s.1 - 数学 / 二分

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$，二分查找的时间
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 花园边长为 n 时，苹果总数 = $2n(n+1)(2n+1)/3$
- 二分查找最小的边长 n 使得苹果总数 $\geq$ neededApples
- 周长 = $8n$
