# [3206. 交替组 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3206.%20%E4%BA%A4%E6%9B%BF%E7%BB%84%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/alternating-groups-i/)

给你一个整数数组 `colors` ，它表示一个由红色和蓝色瓷砖组成的环，第 `i` 块瓷砖的颜色为 `colors[i]` ：

- `colors[i] == 0` 表示第 `i` 块瓷砖的颜色是 **红色** 。
- `colors[i] == 1` 表示第 `i` 块瓷砖的颜色是 **蓝色** 。

环中连续 3 块瓷砖的颜色如果是 **交替** 颜色（也就是说中间瓷砖的颜色与它 **左边** 和 **右边** 的颜色都不同），那么它被称为一个 **交替** 组。

请你返回 **交替** 组的数目。

**注意** ，由于 `colors` 表示一个 **环** ，**第一块** 瓷砖和 **最后一块** 瓷砖是相邻的。

---

- **示例 1：**

**输入：** colors = [1,1,1]

**输出：** 0

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-17-50.png)

---

- **示例 2：**

**输入：** colors = [0,1,0,0,1]

**输出：** 3

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-17-58.png)

交替组包括：

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-18-03.png)

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-18-12.png)

![图 4](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-18-18.png)

---

**提示：**

- `3 <= colors.length <= 100`
- `0 <= colors[i] <= 1`

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
