# [2490. 回环句【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2490.%20%E5%9B%9E%E7%8E%AF%E5%8F%A5%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/circular-sentence/)

句子 是由单个空格分隔的一组单词，且不含前导或尾随空格。

- 例如，`"Hello World"`、`"HELLO"`、`"hello world hello world"` 都是符合要求的句子。

单词 仅 由大写和小写英文字母组成。且大写和小写字母会视作不同字符。

如果句子满足下述全部条件，则认为它是一个 回环句 ：

- 句子中每个单词的最后一个字符等于下一个单词的第一个字符。
- 最后一个单词的最后一个字符和第一个单词的第一个字符相等。

例如，`"leetcode exercises sound delightful"`、`"eetcode"`、`"leetcode eats soul"` 都是回环句。然而，`"Leetcode is cool"`、`"happy Leetcode"`、`"Leetcode"` 和 `"I like Leetcode"` 都 不 是回环句。

给你一个字符串 `sentence` ，请你判断它是不是一个回环句。如果是，返回 `true` ；否则，返回 `false` 。

---

- 示例 1：

```txt
输入：sentence = "leetcode exercises sound delightful"
输出：true
解释：句子中的单词是 ["leetcode", "exercises", "sound", "delightful"] 。
- leetcode 的最后一个字符和 exercises 的第一个字符相等。
- exercises 的最后一个字符和 sound 的第一个字符相等。
- sound 的最后一个字符和 delightful 的第一个字符相等。
- delightful 的最后一个字符和 leetcode 的第一个字符相等。
这个句子是回环句。
```

- 示例 2：

```txt
输入：sentence = "eetcode"
输出：true
解释：句子中的单词是 ["eetcode"] 。
- eetcode 的最后一个字符和 eetcode 的第一个字符相等。
这个句子是回环句。
```

- 示例 3：

```txt
输入：sentence = "Leetcode is cool"
输出：false
解释：句子中的单词是 ["Leetcode", "is", "cool"] 。
- Leetcode 的最后一个字符和 is 的第一个字符 不 相等。
这个句子 不 是回环句。
```

---

提示：

- `1 <= sentence.length <= 500`
- `sentence` 仅由大小写英文字母和空格组成
- `sentence` 中的单词由单个空格进行分隔
- 不含任何前导或尾随空格

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
