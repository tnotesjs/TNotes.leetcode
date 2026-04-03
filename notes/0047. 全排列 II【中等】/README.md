# [0047. 全排列 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0047.%20%E5%85%A8%E6%8E%92%E5%88%97%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯 + 排序去重](#2--s1---回溯--排序去重)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/permutations-ii/)

给定一个可包含重复数字的序列 `nums`，按任意顺序返回所有不重复的全排列。

---

示例 1：

```txt
输入：nums = [1,1,2]
输出：[
  [1, 1, 2],
  [1, 2, 1],
  [2, 1, 1]
]
```

---

示例 2：

```txt
输入：nums = [1,2,3]
输出：[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
```

---

提示：

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

## 2. 🎯 s.1 - 回溯 + 排序去重

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times n!)$，最多有 $n!$ 个排列，每个排列需 $O(n)$ 复制
- 空间复杂度：$O(n)$，递归栈深度和 `used` 数组均为 $O(n)$（不计输出结果）

算法思路：

- 先排序使相同元素相邻，用 `used` 数组标记当前路径已选取的位置
- 每层枚举时，若 `used[i]` 为真则跳过；若 `nums[i] == nums[i-1]` 且 `!used[i-1]`，说明同一层已经枚举过值相同的分支，跳过以避免重复排列
- 路径长度等于 `nums.length` 时收集结果
