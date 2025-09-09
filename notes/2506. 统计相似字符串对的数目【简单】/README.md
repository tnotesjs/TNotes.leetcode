# [2506. 统计相似字符串对的数目【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2506.%20%E7%BB%9F%E8%AE%A1%E7%9B%B8%E4%BC%BC%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AF%B9%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力比较](#2--s1---暴力比较)
- [3. 🎯 s.2 - map 统计 + 排列组合计算](#3--s2---map-统计--排列组合计算)
- [4. 🎯 s.3 - 位运算 + 排列组合计算](#4--s3---位运算--排列组合计算)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-pairs-of-similar-strings/)

给你一个下标从 **0** 开始的字符串数组 `words` 。

如果两个字符串由相同的字符组成，则认为这两个字符串 **相似** 。

- 例如，`"abca"` 和 `"cba"` 相似，因为它们都由字符 `'a'`、`'b'`、`'c'` 组成。
- 然而，`"abacba"` 和 `"bcfd"` 不相似，因为它们不是相同字符组成的。

请你找出满足字符串 `words[i]` 和 `words[j]` 相似的下标对 `(i, j)` ，并返回下标对的数目，其中 `0 <= i < j <= words.length - 1` 。

---

- **示例 1：**

```txt
输入：words = ["aba","aabb","abcd","bac","aabc"]
输出：2
解释：共有 2 对满足条件：
- i = 0 且 j = 1 ：words[0] 和 words[1] 只由字符 'a' 和 'b' 组成。
- i = 3 且 j = 4 ：words[3] 和 words[4] 只由字符 'a'、'b' 和 'c' 。
```

- **示例 2：**

```txt
输入：words = ["aabb","ab","ba"]
输出：3
解释：共有 3 对满足条件：
- i = 0 且 j = 1 ：words[0] 和 words[1] 只由字符 'a' 和 'b' 组成。
- i = 0 且 j = 2 ：words[0] 和 words[2] 只由字符 'a' 和 'b' 组成。
- i = 1 且 j = 2 ：words[1] 和 words[2] 只由字符 'a' 和 'b' 组成。
```

- **示例 3：**

```txt
输入：words = ["nba","cba","dba"]
输出：0
解释：不存在满足条件的下标对，返回 0 。
```

---

**提示：**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` 仅由小写英文字母组成

## 2. 🎯 s.1 - 暴力比较

::: code-group

<<< ./solutions/1/1.js [js]

:::

## 3. 🎯 s.2 - map 统计 + 排列组合计算

::: code-group

<<< ./solutions/2/1.js [js]

:::

## 4. 🎯 s.3 - 位运算 + 排列组合计算

::: code-group

<<< ./solutions/3/1.js [js]

:::
