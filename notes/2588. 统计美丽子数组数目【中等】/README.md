# [2588. 统计美丽子数组数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2588.%20%E7%BB%9F%E8%AE%A1%E7%BE%8E%E4%B8%BD%E5%AD%90%E6%95%B0%E7%BB%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rearrange-array-to-maximize-prefix-score/)

给你一个下标从 0 开始的整数数组 `nums`。你可以将 `nums` 中的元素按 任意顺序 重排（包括给定顺序）。

令 `prefix` 为一个数组，它包含了 `nums` 重新排列后的前缀和。换句话说，`prefix[i]` 是 `nums` 重新排列后下标从 `0` 到 `i` 的元素之和。`nums` 的 分数 是 `prefix` 数组中正整数的个数。

返回可以得到的最大分数。

---

- 示例 1：

```txt
输入：nums = [2,-1,0,1,-3,3,-3]
输出：6
解释：数组重排为 nums = [2,3,1,-1,-3,0,-3]。
prefix = [2,5,6,5,2,2,-1] ，分数为 6。
可以证明 6 是能够得到的最大分数。
```

- 示例 2：

```txt
输入：nums = [-2,-3,0]
输出：0
解释：不管怎么重排数组得到的分数都是 0。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `-10^6 <= nums[i] <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
