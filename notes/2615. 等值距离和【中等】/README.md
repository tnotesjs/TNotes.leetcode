# [2615. 等值距离和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2615.%20%E7%AD%89%E5%80%BC%E8%B7%9D%E7%A6%BB%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-distances/)

给你一个下标从 0 开始的整数数组 `nums`。现有一个长度等于 `nums.length` 的数组 `arr`。对于满足 `nums[j] == nums[i]` 且 `j != i` 的所有 `j`，`arr[i]` 等于所有 `|i - j|` 之和。如果不存在这样的 `j`，则令 `arr[i]` 等于 `0`。

返回数组 `arr`。

---

示例 1：

```txt
输入：nums = [1,3,1,1,2]
输出：[5,0,3,4,0]
解释：
i = 0，nums[0] == nums[2] 且 nums[0] == nums[3]。因此，arr[0] = |0 - 2| + |0 - 3| = 5。
i = 1，arr[1] = 0 因为不存在值等于 3 的其他下标。
i = 2，nums[2] == nums[0] 且 nums[2] == nums[3]。因此，arr[2] = |2 - 0| + |2 - 3| = 3。
i = 3，nums[3] == nums[0] 且 nums[3] == nums[2]。因此，arr[3] = |3 - 0| + |3 - 2| = 4。
i = 4，arr[4] = 0 因为不存在值等于 2 的其他下标。
```

示例 2：

```txt
输入：nums = [0,5,3]
输出：[0,0,0]
解释：因为 nums 中的元素互不相同，对于所有 i，都有 arr[i] = 0。
```

---

提示：

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 分组 + 前缀和

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，其中 N 是数组长度
- 空间复杂度：$O(N)$，哈希表和前缀和数组

算法思路：

- 将相同值的元素的下标分组，组内计算每个下标到其他下标的距离和
- 利用前缀和优化：对于下标 indices[i]，左侧距离和 = idx _ i - pre[i]，右侧距离和 = (pre[m] - pre[i+1]) - idx _ (m - i - 1)
