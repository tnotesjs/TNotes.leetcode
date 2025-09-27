# [1880. 检查某单词是否等于两单词之和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1880.%20%E6%A3%80%E6%9F%A5%E6%9F%90%E5%8D%95%E8%AF%8D%E6%98%AF%E5%90%A6%E7%AD%89%E4%BA%8E%E4%B8%A4%E5%8D%95%E8%AF%8D%E4%B9%8B%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-word-equals-summation-of-two-words/)

字母的 **字母值** 取决于字母在字母表中的位置，**从 0 开始** 计数。即，`'a' -> 0`、`'b' -> 1`、`'c' -> 2`，以此类推。

对某个由小写字母组成的字符串 `s` 而言，其 **数值** 就等于将 `s` 中每个字母的 **字母值** 按顺序 **连接** 并 **转换** 成对应整数。

- 例如，`s = "acb"` ，依次连接每个字母的字母值可以得到 `"021"` ，转换为整数得到 `21` 。

给你三个字符串 `firstWord`、`secondWord` 和 `targetWord` ，每个字符串都由从 `'a'` 到 `'j'` （**含** `'a'` 和 `'j'` ）的小写英文字母组成。

如果 `firstWord` 和 `secondWord` 的 **数值之和** 等于 `targetWord` 的数值，返回 `true` ；否则，返回 `false` 。

---

- **示例 1：**

```txt
输入：firstWord = "acb", secondWord = "cba", targetWord = "cdb"
输出：true
解释：
firstWord 的数值为 "acb" -> "021" -> 21
secondWord 的数值为 "cba" -> "210" -> 210
targetWord 的数值为 "cdb" -> "231" -> 231
由于 21 + 210 == 231 ，返回 true
```

- **示例 2：**

```txt
输入：firstWord = "aaa", secondWord = "a", targetWord = "aab"
输出：false
解释：
firstWord 的数值为 "aaa" -> "000" -> 0
secondWord 的数值为 "a" -> "0" -> 0
targetWord 的数值为 "aab" -> "001" -> 1
由于 0 + 0 != 1 ，返回 false
```

- **示例 3：**

```txt
输入：firstWord = "aaa", secondWord = "a", targetWord = "aaaa"
输出：true
解释：
firstWord 的数值为 "aaa" -> "000" -> 0
secondWord 的数值为 "a" -> "0" -> 0
targetWord 的数值为 "aaaa" -> "0000" -> 0
由于 0 + 0 == 0 ，返回 true
```

---

**提示：**

- `1 <= firstWord.length,` `secondWord.length,` `targetWord.length <= 8`
- `firstWord`、`secondWord` 和 `targetWord` 仅由从 `'a'` 到 `'j'` （**含** `'a'` 和 `'j'` ）的小写英文字母组成**。**

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
