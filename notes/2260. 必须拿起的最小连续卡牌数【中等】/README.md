# [2260. 必须拿起的最小连续卡牌数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2260.%20%E5%BF%85%E9%A1%BB%E6%8B%BF%E8%B5%B7%E7%9A%84%E6%9C%80%E5%B0%8F%E8%BF%9E%E7%BB%AD%E5%8D%A1%E7%89%8C%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-consecutive-cards-to-pick-up/)

给你一个整数数组 `cards`，其中 `cards[i]` 表示第 `i` 张卡牌的 值。如果两张卡牌的值相同，则认为这一对卡牌 匹配。

返回你必须拿起的最小连续卡牌数，以使在拿起的卡牌中有一对匹配的卡牌。如果无法得到一对匹配的卡牌，返回 `-1`。

---

示例 1：

```txt
输入：cards = [3,4,2,3,4,7]
输出：4
解释：拿起卡牌 [3,4,2,3] 将会包含一对值为 3 的匹配卡牌。注意，拿起 [4,2,3,4] 也是最优方案。
```

示例 2：

```txt
输入：cards = [1,0,5,3]
输出：-1
解释：无法找出含一对匹配卡牌的一组连续卡牌。
```

---

提示：

- `1 <= cards.length <= 10^5`
- `0 <= cards[i] <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
