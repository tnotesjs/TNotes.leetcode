# [2155. 分组得分最高的所有下标【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2155.%20%E5%88%86%E7%BB%84%E5%BE%97%E5%88%86%E6%9C%80%E9%AB%98%E7%9A%84%E6%89%80%E6%9C%89%E4%B8%8B%E6%A0%87%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/all-divisions-with-the-highest-score-of-a-binary-array/)

给你一个下标从 0 开始的二进制数组 `nums`，数组长度为 `n`。`nums` 可以按下标 `i`（ `0 <= i <= n` ）拆分成两个数组（可能为空）：`numsleft` 和 `numsright`。

- `numsleft` 包含 `nums` 中从下标 `0` 到 `i - 1` 的所有元素（包括 `0` 和 `i - 1` ），而 `numsright` 包含 `nums` 中从下标 `i` 到 `n - 1` 的所有元素（包括 `i` 和 `n - 1` ）。
- 如果 `i == 0`，`numsleft` 为 空，而 `numsright` 将包含 `nums` 中的所有元素。
- 如果 `i == n`，`numsleft` 将包含 `nums` 中的所有元素，而 `numsright` 为 空。

下标 `i` 的 分组得分 为 `numsleft` 中 `0` 的个数和 `numsright` 中 `1` 的个数之 和。

返回 分组得分 最高 的 所有不同下标。你可以按 任意顺序 返回答案。

---

示例 1：

```txt
输入：nums = [0,0,1,0]
输出：[2,4]
解释：按下标分组
- 0 ：numsleft 为 []。numsright 为 [0,0,1,0]。得分为 0 + 1 = 1。
- 1 ：numsleft 为 [0]。numsright 为 [0,1,0]。得分为 1 + 1 = 2。
- 2 ：numsleft 为 [0,0]。numsright 为 [1,0]。得分为 2 + 1 = 3。
- 3 ：numsleft 为 [0,0,1]。numsright 为 [0]。得分为 2 + 0 = 2。
- 4 ：numsleft 为 [0,0,1,0]。numsright 为 []。得分为 3 + 0 = 3。
下标 2 和 4 都可以得到最高的分组得分 3。
注意，答案 [4,2] 也被视为正确答案。
```

示例 2：

```txt
输入：nums = [0,0,0]
输出：[3]
解释：按下标分组
- 0 ：numsleft 为 []。numsright 为 [0,0,0]。得分为 0 + 0 = 0。
- 1 ：numsleft 为 [0]。numsright 为 [0,0]。得分为 1 + 0 = 1。
- 2 ：numsleft 为 [0,0]。numsright 为 [0]。得分为 2 + 0 = 2。
- 3 ：numsleft 为 [0,0,0]。numsright 为 []。得分为 3 + 0 = 3。
只有下标 3 可以得到最高的分组得分 3。
```

示例 3：

```txt
输入：nums = [1,1]
输出：[0]
解释：按下标分组
- 0 ：numsleft 为 []。numsright 为 [1,1]。得分为 0 + 2 = 2。
- 1 ：numsleft 为 [1]。numsright 为 [1]。得分为 0 + 1 = 1。
- 2 ：numsleft 为 [1,1]。numsright 为 []。得分为 0 + 0 = 0。
只有下标 0 可以得到最高的分组得分 2。
```

---

提示：

- `n == nums.length`
- `1 <= n <= 10^5`
- `nums[i]` 为 `0` 或 `1`

## 2. 🎯 s.1 - 前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(1)$，不计返回值的额外空间

算法思路：

- 先统计数组中 1 的总数 `totalOnes`，然后从左到右遍历
- 在位置 $i$ 处，左边 0 的个数加上右边 1 的个数即为当前分组得分
- 遍历过程中维护当前最高得分和对应下标集合
