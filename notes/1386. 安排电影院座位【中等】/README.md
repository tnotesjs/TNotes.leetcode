# [1386. 安排电影院座位【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1386.%20%E5%AE%89%E6%8E%92%E7%94%B5%E5%BD%B1%E9%99%A2%E5%BA%A7%E4%BD%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/cinema-seat-allocation/)

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-19-00-10.png)

如上图所示，电影院的观影厅中有 `n` 行座位，行编号从 1 到 `n` ，且每一行内总共有 10 个座位，列编号从 1 到 10 。

给你数组 `reservedSeats` ，包含所有已经被预约了的座位。比如说，`reservedSeats[i]=[3,8]` ，它表示第 3 行第 8 个座位被预约了。

请你返回 最多能安排多少个 4 人家庭 。4 人家庭要占据 同一行内连续 的 4 个座位。隔着过道的座位（比方说 [3,3] 和 [3,4]）不是连续的座位，但是如果你可以将 4 人家庭拆成过道两边各坐 2 人，这样子是允许的。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-19-00-19.png)

```txt
输入：n = 3, reservedSeats = [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]
输出：4
解释：上图所示是最优的安排方案，总共可以安排 4 个家庭。蓝色的叉表示被预约的座位，橙色的连续座位表示一个 4 人家庭。
```

- 示例 2：

```txt
输入：n = 2, reservedSeats = [[2,1],[1,8],[2,6]]
输出：2
```

- 示例 3：

```txt
输入：n = 4, reservedSeats = [[4,3],[1,4],[4,6],[1,7]]
输出：4
```

---

提示：

- `1 <= n <= 10^9`
- `1 <= reservedSeats.length <= min(10*n, 10^4)`
- `reservedSeats[i].length == 2`
- `1 <= reservedSeats[i][0] <= n`
- `1 <= reservedSeats[i][1] <= 10`
- 所有 `reservedSeats[i]` 都是互不相同的。

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
