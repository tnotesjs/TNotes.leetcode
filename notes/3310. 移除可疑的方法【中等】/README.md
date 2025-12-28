# [3310. 移除可疑的方法【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3310.%20%E7%A7%BB%E9%99%A4%E5%8F%AF%E7%96%91%E7%9A%84%E6%96%B9%E6%B3%95%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-methods-from-project/)

你正在维护一个项目，该项目有 `n` 个方法，编号从 `0` 到 `n - 1`。

给你两个整数 `n` 和 `k`，以及一个二维整数数组 `invocations`，其中 `invocations[i] = [ai, bi]` 表示方法 `ai` 调用了方法 `bi`。

已知如果方法 `k` 存在一个已知的 bug。那么方法 `k` 以及它直接或间接调用的任何方法都被视为 可疑方法 ，我们需要从项目中移除这些方法。

只有当一组方法没有被这组之外的任何方法调用时，这组方法才能被移除。

返回一个数组，包含移除所有 可疑方法 后剩下的所有方法。你可以以任意顺序返回答案。如果无法移除 所有 可疑方法，则 不 移除任何方法。

---

示例 1：

输入: n = 4, k = 1, invocations = [[1,2],[0,1],[3,2]]

输出: [0,1,2,3]

解释:

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-05-10.png)

方法 2 和方法 1 是可疑方法，但它们分别直接被方法 3 和方法 0 调用。由于方法 3 和方法 0 不是可疑方法，我们无法移除任何方法，故返回所有方法。

---

示例 2：

输入: n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]

输出: [3,4]

解释:

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-05-15.png)

方法 0、方法 1 和方法 2 是可疑方法，且没有被任何其他方法直接调用。我们可以移除它们。

---

示例 3：

输入: n = 3, k = 2, invocations = [[1,2],[0,1],[2,0]]

输出: []

解释:

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-21-05-22.png)

所有方法都是可疑方法。我们可以移除它们。

---

提示：

- `1 <= n <= 10^5`
- `0 <= k <= n - 1`
- `0 <= invocations.length <= 2 * 10^5`
- `invocations[i] == [ai, bi]`
- `0 <= ai, bi <= n - 1`
- `ai != bi`
- `invocations[i] != invocations[j]`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
