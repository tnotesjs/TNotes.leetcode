# [2080. 区间内查询数字的频率【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2080.%20%E5%8C%BA%E9%97%B4%E5%86%85%E6%9F%A5%E8%AF%A2%E6%95%B0%E5%AD%97%E7%9A%84%E9%A2%91%E7%8E%87%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/range-frequency-queries/)

请你设计一个数据结构，它能求出给定子数组内一个给定值的 **频率** 。

子数组中一个值的 **频率** 指的是这个子数组中这个值的出现次数。

请你实现 `RangeFreqQuery` 类：

- `RangeFreqQuery(int[] arr)` 用下标从 **0** 开始的整数数组 `arr` 构造一个类的实例。
- `int query(int left, int right, int value)` 返回子数组 `arr[left...right]` 中 `value` 的 **频率** 。

一个 **子数组** 指的是数组中一段连续的元素。`arr[left...right]` 指的是 `nums` 中包含下标 `left` 和 `right` **在内** 的中间一段连续元素。

---

- **示例 1：**

```txt
输入：
["RangeFreqQuery", "query", "query"]
[[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 2, 4], [0, 11, 33]]
输出：
[null, 1, 2]

解释：
RangeFreqQuery rangeFreqQuery = new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]);
rangeFreqQuery.query(1, 2, 4); // 返回 1 。4 在子数组 [33, 4] 中出现 1 次。
rangeFreqQuery.query(0, 11, 33); // 返回 2 。33 在整个子数组中出现 2 次。
```

---

**提示：**

- `1 <= arr.length <= 10^5`
- `1 <= arr[i], value <= 10^4`
- `0 <= left <= right < arr.length`
- 调用 `query` 不超过 `10^5` 次。

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
