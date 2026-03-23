# [0040. 组合总和 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0040.%20%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯 + 排序去重剪枝](#2--s1---回溯--排序去重剪枝)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/combination-sum-ii/)

给定一个候选人编号的集合 `candidates` 和一个目标数 `target`，找出 `candidates` 中所有可以使数字和为 `target` 的组合。

`candidates` 中的每个数字在每个组合中只能使用 一次。

---

注意：解集不能包含重复的组合。

示例 1：

```txt
输入: candidates =[10,1,2,7,6,1,5], target =8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

示例 2：

```txt
输入: candidates =[2,5,2,1,2], target =5,
输出:
[
[1,2,2],
[5]
]
```

---

提示：

- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`

## 2. 🎯 s.1 - 回溯 + 排序去重剪枝

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(2^n \cdot n)$，其中 $n$ 是 `candidates` 的长度，最多有 $2^n$ 个子集，每个结果复制需 $O(n)$
- 空间复杂度：$O(n)$，递归栈深度最多为 $n$（不计输出结果）

算法思路：

- 先对 `candidates` 升序排序，使相同元素相邻，方便去重剪枝
- `backtrack(start, remain, path)`：从下标 `start` 开始枚举，每次取 `candidates[i]` 后，下一层从 `i + 1` 开始（每个元素只能用一次）
- 同层枚举时，若 `i > start && candidates[i] == candidates[i-1]`，跳过该元素，避免产生重复组合
- `remain == 0` 时收集结果；`candidates[i] > remain` 时 `break`（已排序，后续更大）
