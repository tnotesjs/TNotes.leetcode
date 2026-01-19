# [1773. 统计匹配检索规则的物品数量【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1773.%20%E7%BB%9F%E8%AE%A1%E5%8C%B9%E9%85%8D%E6%A3%80%E7%B4%A2%E8%A7%84%E5%88%99%E7%9A%84%E7%89%A9%E5%93%81%E6%95%B0%E9%87%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 逐项匹配计数](#2--s1---逐项匹配计数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-items-matching-a-rule/)

给你一个数组 `items`，其中 `items[i] = [typei, colori, namei]`，描述第 `i` 件物品的类型、颜色以及名称。

另给你一条由两个字符串 `ruleKey` 和 `ruleValue` 表示的检索规则。

如果第 `i` 件物品能满足下述条件之一，则认为该物品与给定的检索规则 匹配 ：

- `ruleKey == "type"` 且 `ruleValue == typei`。
- `ruleKey == "color"` 且 `ruleValue == colori`。
- `ruleKey == "name"` 且 `ruleValue == namei`。

统计并返回 匹配检索规则的物品数量。

---

示例 1：

```txt
输入：items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "lenovo"],
  ["phone", "gold", "iphone"]
], ruleKey = "color", ruleValue = "silver"

输出：1

解释：
只有一件物品匹配检索规则，这件物品是 ["computer","silver","lenovo"]。
```

示例 2：

```txt
输入：items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"]
], ruleKey = "type", ruleValue = "phone"

输出：2

解释：
只有两件物品匹配检索规则，这两件物品分别是 ["phone","blue","pixel"] 和 ["phone","gold","iphone"]。

注意，["computer","silver","phone"] 未匹配检索规则。
```

---

提示：

- `1 <= items.length <= 10^4`
- `1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10`
- `ruleKey` 等于 `"type"`、`"color"` 或 `"name"`
- 所有字符串仅由小写字母组成

## 2. 🎯 s.1 - 逐项匹配计数

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，单次遍历 items
- 空间复杂度：$O(1)$

算法思路：

- 将 ruleKey 映射为索引（type/color/name → 0/1/2），遍历 items 对应位置与 ruleValue 比较，相等则计数。
