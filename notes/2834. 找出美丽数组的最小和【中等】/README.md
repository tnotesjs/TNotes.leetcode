# [2834. 找出美丽数组的最小和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2834.%20%E6%89%BE%E5%87%BA%E7%BE%8E%E4%B8%BD%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-minimum-possible-sum-of-a-beautiful-array/)

给你两个正整数：`n` 和 `target` 。

如果数组 `nums` 满足下述条件，则称其为 **美丽数组** 。

- `nums.length == n`.
- `nums` 由两两互不相同的正整数组成。
- 在范围 `[0, n-1]` 内，**不存在** 两个 **不同** 下标 `i` 和 `j` ，使得 `nums[i] + nums[j] == target` 。

返回符合条件的美丽数组所可能具备的 **最小** 和，并对结果进行取模 `10^9 + 7`。

---

- **示例 1：**

```txt
输入：n = 2, target = 3
输出：4
解释：nums = [1,3] 是美丽数组。
- nums 的长度为 n = 2 。
- nums 由两两互不相同的正整数组成。
- 不存在两个不同下标 i 和 j ，使得 nums[i] + nums[j] == 3 。
可以证明 4 是符合条件的美丽数组所可能具备的最小和。
```

- **示例 2：**

```txt
输入：n = 3, target = 3
输出：8
解释：
nums = [1,3,4] 是美丽数组。
- nums 的长度为 n = 3 。
- nums 由两两互不相同的正整数组成。
- 不存在两个不同下标 i 和 j ，使得 nums[i] + nums[j] == 3 。
可以证明 8 是符合条件的美丽数组所可能具备的最小和。
```

- **示例 3：**

```txt
输入：n = 1, target = 1
输出：1
解释：nums = [1] 是美丽数组。
```

---

**提示：**

- `1 <= n <= 10^9`
- `1 <= target <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
