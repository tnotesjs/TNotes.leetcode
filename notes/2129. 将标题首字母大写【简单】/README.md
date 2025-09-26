# [2129. 将标题首字母大写【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2129.%20%E5%B0%86%E6%A0%87%E9%A2%98%E9%A6%96%E5%AD%97%E6%AF%8D%E5%A4%A7%E5%86%99%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/capitalize-the-title/)

给你一个字符串 `title` ，它由单个空格连接一个或多个单词组成，每个单词都只包含英文字母。请你按以下规则将每个单词的首字母 **大写** ：

- 如果单词的长度为 `1` 或者 `2` ，所有字母变成小写。
- 否则，将单词首字母大写，剩余字母变成小写。

请你返回 **大写后** 的 `title` 。

---

- **示例 1：**

```txt
输入：title = "capiTalIze tHe titLe"
输出："Capitalize The Title"
解释：
由于所有单词的长度都至少为 3 ，将每个单词首字母大写，剩余字母变为小写。
```

- **示例 2：**

```txt
输入：title = "First leTTeR of EACH Word"
输出："First Letter of Each Word"
解释：
单词 "of" 长度为 2 ，所以它保持完全小写。
其他单词长度都至少为 3 ，所以其他单词首字母大写，剩余字母小写。
```

- **示例 3：**

```txt
输入：title = "i lOve leetcode"
输出："i Love Leetcode"
解释：
单词 "i" 长度为 1 ，所以它保留小写。
其他单词长度都至少为 3 ，所以其他单词首字母大写，剩余字母小写。
```

---

**提示：**

- `1 <= title.length <= 100`
- `title` 由单个空格隔开的单词组成，且不含有任何前导或后缀空格。
- 每个单词由大写和小写英文字母组成，且都是 **非空** 的。

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
