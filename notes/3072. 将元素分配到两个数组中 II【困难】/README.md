# [3072. 将元素分配到两个数组中 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3072.%20%E5%B0%86%E5%85%83%E7%B4%A0%E5%88%86%E9%85%8D%E5%88%B0%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E4%B8%AD%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/distribute-elements-into-two-arrays-ii/)

给你一个下标从 **1** 开始、长度为 `n` 的整数数组 `nums` 。

现定义函数 `greaterCount` ，使得 `greaterCount(arr, val)` 返回数组 `arr` 中 **严格大于** `val` 的元素数量。

你需要使用 `n` 次操作，将 `nums` 的所有元素分配到两个数组 `arr1` 和 `arr2` 中。在第一次操作中，将 `nums[1]` 追加到 `arr1` 。在第二次操作中，将 `nums[2]` 追加到 `arr2` 。之后，在第 `i` 次操作中：

- 如果 `greaterCount(arr1, nums[i]) > greaterCount(arr2, nums[i])` ，将 `nums[i]` 追加到 `arr1` 。
- 如果 `greaterCount(arr1, nums[i]) < greaterCount(arr2, nums[i])` ，将 `nums[i]` 追加到 `arr2` 。
- 如果 `greaterCount(arr1, nums[i]) == greaterCount(arr2, nums[i])` ，将 `nums[i]` 追加到元素数量较少的数组中。
- 如果仍然相等，那么将 `nums[i]` 追加到 `arr1` 。

连接数组 `arr1` 和 `arr2` 形成数组 `result` 。例如，如果 `arr1 == [1,2,3]` 且 `arr2 == [4,5,6]` ，那么 `result = [1,2,3,4,5,6]` 。

返回整数数组 `result` 。

---

- **示例 1：**

```txt
输入：nums = [2,1,3,3]
输出：[2,3,1,3]

解释：
在前两次操作后，arr1 = [2] ，arr2 = [1] 。
在第 3 次操作中，两个数组中大于 3 的元素数量都是零，并且长度相等，因此，将 nums[3] 追加到 arr1 。
在第 4 次操作中，两个数组中大于 3 的元素数量都是零，但 arr2 的长度较小，因此，将 nums[4] 追加到 arr2 。
在 4 次操作后，arr1 = [2,3] ，arr2 = [1,3] 。
因此，连接形成的数组 result 是 [2,3,1,3] 。
```

- **示例 2：**

```txt
输入：nums = [5,14,3,1,2]
输出：[5,3,1,2,14]

解释：
在前两次操作后，arr1 = [5] ，arr2 = [14] 。
在第 3 次操作中，两个数组中大于 3 的元素数量都是一，并且长度相等，因此，将 nums[3] 追加到 arr1 。
在第 4 次操作中，arr1 中大于 1 的元素数量大于 arr2 中的数量（2 > 1），因此，将 nums[4] 追加到 arr1 。
在第 5 次操作中，arr1 中大于 2 的元素数量大于 arr2 中的数量（2 > 1），因此，将 nums[5] 追加到 arr1 。
在 5 次操作后，arr1 = [5,3,1,2] ，arr2 = [14] 。
因此，连接形成的数组 result 是 [5,3,1,2,14] 。
```

- **示例 3：**

```txt
输入：nums = [3,3,3,3]
输出：[3,3,3,3]

解释：
在 4 次操作后，arr1 = [3,3] ，arr2 = [3,3] 。
因此，连接形成的数组 result 是 [3,3,3,3] 。
```

---

**提示：**

- `3 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`

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
