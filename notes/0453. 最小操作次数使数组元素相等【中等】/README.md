# [0453. 最小操作次数使数组元素相等【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0453.%20%E6%9C%80%E5%B0%8F%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E4%BD%BF%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E7%9B%B8%E7%AD%89%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 数学](#2--s1---数学)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-moves-to-equal-array-elements/)

给你一个长度为 `n` 的整数数组，每次操作将会使 `n - 1` 个元素增加 `1`。返回让数组所有元素相等的最小操作次数。

---

示例 1：

```txt
输入：nums = [1,2,3]
输出：3
解释：
只需要3次操作（注意每次操作会增加两个元素的值）：
[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
```

示例 2：

```txt
输入：nums = [1,1,1]
输出：0
```

---

提示：

- `n == nums.length`
- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- 答案保证符合 32-bit 整数

## 2. 🎯 s.1 - 数学

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$
- 空间复杂度：$O(1)$

算法思路：

- 每次对 $n-1$ 个元素加 1 等价于对 1 个元素减 1
- 因此答案为 $\sum(nums[i] - \min(nums))$
