# [3194. 最小元素和最大元素的最小平均值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3194.%20%E6%9C%80%E5%B0%8F%E5%85%83%E7%B4%A0%E5%92%8C%E6%9C%80%E5%A4%A7%E5%85%83%E7%B4%A0%E7%9A%84%E6%9C%80%E5%B0%8F%E5%B9%B3%E5%9D%87%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-average-of-smallest-and-largest-elements/)

你有一个初始为空的浮点数数组 `averages`。另给你一个包含 `n` 个整数的数组 `nums`，其中 `n` 为偶数。

你需要重复以下步骤 `n / 2` 次：

- 从 `nums` 中移除 **最小** 的元素 `minElement` 和 **最大** 的元素 `maxElement`。
- 将 `(minElement + maxElement) / 2` 加入到 `averages` 中。

返回 `averages` 中的 **最小** 元素。

---

- **示例 1：**

**输入：** nums = [7,8,3,4,15,13,4,1]

**输出：** 5.5

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-13-15.png)

返回 averages 中最小的元素，即 5.5。

---

- **示例 2：**

**输入：** nums = [1,9,8,3,10,5]

**输出：** 5.5

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-13-34.png)

---

- **示例 3：**

**输入：** nums = [1,2,3,7,8,9]

**输出：** 5.0

**解释：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-13-48.png)

---

**提示：**

- `2 <= n == nums.length <= 50`
- `n` 为偶数。
- `1 <= nums[i] <= 50`

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
