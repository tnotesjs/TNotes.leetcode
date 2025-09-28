# [2903. 找出满足差值条件的下标 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2903.%20%E6%89%BE%E5%87%BA%E6%BB%A1%E8%B6%B3%E5%B7%AE%E5%80%BC%E6%9D%A1%E4%BB%B6%E7%9A%84%E4%B8%8B%E6%A0%87%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-indices-with-index-and-value-difference-i/)

给你一个下标从 **0** 开始、长度为 `n` 的整数数组 `nums` ，以及整数 `indexDifference` 和整数 `valueDifference` 。

你的任务是从范围 `[0, n - 1]` 内找出 **2** 个满足下述所有条件的下标 `i` 和 `j` ：

- `abs(i - j) >= indexDifference` 且
- `abs(nums[i] - nums[j]) >= valueDifference`

返回整数数组 `answer`。如果存在满足题目要求的两个下标，则 `answer = [i, j]` ；否则，`answer = [-1, -1]` 。如果存在多组可供选择的下标对，只需要返回其中任意一组即可。

---

**注意：** `i` 和 `j` 可能 **相等** 。

---

- **示例 1：**

```txt
输入：nums = [5,1,4,1], indexDifference = 2, valueDifference = 4
输出：[0,3]
解释：在示例中，可以选择 i = 0 和 j = 3 。
abs(0 - 3) >= 2 且 abs(nums[0] - nums[3]) >= 4 。
因此，[0,3] 是一个符合题目要求的答案。
[3,0] 也是符合题目要求的答案。
```

- **示例 2：**

```txt
输入：nums = [2,1], indexDifference = 0, valueDifference = 0
输出：[0,0]
解释：
在示例中，可以选择 i = 0 和 j = 0 。
abs(0 - 0) >= 0 且 abs(nums[0] - nums[0]) >= 0 。
因此，[0,0] 是一个符合题目要求的答案。
[0,1]、[1,0] 和 [1,1] 也是符合题目要求的答案。
```

- **示例 3：**

```txt
输入：nums = [1,2,3], indexDifference = 2, valueDifference = 4
输出：[-1,-1]
解释：在示例中，可以证明无法找出 2 个满足所有条件的下标。
因此，返回 [-1,-1] 。
```

---

**提示：**

- `1 <= n == nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= indexDifference <= 100`
- `0 <= valueDifference <= 50`

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
