# [1674. 使数组互补的最少操作次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1674.%20%E4%BD%BF%E6%95%B0%E7%BB%84%E4%BA%92%E8%A1%A5%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-moves-to-make-array-complementary/)

给你一个长度为 偶数 `n` 的整数数组 `nums` 和一个整数 `limit`。每一次操作，你可以将 `nums` 中的任何整数替换为 `1` 到 `limit` 之间的另一个整数。

如果对于所有下标 `i`（下标从 `0` 开始），`nums[i] + nums[n - 1 - i]` 都等于同一个数，则数组 `nums` 是 互补的。例如，数组 `[1,2,3,4]` 是互补的，因为对于所有下标 `i`，`nums[i] + nums[n - 1 - i] = 5`。

返回使数组 互补 的 最少 操作次数。

---

示例 1：

```txt
输入：nums = [1,2,4,3], limit = 4
输出：1
解释：经过 1 次操作，你可以将数组 nums 变成 [1,2,2,3]（加粗元素是变更的数字）：
nums[0] + nums[3] = 1 + 3 = 4.
nums[1] + nums[2] = 2 + 2 = 4.
nums[2] + nums[1] = 2 + 2 = 4.
nums[3] + nums[0] = 3 + 1 = 4.
对于每个 i，nums[i] + nums[n-1-i] = 4，所以 nums 是互补的。
```

示例 2：

```txt
输入：nums = [1,2,2,1], limit = 2
输出：2
解释：经过 2 次操作，你可以将数组 nums 变成 [2,2,2,2]。你不能将任何数字变更为 3，因为 3 > limit。
```

示例 3：

```txt
输入：nums = [1,2,1,2], limit = 2
输出：0
解释：nums 已经是互补的。
```

---

提示：

- `n == nums.length`
- `2 <= n <= 10^5`
- `1 <= nums[i] <= limit <= 10^5`
- `n` 是偶数。

## 2. 🎯 s.1 - 差分数组

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + limit)$，其中 $n$ 是数组长度，$limit$ 是元素上界
- 空间复杂度：$O(limit)$，差分数组

算法思路：

- 对每对 (nums[i], nums[n-1-i])，分析目标和 T 时所需操作次数
- 使用差分数组标记不同 T 范围的操作次数变化：
  - 所有 T 默认 2 次操作，[min+1, max+limit] 减到 1 次，T = a+b 减到 0 次
- 扫描差分数组的前缀和，取最小值
