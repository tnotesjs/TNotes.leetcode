# [1710. 卡车上的最大单元数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1710.%20%E5%8D%A1%E8%BD%A6%E4%B8%8A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%8D%95%E5%85%83%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心按单元排序](#2--s1---贪心按单元排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-units-on-a-truck/)

请你将一些箱子装在 一辆卡车 上。给你一个二维数组 `boxTypes` ，其中 `boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]` ：

- `numberOfBoxesi` 是类型 `i` 的箱子的数量。
- `numberOfUnitsPerBoxi` 是类型 `i` 每个箱子可以装载的单元数量。

整数 `truckSize` 表示卡车上可以装载 箱子 的 最大数量。只要箱子数量不超过 `truckSize` ，你就可以选择任意箱子装到卡车上。

返回卡车可以装载 单元 的 最大 总数*。*

---

示例 1：

```txt
输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
输出：8
解释：箱子的情况如下：
- 1 个第一类的箱子，里面含 3 个单元。
- 2 个第二类的箱子，每个里面含 2 个单元。
- 3 个第三类的箱子，每个里面含 1 个单元。
可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。
单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8
```

示例 2：

```txt
输入：boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
输出：91
```

---

提示：

- `1 <= boxTypes.length <= 1000`
- `1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000`
- `1 <= truckSize <= 10^6`

## 2. 🎯 s.1 - 贪心按单元排序

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N \log N)$，按单元数排序后线性取箱
- 空间复杂度：$O(1)$，原地或常数额外变量

解题思路：

- 按每箱单元数从大到小排序，依次取能装的箱子数量（取 min 剩余容量与箱数），累计单元并减少容量，容量为 0 时结束。
