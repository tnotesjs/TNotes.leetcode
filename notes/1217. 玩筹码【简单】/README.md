# [1217. 玩筹码【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1217.%20%E7%8E%A9%E7%AD%B9%E7%A0%81%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 奇偶分组](#2--s1---奇偶分组)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position/)

有 `n` 个筹码。第 `i` 个筹码的位置是 `position[i]`。

我们需要把所有筹码移到同一个位置。在一步中，我们可以将第 `i` 个筹码的位置从 `position[i]` 改变为:

- `position[i] + 2` 或 `position[i] - 2`，此时 `cost = 0`
- `position[i] + 1` 或 `position[i] - 1`，此时 `cost = 1`

返回将所有筹码移动到同一位置上所需要的最小代价。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-19-41-48.png)

```txt
输入：position = [1, 2, 3]
输出：1
```

解释：

- 第一步：将位置 3 的筹码移动到位置 1，成本为 0。
- 第二步：将位置 2 的筹码移动到位置 1，成本为 1。
- 总成本是 1。

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-19-41-56.png)

```txt
输入：position = [2, 2, 2, 3, 3]
输出：2
```

解释：我们可以把位置 3 的两个筹码移到位置 2。每一步的成本为 1。总成本 = 2。

---

示例 3：

```txt
输入：position = [1, 1000000000]
输出：1
```

---

提示：

- `1 <= position.length <= 100`
- `1 <= position[i] <= 10^9`

## 2. 🎯 s.1 - 奇偶分组

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，单次遍历统计奇偶数量
- 空间复杂度：$O(1)$，仅常数计数器

算法思路：

- 同奇偶位之间移动步长为 2，成本为 0
- 跨奇偶需成本 1
- 统计偶数位筹码数 `even` 与奇数位筹码数 `odd`，将少的一侧移到另一侧成本最小，即 `min(even, odd)`
