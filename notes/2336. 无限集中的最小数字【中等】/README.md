# [2336. 无限集中的最小数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2336.%20%E6%97%A0%E9%99%90%E9%9B%86%E4%B8%AD%E7%9A%84%E6%9C%80%E5%B0%8F%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-number-in-infinite-set/)

现有一个包含所有正整数的集合 `[1, 2, 3, 4, 5, ...]`。

实现 `SmallestInfiniteSet` 类：

- `SmallestInfiniteSet()` 初始化 SmallestInfiniteSet 对象以包含 所有 正整数。
- `int popSmallest()` 移除 并返回该无限集中的最小整数。
- `void addBack(int num)` 如果正整数 `num` 不 存在于无限集中，则将一个 `num` 添加 到该无限集中。

示例：

```txt
输入
["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
[[], [2], [], [], [], [1], [], [], []]
输出
[null, null, 1, 2, 3, null, 1, 4, 5]

解释
SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
smallestInfiniteSet.addBack(2);    // 2 已经在集合中，所以不做任何变更。
smallestInfiniteSet.popSmallest(); // 返回 1，因为 1 是最小的整数，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 2，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 3，并将其从集合中移除。
smallestInfiniteSet.addBack(1);    // 将 1 添加到该集合中。
smallestInfiniteSet.popSmallest(); // 返回 1，因为 1 在上一步中被添加到集合中，
                                   // 且 1 是最小的整数，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 4，并将其从集合中移除。
smallestInfiniteSet.popSmallest(); // 返回 5，并将其从集合中移除。
```

---

提示：

- `1 <= num <= 1000`
- 最多调用 `popSmallest` 和 `addBack` 方法 共计 `1000` 次

## 2. 🎯 s.1 - 最小堆

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：popSmallest 和 addBack 均为 $O(\log n)$，其中 n 是堆中元素数量
- 空间复杂度：$O(n)$，堆和哈希集合存储被加回的元素

算法思路：

- 维护一个指针 cur 表示当前无限集的起始位置，初始为 1
- 用最小堆 + 哈希集合存储被加回的小于 cur 的数字
- popSmallest：堆顶小于 cur 则弹出堆顶，否则返回 cur++
- addBack：只有 num < cur 且不在堆中时才加入堆
