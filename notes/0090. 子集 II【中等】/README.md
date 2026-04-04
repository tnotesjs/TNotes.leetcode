# [0090. 子集 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0090.%20%E5%AD%90%E9%9B%86%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯（排序去重）](#2--s1---回溯排序去重)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/subsets-ii/)

给你一个整数数组 `nums`，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集不能包含重复的子集。返回的解集中，子集可以按任意顺序排列。

---

示例 1：

```txt
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```

---

示例 2：

```txt
输入：nums = [0]
输出：[[],[0]]
```

---

提示：

- `1 <= nums.length <= 10`
- `-10 <= nums[i] <= 10`

## 2. 🎯 s.1 - 回溯（排序去重）

![svg](./assets/1.svg)

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times 2^n)$，最多生成 $2^n$ 个子集，每个子集拷贝最多 $O(n)$
- 空间复杂度：$O(n)$，递归栈深度最大为 n

算法思路：

- 先将数组排序，使重复元素相邻
- 回溯过程中，每层递归当 `nums[i] == nums[i-1]` 且 `i > start` 时跳过，避免生成重复子集
- 每次进入回溯函数时，将当前 path 加入结果
