# [2788. 按分隔符拆分字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2788.%20%E6%8C%89%E5%88%86%E9%9A%94%E7%AC%A6%E6%8B%86%E5%88%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/split-strings-by-separator/)

给你一个字符串数组 `words` 和一个字符 `separator` ，请你按 `separator` 拆分 `words` 中的每个字符串。

返回一个由拆分后的新字符串组成的字符串数组，不包括空字符串 。

---

- 注意
  - `separator` 用于决定拆分发生的位置，但它不包含在结果字符串中。
  - 拆分可能形成两个以上的字符串。
  - 结果字符串必须保持初始相同的先后顺序。

---

- 示例 1：

```txt
输入：words = ["one.two.three","four.five","six"], separator = "."
输出：["one","two","three","four","five","six"]
解释：在本示例中，我们进行下述拆分：

"one.two.three" 拆分为 "one", "two", "three"
"four.five" 拆分为 "four", "five"
"six" 拆分为 "six"

因此，结果数组为 ["one","two","three","four","five","six"] 。
```

- 示例 2：

```txt
输入：words = ["$easy$","$problem$"], separator = "$"
输出：["easy","problem"]
解释：在本示例中，我们进行下述拆分：

"$easy$" 拆分为 "easy"（不包括空字符串）
"$problem$" 拆分为 "problem"（不包括空字符串）

因此，结果数组为 ["easy","problem"] 。
```

- 示例 3：

```txt
输入：words = ["|||"], separator = "|"
输出：[]
解释：在本示例中，"|||" 的拆分结果将只包含一些空字符串，所以我们返回一个空数组 [] 。
```

---

提示：

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `words[i]` 中的字符要么是小写英文字母，要么就是字符串 `".,|$#@"` 中的字符（不包括引号）
- `separator` 是字符串 `".,|$#@"` 中的某个字符（不包括引号）

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
