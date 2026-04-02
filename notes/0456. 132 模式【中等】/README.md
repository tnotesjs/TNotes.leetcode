# [0456. 132 模式【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0456.%20132%20%E6%A8%A1%E5%BC%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 单调栈](#2--s1---单调栈)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/132-pattern/)

给你一个整数数组 `nums`，数组中共有 `n` 个整数。132 模式的子序列 由三个整数 `nums[i]`、`nums[j]` 和 `nums[k]` 组成，并同时满足：`i < j < k` 和 `nums[i] < nums[k] < nums[j]`。

如果 `nums` 中存在 132 模式的子序列，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：nums = [1,2,3,4]
输出：false
解释：序列中不存在 132 模式的子序列。
```

示例 2：

```txt
输入：nums = [3,1,4,2]
输出：true
解释：序列中有 1 个 132 模式的子序列：[1, 4, 2]。
```

示例 3：

```txt
输入：nums = [-1,3,2,0]
输出：true
解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0]。
```

---

提示：

- `n == nums.length`
- `1 <= n <= 2 * 10^5`
- `-10^9 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 单调栈

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$

算法思路：

- 从右往左遍历，维护单调递减栈
- `third` 记录被弹出的最大值（即 132 中的 "2"）
- 若当前元素 < `third`，则找到了 132 模式
