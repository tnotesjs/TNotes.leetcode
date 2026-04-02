# [2598. 执行操作后的最大 MEX【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2598.%20%E6%89%A7%E8%A1%8C%E6%93%8D%E4%BD%9C%E5%90%8E%E7%9A%84%E6%9C%80%E5%A4%A7%20MEX%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心 + 取模](#2--s1---贪心--取模)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-missing-non-negative-integer-after-operations/)

给你一个下标从 0 开始的整数数组 `nums` 和一个整数 `value`。

在一步操作中，你可以对 `nums` 中的任一元素加上或减去 `value`。

- 例如，如果 `nums = [1,2,3]` 且 `value = 2`，你可以选择 `nums[0]` 减去 `value`，得到 `nums = [-1,2,3]`。

数组的 MEX (minimum excluded) 是指其中数组中缺失的最小非负整数。

- 例如，`[-1,2,3]` 的 MEX 是 `0`，而 `[1,0,3]` 的 MEX 是 `2`。

返回在执行上述操作 任意次 后，`nums` 的最大 MEX _。_

---

示例 1：

```txt
输入：nums = [1,-10,7,13,6,8], value = 5
输出：4
解释：执行下述操作可以得到这一结果：
- nums[1] 加上 value 两次，nums = [1,0,7,13,6,8]
- nums[2] 减去 value 一次，nums = [1,0,2,13,6,8]
- nums[3] 减去 value 两次，nums = [1,0,2,3,6,8]
nums 的 MEX 是 4。可以证明 4 是可以取到的最大 MEX。
```

---

示例 2：

```txt
输入：nums = [1,-10,7,13,6,8], value = 7
输出：2
解释：执行下述操作可以得到这一结果：
- nums[2] 减去 value 一次，nums = [1,-10,0,13,6,8]
nums 的 MEX 是 2。可以证明 2 是可以取到的最大 MEX。
```

---

提示：

- `1 <= nums.length, value <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 贪心 + 取模

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，其中 N 是数组长度
- 空间复杂度：$O(V)$，其中 V 是 value 的大小

算法思路：

- 对每个 nums[i] 可以加减任意次 value，所以 nums[i] 可以变成任何与它模 value 同余的非负整数
- 统计每个余数的出现次数，然后从 0 开始枚举 mex，若余数 mex % value 还有剩余名额则消耗一个，否则返回 mex
