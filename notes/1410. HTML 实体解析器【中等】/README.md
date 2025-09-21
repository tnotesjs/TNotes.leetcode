# [1410. HTML 实体解析器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1410.%20HTML%20%E5%AE%9E%E4%BD%93%E8%A7%A3%E6%9E%90%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/html-entity-parser/)

「HTML 实体解析器」 是一种特殊的解析器，它将 HTML 代码作为输入，并用字符本身替换掉所有这些特殊的字符实体。

HTML 里这些特殊字符和它们对应的字符实体包括：

- **双引号：**字符实体为 `&quot;` ，对应的字符是 `"` 。
- **单引号：**字符实体为 `&apos;` ，对应的字符是 `'` 。
- **与符号：**字符实体为 `&amp;` ，对应对的字符是 `&` 。
- **大于号：**字符实体为 `&gt;` ，对应的字符是 `>` 。
- **小于号：**字符实体为 `&lt;` ，对应的字符是 `<` 。
- **斜线号：**字符实体为 `&frasl;` ，对应的字符是 `/` 。

给你输入字符串 `text` ，请你实现一个 HTML 实体解析器，返回解析器解析后的结果。

---

- **示例 1：**

```txt
输入：text = "&amp; is an HTML entity but &ambassador; is not."
输出："& is an HTML entity but &ambassador; is not."
解释：解析器把字符实体 &amp; 用 & 替换
```

**示例 2：**

```txt
输入：text = "and I quote: &quot;...&quot;"
输出："and I quote: \"...\""
```

- **示例 3：**

```txt
输入：text = "Stay home! Practice on Leetcode :)"
输出："Stay home! Practice on Leetcode :)"
```

- **示例 4：**

```txt
输入：text = "x &gt; y &amp;&amp; x &lt; y is always false"
输出："x > y && x < y is always false"
```

- **示例 5：**

```txt
输入：text = "leetcode.com&frasl;problemset&frasl;all"
输出："leetcode.com/problemset/all"
```

---

**提示：**

- `1 <= text.length <= 10^5`
- 字符串可能包含 256 个 ASCII 字符中的任意字符。

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
