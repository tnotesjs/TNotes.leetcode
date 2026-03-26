# [2789. 合并后数组中的最大元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2789.%20%E5%90%88%E5%B9%B6%E5%90%8E%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-element-in-an-array-after-merge-operations/)

给你一个下标从 0 开始、由正整数组成的数组 `nums`。

你可以在数组上执行下述操作 任意 次：

- 选中一个同时满足 `0 <= i < nums.length - 1` 和 `nums[i] <= nums[i + 1]` 的下标 `i`。将元素 `nums[i + 1]` 替换为 `nums[i] + nums[i + 1]`，并从数组中删除元素 `nums[i]`。

返回你可以从最终数组中获得的 最大 元素的值。

---

示例 1：

```txt
输入：nums = [2,3,7,9,3]
输出：21
解释：我们可以在数组上执行下述操作：
- 选中 i = 0，得到数组 nums = [5,7,9,3]。
- 选中 i = 1，得到数组 nums = [5,16,3]。
- 选中 i = 0，得到数组 nums = [21,3]。
最终数组中的最大元素是 21。可以证明我们无法获得更大的元素。
```

示例 2：

```txt
输入：nums = [5,3,3]
输出：11
解释：我们可以在数组上执行下述操作：
- 选中 i = 1，得到数组 nums = [5,6]。
- 选中 i = 0，得到数组 nums = [11]。
最终数组中只有一个元素，即 11。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`

## 2. 🎯 s.1 - 贪心（逆序遍历）

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，遍历一次数组
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 从右向左遍历，维护当前累积和 sum
- 若当前元素 $\leq$ sum，则可以合并，sum 累加当前元素
- 否则重置 sum 为当前元素
- 最终 sum 即为最大可能元素
