# [2364. 统计坏数对的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2364.%20%E7%BB%9F%E8%AE%A1%E5%9D%8F%E6%95%B0%E5%AF%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-number-of-bad-pairs/)

给你一个下标从 0 开始的整数数组 `nums`。如果 `i < j` 且 `j - i != nums[j] - nums[i]`，那么我们称 `(i, j)` 是一个 坏数对。

请你返回 `nums` 中 坏数对 的总数目。

---

示例 1：

```txt
输入：nums = [4,1,3,3]
输出：5
解释：数对 (0, 1) 是坏数对，因为 1 - 0 != 1 - 4。
数对 (0, 2) 是坏数对，因为 2 - 0 != 3 - 4, 2 != -1。
数对 (0, 3) 是坏数对，因为 3 - 0 != 3 - 4, 3 != -1。
数对 (1, 2) 是坏数对，因为 2 - 1 != 3 - 1, 1 != 2。
数对 (2, 3) 是坏数对，因为 3 - 2 != 3 - 3, 1 != 0。
总共有 5 个坏数对，所以我们返回 5。
```

示例 2：

```txt
输入：nums = [1,2,3,4,5]
输出：0
解释：没有坏数对。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 哈希表 + 正难则反

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$，哈希表空间

算法思路：

- 坏数对条件 $j - i \neq nums[j] - nums[i]$ 等价于 $nums[j] - j \neq nums[i] - i$
- 用哈希表统计 $nums[i] - i$ 相同的「好数对」数量
- 总对数减去好数对数即为坏数对数
