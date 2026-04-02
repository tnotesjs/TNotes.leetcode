# [1268. 搜索推荐系统【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1268.%20%E6%90%9C%E7%B4%A2%E6%8E%A8%E8%8D%90%E7%B3%BB%E7%BB%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 双指针](#2--s1---排序--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/search-suggestions-system/)

给你一个产品数组 `products` 和一个字符串 `searchWord`，`products` 数组中每个产品都是一个字符串。

请你设计一个推荐系统，在依次输入单词 `searchWord` 的每一个字母后，推荐 `products` 数组中前缀与 `searchWord` 相同的最多三个产品。如果前缀相同的可推荐产品超过三个，请按字典序返回最小的三个。

请你以二维列表的形式，返回在输入 `searchWord` 每个字母后相应的推荐产品的列表。

---

示例 1：

```txt
输入：products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
输出：[
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
解释：按字典序排序后的产品列表是 ["mobile","moneypot","monitor","mouse","mousepad"]
输入 m 和 mo，由于所有产品的前缀都相同，所以系统返回字典序最小的三个产品 ["mobile","moneypot","monitor"]
输入 mou， mous 和 mouse 后系统都返回 ["mouse","mousepad"]
```

示例 2：

```txt
输入：products = ["havana"], searchWord = "havana"
输出：[["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
```

示例 3：

```txt
输入：products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
输出：[["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
```

示例 4：

```txt
输入：products = ["havana"], searchWord = "tatiana"
输出：[[],[],[],[],[],[],[]]
```

---

提示：

- `1 <= products.length <= 1000`
- `1 <= Σ products[i].length <= 2 * 10^4`
- `products[i]` 中所有的字符都是小写英文字母。
- `1 <= searchWord.length <= 1000`
- `searchWord` 中所有字符都是小写英文字母。

## 2. 🎯 s.1 - 排序 + 双指针

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log n + m \times n)$，其中 $n$ 是产品数量，$m$ 是搜索词长度
- 空间复杂度：$O(1)$，不计排序和结果数组

算法思路：

- 先对产品按字典序排序
- 维护左右指针表示当前匹配范围，每输入一个字符就收缩范围
- 取范围内前 3 个产品作为推荐结果
