# [0757. 设置交集大小至少为2【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0757.%20%E8%AE%BE%E7%BD%AE%E4%BA%A4%E9%9B%86%E5%A4%A7%E5%B0%8F%E8%87%B3%E5%B0%91%E4%B8%BA2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/set-intersection-size-at-least-two/)

给你一个二维整数数组 `intervals` ，其中 `intervals[i] = [starti, endi]` 表示从 `starti` 到 `endi` 的所有整数，包括 `starti` 和 `endi` 。

**包含集合** 是一个名为 `nums` 的数组，并满足 `intervals` 中的每个区间都 **至少** 有 **两个** 整数在 `nums` 中。

- 例如，如果 `intervals = [[1,3], [3,7], [8,9]]` ，那么 `[1,2,4,7,8,9]` 和 `[2,3,4,8,9]` 都符合 **包含集合** 的定义。

返回包含集合可能的最小大小。

---

- **示例 1：**

```txt
输入：intervals = [[1,3],[3,7],[8,9]]
输出：5
解释：nums = [2, 3, 4, 8, 9].
可以证明不存在元素数量为 4 的包含集合。
```

- **示例 2：**

```txt
输入：intervals = [[1,3],[1,4],[2,5],[3,5]]
输出：3
解释：nums = [2, 3, 4].
可以证明不存在元素数量为 2 的包含集合。
```

- **示例 3：**

```txt
输入：intervals = [[1,2],[2,3],[2,4],[4,5]]
输出：5
解释：nums = [1, 2, 3, 4, 5].
可以证明不存在元素数量为 4 的包含集合。
```

---

**提示：**

- `1 <= intervals.length <= 3000`
- `intervals[i].length == 2`
- `0 <= starti < endi <= 10^8`

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
