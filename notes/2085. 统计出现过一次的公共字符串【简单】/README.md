# [2085. 统计出现过一次的公共字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2085.%20%E7%BB%9F%E8%AE%A1%E5%87%BA%E7%8E%B0%E8%BF%87%E4%B8%80%E6%AC%A1%E7%9A%84%E5%85%AC%E5%85%B1%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数法](#2--s1---计数法)
- [3. 🎯 s.2 - 集合去重法](#3--s2---集合去重法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-common-words-with-one-occurrence/)

给你两个字符串数组 `words1` 和 `words2` ，请你返回在两个字符串数组中 都恰好出现一次 的字符串的数目。

---

- 示例 1：

```txt
输入：words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
输出：2
解释：
- "leetcode" 在两个数组中都恰好出现一次，计入答案。
- "amazing" 在两个数组中都恰好出现一次，计入答案。
- "is" 在两个数组中都出现过，但在 words1 中出现了 2 次，不计入答案。
- "as" 在 words1 中出现了一次，但是在 words2 中没有出现过，不计入答案。
所以，有 2 个字符串在两个数组中都恰好出现了一次。
```

- 示例 2：

```txt
输入：words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
输出：0
解释：没有字符串在两个数组中都恰好出现一次。
```

- 示例 3：

```txt
输入：words1 = ["a","ab"], words2 = ["a","a","a","ab"]
输出：1
解释：唯一在两个数组中都出现一次的字符串是 "ab"。
```

---

提示：

- `1 <= words1.length, words2.length <= 1000`
- `1 <= words1[i].length, words2[j].length <= 30`
- `words1[i]` 和 `words2[j]` 都只包含小写英文字母。

## 2. 🎯 s.1 - 计数法

::: code-group

<<< ./solutions/1/1.js [js]

:::

## 3. 🎯 s.2 - 集合去重法

::: code-group

<<< ./solutions/2/1.js [js]

:::
