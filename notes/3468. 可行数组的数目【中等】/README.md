# [3468. 可行数组的数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3468.%20%E5%8F%AF%E8%A1%8C%E6%95%B0%E7%BB%84%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-number-of-copy-arrays/)

给你一个长度为 `n` 的数组 `original` 和一个长度为 `n x 2` 的二维数组 `bounds`，其中 `bounds[i] = [ui, vi]`。

你需要找到长度为 `n` 且满足以下条件的 **可能的** 数组 `copy` 的数量：

1. 对于 `1 <= i <= n - 1` ，都有 `(copy[i] - copy[i - 1]) == (original[i] - original[i - 1])` 。
2. 对于 `0 <= i <= n - 1` ，都有 `ui <= copy[i] <= vi` 。

返回满足这些条件的数组数目。

---

- **示例 1**

**输入：** original = [1,2,3,4], bounds = [[1,2],[2,3],[3,4],[4,5]]

**输出：** 2

**解释：**

可能的数组为：

- `[1, 2, 3, 4]`
- `[2, 3, 4, 5]`

---

- **示例 2**

**输入：** original = [1,2,3,4], bounds = [[1,10],[2,9],[3,8],[4,7]]

**输出：** 4

**解释：**

可能的数组为：

- `[1, 2, 3, 4]`
- `[2, 3, 4, 5]`
- `[3, 4, 5, 6]`
- `[4, 5, 6, 7]`

---

- **示例 3**

**输入：** original = [1,2,1,2], bounds = [[1,1],[2,3],[3,3],[2,3]]

**输出：** 0

**解释：**

没有可行的数组。

---

**提示：**

- `2 <= n == original.length <= 10^5`
- `1 <= original[i] <= 10^9`
- `bounds.length == n`
- `bounds[i].length == 2`
- `1 <= bounds[i][0] <= bounds[i][1] <= 10^9`

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
