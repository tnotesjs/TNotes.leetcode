# [1957. 删除字符使字符串变好【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1957.%20%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%BD%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8F%98%E5%A5%BD%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-characters-to-make-fancy-string/)

一个字符串如果没有 三个连续 相同字符，那么它就是一个 好字符串。

给你一个字符串 `s` ，请你从 `s` 删除 最少 的字符，使它变成一个 好字符串。

请你返回删除后的字符串。题目数据保证答案总是 唯一的。

---

示例 1：

```txt
输入：s = "leeetcode"
输出："leetcode"
解释：
从第一组 'e' 里面删除一个 'e' ，得到 "leetcode"。
没有连续三个相同字符，所以返回 "leetcode"。
```

示例 2：

```txt
输入：s = "aaabaaaa"
输出："aabaa"
解释：
从第一组 'a' 里面删除一个 'a' ，得到 "aabaaaa"。
从第二组 'a' 里面删除两个 'a' ，得到 "aabaa"。
没有连续三个相同字符，所以返回 "aabaa"。
```

示例 3：

```txt
输入：s = "aab"
输出："aab"
解释：没有连续三个相同字符，所以返回 "aab"。
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
