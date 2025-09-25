# [1825. 求出 MK 平均值【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1825.%20%E6%B1%82%E5%87%BA%20MK%20%E5%B9%B3%E5%9D%87%E5%80%BC%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/finding-mk-average/)

给你两个整数  `m`  和  `k` ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 **MK 平均值** 。

**MK 平均值**  按照如下步骤计算：

1. 如果数据流中的整数少于 `m`  个，**MK 平均值**  为 `-1` ，否则将数据流中最后 `m`  个元素拷贝到一个独立的容器中。
2. 从这个容器中删除最小的 `k`  个数和最大的 `k`  个数。
3. 计算剩余元素的平均值，并 **向下取整到最近的整数** 。

请你实现  `MKAverage`  类：

- `MKAverage(int m, int k)`  用一个空的数据流和两个整数 `m`  和 `k`  初始化  **MKAverage**  对象。
- `void addElement(int num)`  往数据流中插入一个新的元素  `num` 。
- `int calculateMKAverage()`  对当前的数据流计算并返回 **MK 平均数** ，结果需 **向下取整到最近的整数** 。

---

- **示例 1：**

```txt
输入：
["MKAverage", "addElement", "addElement", "calculateMKAverage", "addElement", "calculateMKAverage", "addElement", "addElement", "addElement", "calculateMKAverage"]
[[3, 1], [3], [1], [], [10], [], [5], [5], [5], []]
输出：
[null, null, null, -1, null, 3, null, null, null, 5]

解释：
MKAverage obj = new MKAverage(3, 1);
obj.addElement(3);        // 当前元素为 [3]
obj.addElement(1);        // 当前元素为 [3,1]
obj.calculateMKAverage(); // 返回 -1 ，因为 m = 3 ，但数据流中只有 2 个元素
obj.addElement(10);       // 当前元素为 [3,1,10]
obj.calculateMKAverage(); // 最后 3 个元素为 [3,1,10]
                          // 删除最小以及最大的 1 个元素后，容器为 [3]
                          // [3] 的平均值等于 3/1 = 3 ，故返回 3
obj.addElement(5);        // 当前元素为 [3,1,10,5]
obj.addElement(5);        // 当前元素为 [3,1,10,5,5]
obj.addElement(5);        // 当前元素为 [3,1,10,5,5,5]
obj.calculateMKAverage(); // 最后 3 个元素为 [5,5,5]
                          // 删除最小以及最大的 1 个元素后，容器为 [5]
                          // [5] 的平均值等于 5/1 = 5 ，故返回 5
```

---

**提示：**

- `3 <= m <= 10^5`
- `1 <= k*2 < m`
- `1 <= num <= 10^5`
- `addElement` 与  `calculateMKAverage`  总操作次数不超过 `10^5` 次。

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
