# [1515. 服务中心的最佳位置【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1515.%20%E6%9C%8D%E5%8A%A1%E4%B8%AD%E5%BF%83%E7%9A%84%E6%9C%80%E4%BD%B3%E4%BD%8D%E7%BD%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/best-position-for-a-service-centre/)

一家快递公司希望在新城市建立新的服务中心。公司统计了该城市所有客户在二维地图上的坐标，并希望能够以此为依据为新的服务中心选址：使服务中心 到所有客户的欧几里得距离的总和最小 。

给你一个数组 `positions` ，其中 `positions[i] = [xi, yi]` 表示第 `i` 个客户在二维地图上的位置，返回到所有客户的 欧几里得距离的最小总和 。

换句话说，请你为服务中心选址，该位置的坐标 `[xcentre, ycentre]` 需要使下面的公式取到最小值：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-05-10.png)

与真实值误差在 `10^-5`之内的答案将被视作正确答案。

---

- 示例 1：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-08-19.png)

```txt
输入：positions = [[0,1],[1,0],[1,2],[2,1]]
输出：4.00000

解释：
如图所示，你可以选 [xcentre, ycentre] = [1, 1] 作为新中心的位置，
这样一来到每个客户的距离就都是 1，所有距离之和为 4 ，这也是可以找到的最小值。
```

- 示例 2：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-08-25.png)

```txt
输入：positions = [[1,1],[3,3]]
输出：2.82843

解释：
欧几里得距离可能的最小总和为 sqrt(2) + sqrt(2) = 2.82843
```

---

提示：

- `1 <= positions.length <= 50`
- `positions[i].length == 2`
- `0 <= xi, yi <= 100`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
