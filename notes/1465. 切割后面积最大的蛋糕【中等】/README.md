# [1465. 切割后面积最大的蛋糕【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1465.%20%E5%88%87%E5%89%B2%E5%90%8E%E9%9D%A2%E7%A7%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E8%9B%8B%E7%B3%95%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/)

矩形蛋糕的高度为 `h` 且宽度为 `w`，给你两个整数数组 `horizontalCuts` 和 `verticalCuts`，其中：

- `horizontalCuts[i]` 是从矩形蛋糕顶部到第 `i` 个水平切口的距离
- `verticalCuts[j]` 是从矩形蛋糕的左侧到第 `j` 个竖直切口的距离

请你按数组 _`horizontalCuts`_ 和 _`verticalCuts`_ 中提供的水平和竖直位置切割后，请你找出 面积最大 的那份蛋糕，并返回其 面积 。由于答案可能是一个很大的数字，因此需要将结果 对 `10^9 + 7` 取余 后返回。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-11-58.png)

```txt
输入：h = 5, w = 4, horizontalCuts = [1,2,4], verticalCuts = [1,3]
输出：4

解释：
上图所示的矩阵蛋糕中，红色线表示水平和竖直方向上的切口。
切割蛋糕后，绿色的那份蛋糕面积最大。
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-12-06.png)

```txt
输入：h = 5, w = 4, horizontalCuts = [3,1], verticalCuts = [1]
输出：6

解释：
上图所示的矩阵蛋糕中，红色线表示水平和竖直方向上的切口。
切割蛋糕后，绿色和黄色的两份蛋糕面积最大。
```

- 示例 3：

```txt
输入：h = 5, w = 4, horizontalCuts = [3], verticalCuts = [3]
输出：9
```

---

提示：

- `2 <= h, w <= 10^9`
- `1 <= horizontalCuts.length <= min(h - 1, 10^5)`
- `1 <= verticalCuts.length <= min(w - 1, 10^5)`
- `1 <= horizontalCuts[i] < h`
- `1 <= verticalCuts[i] < w`
- 题目数据保证 `horizontalCuts` 中的所有元素各不相同
- 题目数据保证 `verticalCuts` 中的所有元素各不相同

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
