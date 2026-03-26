# [2013. 检测正方形【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2013.%20%E6%A3%80%E6%B5%8B%E6%AD%A3%E6%96%B9%E5%BD%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/detect-squares/)

给你一个在 X-Y 平面上的点构成的数据流。设计一个满足下述要求的算法：

- 添加 一个在数据流中的新点到某个数据结构中。可以添加 重复 的点，并会视作不同的点进行处理。
- 给你一个查询点，请你从数据结构中选出三个点，使这三个点和查询点一同构成一个 面积为正 的 轴对齐正方形，统计 满足该要求的方案数目。

轴对齐正方形 是一个正方形，除四条边长度相同外，还满足每条边都与 x-轴 或 y-轴 平行或垂直。

实现 `DetectSquares` 类：

- `DetectSquares()` 使用空数据结构初始化对象
- `void add(int[] point)` 向数据结构添加一个新的点 `point = [x, y]`
- `int count(int[] point)` 统计按上述方式与点 `point = [x, y]` 共同构造 轴对齐正方形 的方案数。

---

- 示例：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-01-01.png)

```txt
输入：
["DetectSquares", "add", "add", "add", "count", "count", "add", "count"]
[[], [[3, 10]], [[11, 2]], [[3, 2]], [[11, 10]], [[14, 8]], [[11, 2]], [[11, 10]]]
输出：
[null, null, null, null, 1, 0, null, 2]

解释：
DetectSquares detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
detectSquares.count([11, 10]); // 返回 1。你可以选择：
                               //   - 第一个，第二个，和第三个点
detectSquares.count([14, 8]);  // 返回 0。查询点无法与数据结构中的这些点构成正方形。
detectSquares.add([11, 2]);    // 允许添加重复的点。
detectSquares.count([11, 10]); // 返回 2。你可以选择：
                               //   - 第一个，第二个，和第三个点
                               //   - 第一个，第三个，和第四个点
```

---

提示：

- `point.length == 2`
- `0 <= x, y <= 1000`
- 调用 `add` 和 `count` 的 总次数 最多为 `5000`

## 2. 🎯 s.1 - 哈希表 + 枚举对角点

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：`add` $O(1)$，`count` $O(n)$，其中 n 是已添加的点数
- 空间复杂度：$O(n)$，存储所有点及其计数

算法思路：

- 维护一个哈希表记录每个坐标的出现次数，同时保存所有点的列表
- 查询时，枚举所有已存储的点作为对角点 `(x3, y3)`，要求 `|x3-x1| == |y3-y1|` 且 `x3 != x1`
- 对于合法的对角点，答案累加另外两个顶点 `(x1,y3)` 和 `(x3,y1)` 的出现次数之积
