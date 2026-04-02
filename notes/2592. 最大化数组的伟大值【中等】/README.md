# [2592. 最大化数组的伟大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2592.%20%E6%9C%80%E5%A4%A7%E5%8C%96%E6%95%B0%E7%BB%84%E7%9A%84%E4%BC%9F%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 双指针](#2--s1---排序--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-greatness-of-an-array/)

给你一个下标从 0 开始的整数数组 `nums`。你需要将 `nums` 重新排列成一个新的数组 `perm`。

定义 `nums` 的 伟大值 为满足 `0 <= i < nums.length` 且 `perm[i] > nums[i]` 的下标数目。

请你返回重新排列 `nums` 后的 最大 伟大值。

---

示例 1：

```txt
输入：nums = [1,3,5,2,1,3,1]
输出：4
解释：一个最优安排方案为 perm = [2,5,1,3,3,1,1]。
在下标为 0, 1, 3 和 4 处，都有 perm[i] > nums[i]。因此我们返回 4。
```

示例 2：

```txt
输入：nums = [1,2,3,4]
输出：3
解释：最优排列为 [2,3,4,1]。
在下标为 0, 1 和 2 处，都有 perm[i] > nums[i]。因此我们返回 3。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 排序 + 双指针

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \log N)$，排序的时间复杂度
- 空间复杂度：$O(\log N)$，排序的栈空间

算法思路：

- 排序后，用双指针贪心匹配：指针 i 指向当前需要被"击败"的元素，指针 j 遍历所有元素
- 当 `nums[j] > nums[i]` 时，成功配对，两个指针都前进；否则只有 j 前进
- 最终 i 的值即为最大伟大值（成功配对的数量）
