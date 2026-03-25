# [0901. 股票价格跨度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0901.%20%E8%82%A1%E7%A5%A8%E4%BB%B7%E6%A0%BC%E8%B7%A8%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/online-stock-span/)

设计一个算法收集某些股票的每日报价，并返回该股票当日价格的 跨度。

当日股票价格的 跨度 被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

- 例如，如果未来 7 天股票的价格是 `[100,80,60,70,60,75,85]`，那么股票跨度将是 `[1,1,1,2,1,4,6]`。

实现 `StockSpanner` 类：

- `StockSpanner()` 初始化类对象。
- `int next(int price)` 给出今天的股价 `price`，返回该股票当日价格的 跨度。

示例：

```txt
输入：
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
输出：
[null, 1, 1, 1, 2, 1, 4, 6]

解释：
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // 返回 1
stockSpanner.next(80);  // 返回 1
stockSpanner.next(60);  // 返回 1
stockSpanner.next(70);  // 返回 2
stockSpanner.next(60);  // 返回 1
stockSpanner.next(75);  // 返回 4，因为截至今天的最后 4 个股价 (包括今天的股价 75) 都小于或等于今天的股价。
stockSpanner.next(85);  // 返回 6
```

---

提示：

- `1 <= price <= 10^5`
- 最多调用 `next` 方法 `10^4` 次

## 2. 🎯 s.1 - 单调栈

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：均摊 $O(1)$，每个元素最多入栈出栈一次
- 空间复杂度：$O(n)$

算法思路：

- 维护单调递减栈，栈中存 `[price, span]`
- 新价格入栈时，弹出所有 ≤ 当前价格的元素并累加其 span
