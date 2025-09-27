# [2555. 两个线段获得的最多奖品【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2555.%20%E4%B8%A4%E4%B8%AA%E7%BA%BF%E6%AE%B5%E8%8E%B7%E5%BE%97%E7%9A%84%E6%9C%80%E5%A4%9A%E5%A5%96%E5%93%81%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-win-from-two-segments/)

在 **X 轴**  上有一些奖品。给你一个整数数组  `prizePositions` ，它按照 **非递减**  顺序排列，其中  `prizePositions[i]`  是第  `i`  件奖品的位置。数轴上一个位置可能会有多件奖品。再给你一个整数  `k` 。

你可以同时选择两个端点为整数的线段。每个线段的长度都必须是 `k` 。你可以获得位置在任一线段上的所有奖品（包括线段的两个端点）。注意，两个线段可能会有相交。

- 比方说  `k = 2` ，你可以选择线段  `[1, 3]` 和  `[2, 4]` ，你可以获得满足  `1 <= prizePositions[i] <= 3` 或者  `2 <= prizePositions[i] <= 4`  的所有奖品 i 。

请你返回在选择两个最优线段的前提下，可以获得的 **最多**  奖品数目。

---

- **示例 1：**

```txt
输入：prizePositions = [1,1,2,2,3,3,5], k = 2
输出：7
解释：这个例子中，你可以选择线段 [1, 3] 和 [3, 5] ，获得 7 个奖品。
```

- **示例 2：**

```txt
输入：prizePositions = [1,2,3,4], k = 0
输出：2
解释：这个例子中，一个选择是选择线段 [3, 3] 和 [4, 4] ，获得 2 个奖品。
```

---

**提示：**

- `1 <= prizePositions.length <= 10^5`
- `1 <= prizePositions[i] <= 10^9`
- `0 <= k <= 10^9`
- `prizePositions`  有序非递减。

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
