# [1662. 检查两个字符串数组是否相等【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1662.%20%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%BB%84%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-two-string-arrays-are-equivalent/)

给你两个字符串数组 `word1` 和 `word2` 。如果两个数组表示的字符串相同，返回 `true` ；否则，返回 `false` _。_

**数组表示的字符串** 是由数组中的所有元素 **按顺序** 连接形成的字符串。

---

- **示例 1：**

```txt
输入：word1 = ["ab", "c"], word2 = ["a", "bc"]
输出：true
解释：
word1 表示的字符串为 "ab" + "c" -> "abc"
word2 表示的字符串为 "a" + "bc" -> "abc"
两个字符串相同，返回 true
```

- **示例 2：**

```txt
输入：word1 = ["a", "cb"], word2 = ["ab", "c"]
输出：false
```

- **示例 3：**

```txt
输入：word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
输出：true
```

---

**提示：**

- `1 <= word1.length, word2.length <= 10^3`
- `1 <= word1[i].length, word2[i].length <= 10^3`
- `1 <= sum(word1[i].length), sum(word2[i].length) <= 10^3`
- `word1[i]` 和 `word2[i]` 由小写字母组成

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
