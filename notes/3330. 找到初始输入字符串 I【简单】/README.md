# [3330. 找到初始输入字符串 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3330.%20%E6%89%BE%E5%88%B0%E5%88%9D%E5%A7%8B%E8%BE%93%E5%85%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-original-typed-string-i/)

Alice 正在她的电脑上输入一个字符串。但是她打字技术比较笨拙，她 **可能** 在一个按键上按太久，导致一个字符被输入 **多次** 。

尽管 Alice 尽可能集中注意力，她仍然可能会犯错 **至多** 一次。

给你一个字符串 `word` ，它表示 **最终** 显示在 Alice 显示屏上的结果。

请你返回 Alice 一开始可能想要输入字符串的总方案数。

---

- **示例 1：**

**输入：** word = "abbcccc"

**输出：** 5

**解释：**

可能的字符串包括：`"abbcccc"` ，`"abbccc"` ，`"abbcc"` ，`"abbc"` 和 `"abcccc"` 。

---

- **示例 2：**

**输入：** word = "abcd"

**输出：** 1

**解释：**

唯一可能的字符串是 `"abcd"` 。

---

- **示例 3：**

**输入：** word = "aaaa"

**输出：** 4

---

**提示：**

- `1 <= word.length <= 100`
- `word` 只包含小写英文字母。

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
