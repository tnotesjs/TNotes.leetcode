# [0881. 救生艇【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0881.%20%E6%95%91%E7%94%9F%E8%89%87%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心](#2--s1---贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/boats-to-save-people)

给定数组 `people`。`people[i]`表示第 `i` 个人的体重，船的数量不限，每艘船可以承载的最大重量为 `limit`。

每艘船最多可同时载两人，但条件是这些人的重量之和最多为 `limit`。

返回 _承载所有人所需的最小船数_。

示例 1：

```
输入：people = [1,2], limit = 3
输出：1
解释：1 艘船载 (1, 2)
```

示例 2：

```
输入：people = [3,2,2,1], limit = 3
输出：3
解释：3 艘船分别载 (1, 2), (2) 和 (3)
```

示例 3：

```
输入：people = [3,5,3,4], limit = 5
输出：4
解释：4 艘船分别载 (3), (3), (4), (5)
```

提示：

- `1 <= people.length <= 5 * 10^4`
- `1 <= people[i] <= limit <= 3 * 10^4`

## 2. 🎯 s.1 - 贪心 + 双指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，其中 n 是人数
- 空间复杂度：$O(1)$

算法思路：

- 排序后用双指针，最重和最轻的人配对
- 若能同船则两人一船，否则最重的人单独一船
