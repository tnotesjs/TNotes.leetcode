# [2601. 质数减法运算【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2601.%20%E8%B4%A8%E6%95%B0%E5%87%8F%E6%B3%95%E8%BF%90%E7%AE%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心 + 质数筛](#2--s1---贪心--质数筛)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/prime-subtraction-operation/)

给你一个下标从 0 开始的整数数组 `nums`，数组长度为 `n`。

你可以执行无限次下述运算：

- 选择一个之前未选过的下标 `i`，并选择一个 严格小于 `nums[i]` 的质数 `p`，从 `nums[i]` 中减去 `p`。

如果你能通过上述运算使得 `nums` 成为严格递增数组，则返回 `true` ；否则返回 `false`。

严格递增数组 中的每个元素都严格大于其前面的元素。

---

示例 1：

```txt
输入：nums = [4,9,6,10]
输出：true
解释：
在第一次运算中：选择 i = 0 和 p = 3，然后从 nums[0] 减去 3，nums 变为 [1,9,6,10]。
在第二次运算中：选择 i = 1 和 p = 7，然后从 nums[1] 减去 7，nums 变为 [1,2,6,10]。
第二次运算后，nums 按严格递增顺序排序，因此答案为 true。
```

示例 2：

```txt
输入：nums = [6,8,11,12]
输出：true
解释：nums 从一开始就按严格递增顺序排序，因此不需要执行任何运算。
```

示例 3：

```txt
输入：nums = [5,8,3]
输出：false
解释：可以证明，执行运算无法使 nums 按严格递增顺序排序，因此答案是 false。
```

---

提示：

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `nums.length == n`

## 2. 🎯 s.1 - 贪心 + 质数筛

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \cdot M)$，其中 N 是数组长度，M 是元素最大值
- 空间复杂度：$O(M)$，质数筛数组的空间

算法思路：

- 先用埃氏筛预处理所有质数
- 从左到右贪心处理：对每个 nums[i]，尽可能减去一个最大的质数 p（p < nums[i] - prev），使得结果尽可能小但仍大于前一个元素
