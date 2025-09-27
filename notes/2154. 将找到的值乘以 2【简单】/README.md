# [2154. 将找到的值乘以 2【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2154.%20%E5%B0%86%E6%89%BE%E5%88%B0%E7%9A%84%E5%80%BC%E4%B9%98%E4%BB%A5%202%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/keep-multiplying-found-values-by-two/)

给你一个整数数组 `nums` ，另给你一个整数 `original` ，这是需要在 `nums` 中搜索的第一个数字。

接下来，你需要按下述步骤操作：

1. 如果在 `nums` 中找到 `original` ，将 `original` **乘以** 2 ，得到新 `original`（即，令 `original = 2 * original`）。
2. 否则，停止这一过程。
3. 只要能在数组中找到新 `original` ，就对新 `original` 继续 **重复** 这一过程**。**

返回 `original` 的 **最终** 值。

---

- **示例 1：**

```txt
输入：nums = [5,3,6,1,12], original = 3
输出：24
解释：
- 3 能在 nums 中找到。3 * 2 = 6 。
- 6 能在 nums 中找到。6 * 2 = 12 。
- 12 能在 nums 中找到。12 * 2 = 24 。
- 24 不能在 nums 中找到。因此，返回 24 。
```

- **示例 2：**

```txt
输入：nums = [2,7,9], original = 4
输出：4
解释：
- 4 不能在 nums 中找到。因此，返回 4 。
```

---

**提示：**

- `1 <= nums.length <= 1000`
- `1 <= nums[i], original <= 1000`

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
