# [3245. 交替组 III【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3245.%20%E4%BA%A4%E6%9B%BF%E7%BB%84%20III%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/alternating-groups-iii/)

给你一个整数数组 `colors` 和一个二维整数数组 `queries` 。`colors`表示一个由红色和蓝色瓷砖组成的环，第 `i` 块瓷砖的颜色为 `colors[i]` ：

- `colors[i] == 0` 表示第 `i` 块瓷砖的颜色是 **红色** 。
- `colors[i] == 1` 表示第 `i` 块瓷砖的颜色是 **蓝色** 。

环中连续若干块瓷砖的颜色如果是 **交替** 颜色（也就是说这组瓷砖中除了第一块和最后一块瓷砖以外，中间瓷砖的颜色与它 **左边** 和 **右边** 的颜色都不同），那么它被称为一个 **交替组**。

你需要处理两种类型的查询：

- `queries[i] = [1, sizei]`，确定大小为`sizei`的 **交替组** 的数量。
- `queries[i] = [2, indexi, colori]`，将`colors[indexi]`更改为`colori`。

返回数组 `answer`，数组中按顺序包含第一种类型查询的结果。

**注意** ，由于 `colors` 表示一个 **环** ，**第一块** 瓷砖和 **最后一块** 瓷砖是相邻的。

---

- **示例 1：**

**输入：** colors = [0,1,1,0,1], queries = [[2,1,0],[1,4]]

**输出：** [2]

**解释：**

第一次查询：

将 `colors[1]` 改为 0。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-40.png)

第二次查询：

统计大小为 4 的交替组的数量：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-47.png)

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-51.png)

---

- **示例 2：**

**输入：** colors = [0,0,1,0,1,1], queries = [[1,3],[2,3,0],[1,5]]

**输出：** [2,0]

**解释：**

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-35-56.png)

第一次查询：

统计大小为 3 的交替组的数量。

![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-36-02.png)

![图 5](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-36-06.png)

第二次查询：`colors` 不变。

第三次查询：不存在大小为 5 的交替组。

---

**提示：**

- `4 <= colors.length <= 5 * 10^4`
- `0 <= colors[i] <= 1`
- `1 <= queries.length <= 5 * 10^4`
- `queries[i][0] == 1` 或 `queries[i][0] == 2`
- 对于所有的`i`：
  - `queries[i][0] == 1`： `queries[i].length == 2`, `3 <= queries[i][1] <= colors.length - 1`
  - `queries[i][0] == 2`： `queries[i].length == 3`, `0 <= queries[i][1] <= colors.length - 1`, `0 <= queries[i][2] <= 1`

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
