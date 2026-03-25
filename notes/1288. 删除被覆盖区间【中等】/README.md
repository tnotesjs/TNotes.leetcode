# [1288. 删除被覆盖区间【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1288.%20%E5%88%A0%E9%99%A4%E8%A2%AB%E8%A6%86%E7%9B%96%E5%8C%BA%E9%97%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-covered-intervals/)

给你一个区间列表，请你删除列表中被其他区间所覆盖的区间。

只有当 `c <= a` 且 `b <= d` 时，我们才认为区间 `[a,b)` 被区间 `[c,d)` 覆盖。

在完成所有删除操作后，请你返回列表中剩余区间的数目。

示例：

```txt
输入：intervals = [[1,4],[3,6],[2,8]]
输出：2
解释：区间 [3,6] 被区间 [2,8] 覆盖，所以它被删除了。
```

提示：​​​​​​

- `1 <= intervals.length <= 1000`
- `0 <= intervals[i][0] < intervals[i][1] <= 10^5`
- 对于所有的 `i != j`：`intervals[i] != intervals[j]`

## 2. 🎯 s.1 - 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 $n$ 是区间数量
- 空间复杂度：$O(\log n)$，排序所需栈空间

算法思路：

- 按左端点升序排序，左端点相同时按右端点降序
- 维护当前最大右端点，若新区间的右端点超过最大右端点，则未被覆盖，计数 +1
