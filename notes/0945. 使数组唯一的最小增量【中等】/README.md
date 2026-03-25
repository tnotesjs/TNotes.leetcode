# [0945. 使数组唯一的最小增量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0945.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E5%94%AF%E4%B8%80%E7%9A%84%E6%9C%80%E5%B0%8F%E5%A2%9E%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-increment-to-make-array-unique/)

给你一个整数数组 `nums`。每次 move 操作将会选择任意一个满足 `0 <= i < nums.length` 的下标 `i`，并将 `nums[i]` 递增 `1`。

返回使 `nums` 中的每个值都变成唯一的所需要的最少操作次数。

生成的测试用例保证答案在 32 位整数范围内。

---

示例 1：

```txt
输入：nums = [1,2,2]
输出：1
解释：经过一次 move 操作，数组将变为 [1, 2, 3]。
```

示例 2：

```txt
输入：nums = [3,2,1,2,1,7]
输出：6
解释：经过 6 次 move 操作，数组将变为 [3, 4, 1, 2, 5, 7]。
可以看出 5 次或 5 次以下的 move 操作是不能让数组的每个值唯一的。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`

## 2. 🎯 s.1 - 排序 + 贪心

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n)$，排序为主要开销
- 空间复杂度：$O(1)$，原地排序

算法思路：

- 排序后遍历数组，若当前元素不大于前一个元素，则将其增加到前一个元素 + 1
- 累加每次增加的差值即为最少操作次数
