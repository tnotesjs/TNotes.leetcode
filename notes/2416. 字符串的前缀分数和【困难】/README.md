# [2416. 字符串的前缀分数和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2416.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%89%8D%E7%BC%80%E5%88%86%E6%95%B0%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-prefix-scores-of-strings/)

给你一个长度为 `n` 的数组 `words` ，该数组由 非空 字符串组成。

定义字符串 `term` 的 分数 等于以 `term` 作为 前缀 的 `words[i]` 的数目。

- 例如，如果 `words = ["a", "ab", "abc", "cab"]` ，那么 `"ab"` 的分数是 `2` ，因为 `"ab"` 是 `"ab"` 和 `"abc"` 的一个前缀。

返回一个长度为 `n` 的数组 `answer` ，其中 `answer[i]` 是 `words[i]` 的每个非空前缀的分数 总和。

---

注意： 字符串视作它自身的一个前缀。

---

- 示例 1：

```txt
输入：words = ["abc","ab","bc","b"]
输出：[5,4,3,2]
解释：对应每个字符串的答案如下：
- "abc" 有 3 个前缀："a"、"ab" 和 "abc"。
- 2 个字符串的前缀为 "a" ，2 个字符串的前缀为 "ab" ，1 个字符串的前缀为 "abc"。
总计 answer[0] = 2 + 2 + 1 = 5。
- "ab" 有 2 个前缀："a" 和 "ab"。
- 2 个字符串的前缀为 "a" ，2 个字符串的前缀为 "ab"。
总计 answer[1] = 2 + 2 = 4。
- "bc" 有 2 个前缀："b" 和 "bc"。
- 2 个字符串的前缀为 "b" ，1 个字符串的前缀为 "bc"。
总计 answer[2] = 2 + 1 = 3。
- "b" 有 1 个前缀："b"。
- 2 个字符串的前缀为 "b"。
总计 answer[3] = 2。
```

- 示例 2：

```txt
输入：words = ["abcd"]
输出：[4]
解释：
"abcd" 有 4 个前缀 "a"、"ab"、"abc" 和 "abcd"。
每个前缀的分数都是 1 ，总计 answer[0] = 1 + 1 + 1 + 1 = 4。
```

---

提示：

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- `words[i]` 由小写英文字母组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
