# [1851. 包含每个查询的最小区间【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1851.%20%E5%8C%85%E5%90%AB%E6%AF%8F%E4%B8%AA%E6%9F%A5%E8%AF%A2%E7%9A%84%E6%9C%80%E5%B0%8F%E5%8C%BA%E9%97%B4%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-interval-to-include-each-query/)

给你一个二维整数数组 `intervals` ，其中 `intervals[i] = [lefti, righti]` 表示第 `i` 个区间开始于 `lefti` 、结束于 `righti`（包含两侧取值，**闭区间**）。区间的 **长度** 定义为区间中包含的整数数目，更正式地表达是 `righti - lefti + 1` 。

再给你一个整数数组 `queries` 。第 `j` 个查询的答案是满足 `lefti <= queries[j] <= righti` 的 **长度最小区间 `i` 的长度** 。如果不存在这样的区间，那么答案是 `-1` 。

以数组形式返回对应查询的所有答案。

---

- **示例 1：**

```txt
输入：intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
输出：[3,3,1,4]
解释：查询处理如下：
- Query = 2 ：区间 [2,4] 是包含 2 的最小区间，答案为 4 - 2 + 1 = 3 。
- Query = 3 ：区间 [2,4] 是包含 3 的最小区间，答案为 4 - 2 + 1 = 3 。
- Query = 4 ：区间 [4,4] 是包含 4 的最小区间，答案为 4 - 4 + 1 = 1 。
- Query = 5 ：区间 [3,6] 是包含 5 的最小区间，答案为 6 - 3 + 1 = 4 。
```

- **示例 2：**

```txt
输入：intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]
输出：[2,-1,4,6]
解释：查询处理如下：
- Query = 2 ：区间 [2,3] 是包含 2 的最小区间，答案为 3 - 2 + 1 = 2 。
- Query = 19：不存在包含 19 的区间，答案为 -1 。
- Query = 5 ：区间 [2,5] 是包含 5 的最小区间，答案为 5 - 2 + 1 = 4 。
- Query = 22：区间 [20,25] 是包含 22 的最小区间，答案为 25 - 20 + 1 = 6 。
```

---

**提示：**

- `1 <= intervals.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `intervals[i].length == 2`
- `1 <= lefti <= righti <= 10^7`
- `1 <= queries[j] <= 10^7`

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
