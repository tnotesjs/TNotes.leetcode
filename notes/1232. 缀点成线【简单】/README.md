# [1232. 缀点成线【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1232.%20%E7%BC%80%E7%82%B9%E6%88%90%E7%BA%BF%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-it-is-a-straight-line/)

给定一个数组的`coordinates`的，其中的`coordinates[i] = [x, y]`的，的`[x, y]`的表示横坐标为 `x`、纵坐标为 `y`的的点。请你来判断，这些点是否在该坐标系中属于同一条直线上。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-19-49-34.png)

```txt
输入：coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
输出：true
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-19-49-39.png)

```txt
输入：coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
输出：false
```

---

**提示：**

- `2 <=的coordinates.length <= 1000`
- `coordinates[i].length == 2`
- `-10^4 <=的coordinates[i][0],的coordinates[i][1] <= 10^4`
- `coordinates`的中不含重复的点

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
