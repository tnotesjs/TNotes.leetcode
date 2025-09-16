# [0896. 单调数列【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0896.%20%E5%8D%95%E8%B0%83%E6%95%B0%E5%88%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/monotonic-array/)

如果数组是单调递增或单调递减的，那么它是 **单调** _的_。

如果对于所有 `i <= j`，`nums[i] <= nums[j]`，那么数组 `nums` 是单调递增的。 如果对于所有 `i <= j`，`nums[i] >= nums[j]`，那么数组 `nums` 是单调递减的。

当给定的数组 `nums` 是单调数组时返回 `true`，否则返回 `false`。

---

- **示例 1：**

```txt
输入：nums = [1,2,2,3]
输出：true
```

- **示例 2：**

```txt
输入：nums = [6,5,4,4]
输出：true
```

- **示例 3：**

```txt
输入：nums = [1,3,2]
输出：false
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`

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
