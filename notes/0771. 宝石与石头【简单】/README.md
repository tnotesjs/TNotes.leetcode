# [0771. 宝石与石头【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0771.%20%E5%AE%9D%E7%9F%B3%E4%B8%8E%E7%9F%B3%E5%A4%B4%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🫧 评价](#2--评价)
- [3. 🎯 s.1 - 哈希表](#3--s1---哈希表)
- [4. 🎯 s.2 - 暴力枚举](#4--s2---暴力枚举)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/jewels-and-stones/)

---

- 给你一个字符串 `jewels` 代表石头中宝石的类型，另有一个字符串 `stones` 代表你拥有的石头。
- `stones` 中每个字符代表了一种你拥有的石头的类型，你想知道你拥有的石头中有多少是宝石。
- 字母区分大小写，因此 `"a"` 和 `"A"` 是不同类型的石头。

---

- **示例 1：**

```txt
输入：jewels = "aA", stones = "aAAbbbb"
输出：3
```

---

- **示例 2：**

```txt
输入：jewels = "z", stones = "ZZ"
输出：0
```

---

**提示：**

- `1 <= jewels.length, stones.length <= 50`
- `jewels` 和 `stones` 仅由英文字母组成
- `jewels` 中的所有字符都是 **唯一的**

## 2. 🫧 评价

- 推荐使用解法一，它的时间复杂度更优，特别是当 `jewels` 和 `stones` 字符串较长时，性能差异会很明显。

## 3. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(m + n)$，其中 m 是 `jewels` 字符串的长度，n 是 `stones` 字符串的长度
- 空间复杂度：$O(m)$，需要额外的 Set 存储宝石类型

## 4. 🎯 s.2 - 暴力枚举

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(m \times n)$，其中 m 是 `jewels` 字符串的长度，n 是 `stones` 字符串的长度
- 空间复杂度：$O(1)$，只使用了常数个额外变量
