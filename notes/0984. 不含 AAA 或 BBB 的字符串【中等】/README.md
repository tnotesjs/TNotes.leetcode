# [0984. 不含 AAA 或 BBB 的字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0984.%20%E4%B8%8D%E5%90%AB%20AAA%20%E6%88%96%20BBB%20%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/string-without-aaa-or-bbb/)

给定两个整数 `a` 和 `b` ，返回 任意 字符串 `s` ，要求满足：

- `s` 的长度为 `a + b`，且正好包含 `a` 个 `'a'` 字母与 `b` 个 `'b'` 字母；
- 子串 `'aaa'` 没有出现在 `s` 中；
- 子串 `'bbb'` 没有出现在 `s` 中。

---

- 示例 1：

```txt
输入：a = 1, b = 2
输出："abb"
解释："abb", "bab" 和 "bba" 都是正确答案。
```

- 示例 2：

```txt
输入：a = 4, b = 1
输出："aabaa"
```

---

提示：

- `0 <= a, b <= 100`
- 对于给定的 `a` 和 `b`，保证存在满足要求的 `s`

​​​

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
