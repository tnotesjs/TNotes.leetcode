# [1996. 游戏中弱角色的数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1996.%20%E6%B8%B8%E6%88%8F%E4%B8%AD%E5%BC%B1%E8%A7%92%E8%89%B2%E7%9A%84%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/the-number-of-weak-characters-in-the-game/)

你正在参加一个多角色游戏，每个角色都有两个主要属性：攻击 和 防御。给你一个二维整数数组 `properties`，其中 `properties[i] = [attacki, defensei]` 表示游戏中第 `i` 个角色的属性。

如果存在一个其他角色的攻击和防御等级 都严格高于 该角色的攻击和防御等级，则认为该角色为 弱角色。更正式地，如果认为角色 `i` 弱于 存在的另一个角色 `j`，那么 `attackj > attacki` 且 `defensej > defensei`。

返回 弱角色 的数量。

---

示例 1：

```txt
输入：properties = [[5,5],[6,3],[3,6]]
输出：0
解释：不存在攻击和防御都严格高于其他角色的角色。
```

示例 2：

```txt
输入：properties = [[2,2],[3,3]]
输出：1
解释：第一个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。
```

示例 3：

```txt
输入：properties = [[1,5],[10,4],[4,3]]
输出：1
解释：第三个角色是弱角色，因为第二个角色的攻击和防御严格大于该角色。
```

---

提示：

- `2 <= properties.length <= 10^5`
- `properties[i].length == 2`
- `1 <= attacki, defensei <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
