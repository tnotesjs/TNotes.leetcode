# [1814. 统计一个数组中好对子的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1814.%20%E7%BB%9F%E8%AE%A1%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E4%B8%AD%E5%A5%BD%E5%AF%B9%E5%AD%90%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-nice-pairs-in-an-array/)

给你一个数组 `nums`，数组中只包含非负整数。定义 `rev(x)` 的值为将整数 `x` 各个数字位反转得到的结果。比方说 `rev(123) = 321`， `rev(120) = 21`。我们称满足下面条件的下标对 `(i, j)` 是 好的 ：

- `0 <= i < j < nums.length`
- `nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])`

请你返回好下标对的数目。由于结果可能会很大，请将结果对 `10^9 + 7` 取余 后返回。

---

示例 1：

```txt
输入：nums = [42,11,1,97]
输出：2
解释：两个坐标对为：
 - (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121。
 - (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12。
```

示例 2：

```txt
输入：nums = [13,10,35,24,76]
输出：4
```

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，哈希表的空间

算法思路：

- rev(num) + num 相同的两个数可以组成“好对子”
- 用哈希表按 rev(num) + num 分组
- 每个组内的对数为 C(k, 2)
