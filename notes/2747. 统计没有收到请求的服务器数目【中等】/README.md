# [2747. 统计没有收到请求的服务器数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2747.%20%E7%BB%9F%E8%AE%A1%E6%B2%A1%E6%9C%89%E6%94%B6%E5%88%B0%E8%AF%B7%E6%B1%82%E7%9A%84%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 滑动窗口](#2--s1---排序--滑动窗口)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-zero-request-servers/)

给你一个整数 `n`，表示服务器的总数目，再给你一个下标从 0 开始的 二维 整数数组 `logs`，其中 `logs[i] = [server_id, time]` 表示 id 为 `server_id` 的服务器在 `time` 时收到了一个请求。

同时给你一个整数 `x` 和一个下标从 0 开始的整数数组 `queries`。

请你返回一个长度等于 `queries.length` 的数组 `arr`，其中 `arr[i]` 表示在时间区间 `[queries[i] - x, queries[i]]` 内没有收到请求的服务器数目。

注意时间区间是个闭区间。

---

示例 1：

```txt
输入：n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11]
输出：[1,2]
解释：
对于 queries[0]：id 为 1 和 2 的服务器在区间 [5, 10] 内收到了请求，所以只有服务器 3 没有收到请求。
对于 queries[1]：id 为 2 的服务器在区间 [6,11] 内收到了请求，所以 id 为 1 和 3 的服务器在这个时间段内没有收到请求。
```

示例 2：

```txt
输入：n = 3, logs = [[2,4],[2,1],[1,2],[3,1]], x = 2, queries = [3,4]
输出：[0,1]
解释：
对于 queries[0]：区间 [1, 3] 内所有服务器都收到了请求。
对于 queries[1]：只有 id 为 3 的服务器在区间 [2,4] 内没有收到请求。
```

---

提示：

- `1 <= n <= 10^5`
- `1 <= logs.length <= 10^5`
- `1 <= queries.length <= 10^5`
- `logs[i].length == 2`
- `1 <= logs[i][0] <= n`
- `1 <= logs[i][1] <= 10^6`
- `1 <= x <= 10^5`
- `x < queries[i] <= 10^6`

## 2. 🎯 s.1 - 排序 + 滑动窗口

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n + m \log m)$，其中 $n$ 为日志数，$m$ 为查询数
- 空间复杂度：$O(n + m)$

算法思路：

- 将 `logs` 按时间排序，将 `queries` 按时间排序（保留原始下标）
- 维护滑动窗口 `[left, right)` 和哈希计数器，记录窗口内有请求的服务器数 `active`
- 每次查询时，扩展右边界、收缩左边界，答案为 `n - active`
