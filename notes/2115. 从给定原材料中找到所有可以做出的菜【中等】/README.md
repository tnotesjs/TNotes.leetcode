# [2115. 从给定原材料中找到所有可以做出的菜【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2115.%20%E4%BB%8E%E7%BB%99%E5%AE%9A%E5%8E%9F%E6%9D%90%E6%96%99%E4%B8%AD%E6%89%BE%E5%88%B0%E6%89%80%E6%9C%89%E5%8F%AF%E4%BB%A5%E5%81%9A%E5%87%BA%E7%9A%84%E8%8F%9C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 迭代模拟](#2--s1---迭代模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-all-possible-recipes-from-given-supplies/)

你有 `n` 道不同菜的信息。给你一个字符串数组 `recipes` 和一个二维字符串数组 `ingredients`。第 `i` 道菜的名字为 `recipes[i]`，如果你有它 所有 的原材料 `ingredients[i]`，那么你可以 做出 这道菜。一份食谱也可以是 其它 食谱的原料，也就是说 `ingredients[i]` 可能包含 `recipes` 中另一个字符串。

同时给你一个字符串数组 `supplies`，它包含你初始时拥有的所有原材料，每一种原材料你都有无限多。

请你返回你可以做出的所有菜。你可以以 任意顺序 返回它们。

注意两道菜在它们的原材料中可能互相包含。

---

示例 1：

```txt
输入：recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
输出：["bread"]
解释：
我们可以做出 "bread"，因为我们有原材料 "yeast" 和 "flour"。
```

示例 2：

```txt
输入：recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
输出：["bread","sandwich"]
解释：
我们可以做出 "bread"，因为我们有原材料 "yeast" 和 "flour"。
我们可以做出 "sandwich"，因为我们有原材料 "meat" 且可以做出原材料 "bread"。
```

示例 3：

```txt
输入：recipes = ["bread","sandwich","burger"], ingredients = [["yeast","flour"],["bread","meat"],["sandwich","meat","bread"]], supplies = ["yeast","flour","meat"]
输出：["bread","sandwich","burger"]
解释：
我们可以做出 "bread"，因为我们有原材料 "yeast" 和 "flour"。
我们可以做出 "sandwich"，因为我们有原材料 "meat" 且可以做出原材料 "bread"。
我们可以做出 "burger"，因为我们有原材料 "meat" 且可以做出原材料 "bread" 和 "sandwich"。
```

示例 4：

```txt
输入：recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast"]
输出：[]
解释：
我们没法做出任何菜，因为我们只有原材料 "yeast"。
```

---

提示：

- `n == recipes.length == ingredients.length`
- `1 <= n <= 100`
- `1 <= ingredients[i].length, supplies.length <= 100`
- `1 <= recipes[i].length, ingredients[i][j].length, supplies[k].length <= 10`
- `recipes[i], ingredients[i][j]` 和 `supplies[k]` 只包含小写英文字母。
- 所有 `recipes` 和 `supplies` 中的值互不相同。
- `ingredients[i]` 中的字符串互不相同。

## 2. 🎯 s.1 - 迭代模拟

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2 \cdot m)$，其中 n 是菜谱数量，m 是平均原材料数量
- 空间复杂度：$O(n + s)$，其中 s 是初始原材料数量

算法思路：

- 将所有初始原材料放入集合 supplySet
- 反复遍历菜谱列表，如果某道菜的所有原材料都在集合中，则标记为已制作并加入集合
- 当一轮遍历中没有新菜被制作时停止，类似拓扑排序的迭代思路
