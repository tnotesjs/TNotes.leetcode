# [0963. 最小面积矩形 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0963.%20%E6%9C%80%E5%B0%8F%E9%9D%A2%E7%A7%AF%E7%9F%A9%E5%BD%A2%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-area-rectangle-ii/)

给你一个  **X-Y**  平面上的点数组 `points`，其中 `points[i] = [xi, yi]`。

返回由这些点形成的任意矩形的最小面积，矩形的边  **不一定** 平行于 X 轴和 Y 轴。如果不存在这样的矩形，则返回 `0`。

答案只需在`10^-5` 的误差范围内即可被视作正确答案。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-26-10.png)

```txt
输入： points = [[1,2],[2,1],[1,0],[0,1]]
输出： 2.00000
解释： 最小面积矩形由 [1,2]、[2,1]、[1,0]、[0,1] 组成，其面积为 2。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-26-20.png)

```txt
输入： points = [[0,1],[2,1],[1,1],[1,0],[2,0]]
输出： 1.00000
解释： 最小面积矩形由 [1,0]、[1,1]、[2,1]、[2,0] 组成，其面积为 1。
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-26-41.png)

```txt
输入： points = [[0,3],[1,2],[3,1],[1,3],[2,1]]
输出： 0
解释： 无法由这些点组成任何矩形。
```

---

**提示：**

- `1 <= points.length <= 50`
- `points[i].length == 2`
- `0 <= xi, yi <= 4 * 10^4`
- 所有给定的点都是  **唯一**  的。

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
