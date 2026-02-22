# [1710. 卡车上的最大单元数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1710.%20%E5%8D%A1%E8%BD%A6%E4%B8%8A%E7%9A%84%E6%9C%80%E5%A4%A7%E5%8D%95%E5%85%83%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心按单元排序](#2--s1---贪心按单元排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-units-on-a-truck/)

请你将一些箱子装在一辆卡车上。给你一个二维数组 `boxTypes`，其中 `boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]`：

- `numberOfBoxesi` 是类型 `i` 的箱子的数量。
- `numberOfUnitsPerBoxi` 是类型 `i` 每个箱子可以装载的单元数量。

整数 `truckSize` 表示卡车上可以装载箱子的最大数量。只要箱子数量不超过 `truckSize`，你就可以选择任意箱子装到卡车上。

返回卡车可以装载单元的最大总数。

---

示例 1：

```txt
输入：boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
输出：8
```

解释：

箱子的情况如下：

- 1 个第一类的箱子，里面含 3 个单元。
- 2 个第二类的箱子，每个里面含 2 个单元。
- 3 个第三类的箱子，每个里面含 1 个单元。

可以选择第一类和第二类的所有箱子，以及第三类的一个箱子。

`单元总数 = (1 * 3) + (2 * 2) + (1 * 1) = 8`

---

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

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \log N)$，其中 N 是数组 boxTypes 的长度，排序需要 $O(N \log N)$，遍历需要 $O(N)$
- 空间复杂度：$O(\log N)$，排序所需的栈空间

算法思路：

- 将箱子类型按每箱单元数从大到小排序（贪心策略：优先选择单元数多的箱子）
- 初始化剩余容量 `remaining` 为 `truckSize`，总单元数 `total` 为 0
- 遍历排序后的箱子类型 `[count, perBox]`：
  - 如果剩余容量为 0，提前结束循环
  - 计算可装载的箱子数量：`take = Math.min(count, remaining)`
  - 累加总单元数：`total += take * perBox`
  - 更新剩余容量：`remaining -= take`
- 返回总单元数 `total`
