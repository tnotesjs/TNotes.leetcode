# [3531. 统计被覆盖的建筑【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3531.%20%E7%BB%9F%E8%AE%A1%E8%A2%AB%E8%A6%86%E7%9B%96%E7%9A%84%E5%BB%BA%E7%AD%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-covered-buildings/)

给你一个正整数 `n`，表示一个 `n x n` 的城市，同时给定一个二维数组 `buildings`，其中 `buildings[i] = [x, y]` 表示位于坐标 `[x, y]` 的一个 唯一 建筑。

如果一个建筑在四个方向（左、右、上、下）中每个方向上都至少存在一个建筑，则称该建筑 被覆盖。

返回 被覆盖 的建筑数量。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-00-47.png)

输入: n = 3, buildings = [[1,2],[2,2],[3,2],[2,1],[2,3]]

输出: 1

解释:

- 只有建筑 `[2,2]` 被覆盖，因为它在每个方向上都至少存在一个建筑：
  - 上方 (`[1,2]`)
  - 下方 (`[3,2]`)
  - 左方 (`[2,1]`)
  - 右方 (`[2,3]`)
- 因此，被覆盖的建筑数量是 1。

---

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-01-08.png)

输入: n = 3, buildings = [[1,1],[1,2],[2,1],[2,2]]

输出: 0

解释:

- 没有任何一个建筑在每个方向上都有至少一个建筑。

---

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-23-01-25.png)

输入: n = 5, buildings = [[1,3],[3,2],[3,3],[3,5],[5,3]]

输出: 1

解释:

- 只有建筑 `[3,3]` 被覆盖，因为它在每个方向上至少存在一个建筑：
  - 上方 (`[1,3]`)
  - 下方 (`[5,3]`)
  - 左方 (`[3,2]`)
  - 右方 (`[3,5]`)
- 因此，被覆盖的建筑数量是 1。

---

提示：

- `2 <= n <= 10^5`
- `1 <= buildings.length <= 10^5`
- `buildings[i] = [x, y]`
- `1 <= x, y <= n`
- `buildings` 中所有坐标均 唯一。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
