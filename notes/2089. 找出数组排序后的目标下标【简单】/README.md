# [2089. 找出数组排序后的目标下标【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2089.%20%E6%89%BE%E5%87%BA%E6%95%B0%E7%BB%84%E6%8E%92%E5%BA%8F%E5%90%8E%E7%9A%84%E7%9B%AE%E6%A0%87%E4%B8%8B%E6%A0%87%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-target-indices-after-sorting-array/)

给你一个下标从 **0** 开始的整数数组 `nums` 以及一个目标元素 `target` 。

**目标下标** 是一个满足 `nums[i] == target` 的下标 `i` 。

将 `nums` 按 **非递减** 顺序排序后，返回由 `nums` 中目标下标组成的列表。如果不存在目标下标，返回一个 **空** 列表。返回的列表必须按 **递增** 顺序排列。

---

- **示例 1：**

```txt
输入：nums = [1,2,5,2,3], target = 2
输出：[1,2]
解释：排序后，nums 变为 [1,2,2,3,5] 。
满足 nums[i] == 2 的下标是 1 和 2 。
```

- **示例 2：**

```txt
输入：nums = [1,2,5,2,3], target = 3
输出：[3]
解释：排序后，nums 变为 [1,2,2,3,5] 。
满足 nums[i] == 3 的下标是 3 。
```

- **示例 3：**

```txt
输入：nums = [1,2,5,2,3], target = 5
输出：[4]
解释：排序后，nums 变为 [1,2,2,3,5] 。
满足 nums[i] == 5 的下标是 4 。
```

- **示例 4：**

```txt
输入：nums = [1,2,5,2,3], target = 4
输出：[]
解释：nums 中不含值为 4 的元素。
```

---

**提示：**

- `1 <= nums.length <= 100`
- `1 <= nums[i], target <= 100`

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
