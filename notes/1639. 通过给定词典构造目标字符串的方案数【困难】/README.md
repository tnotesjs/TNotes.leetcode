# [1639. 通过给定词典构造目标字符串的方案数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1639.%20%E9%80%9A%E8%BF%87%E7%BB%99%E5%AE%9A%E8%AF%8D%E5%85%B8%E6%9E%84%E9%80%A0%E7%9B%AE%E6%A0%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%96%B9%E6%A1%88%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/)

给你一个字符串列表 `words` 和一个目标字符串 `target` 。`words` 中所有字符串都 **长度相同** 。

你的目标是使用给定的 `words` 字符串列表按照下述规则构造 `target` ：

- 从左到右依次构造 `target` 的每一个字符。
- 为了得到 `target` 第 `i` 个字符（下标从 **0** 开始），当 `target[i] = words[j][k]` 时，你可以使用 `words` 列表中第 `j` 个字符串的第 `k` 个字符。
- 一旦你使用了 `words` 中第 `j` 个字符串的第 `k` 个字符，你不能再使用 `words` 字符串列表中任意单词的第 `x` 个字符（`x <= k`）。也就是说，所有单词下标小于等于 `k` 的字符都不能再被使用。
- 请你重复此过程直到得到目标字符串 `target` 。

**请注意**， 在构造目标字符串的过程中，你可以按照上述规定使用 `words` 列表中 **同一个字符串** 的 **多个字符** 。

请你返回使用 `words` 构造 `target` 的方案数。由于答案可能会很大，请对 `10^9 + 7` **取余** 后返回。

（译者注：此题目求的是有多少个不同的 `k` 序列，详情请见示例。）

---

- **示例 1：**

```txt
输入：words = ["acca","bbbb","caca"], target = "aba"
输出：6
解释：总共有 6 种方法构造目标串。
"aba" -> 下标为 0 ("acca")，下标为 1 ("bbbb")，下标为 3 ("caca")
"aba" -> 下标为 0 ("acca")，下标为 2 ("bbbb")，下标为 3 ("caca")
"aba" -> 下标为 0 ("acca")，下标为 1 ("bbbb")，下标为 3 ("acca")
"aba" -> 下标为 0 ("acca")，下标为 2 ("bbbb")，下标为 3 ("acca")
"aba" -> 下标为 1 ("caca")，下标为 2 ("bbbb")，下标为 3 ("acca")
"aba" -> 下标为 1 ("caca")，下标为 2 ("bbbb")，下标为 3 ("caca")
```

- **示例 2：**

```txt
输入：words = ["abba","baab"], target = "bab"
输出：4
解释：总共有 4 种不同形成 target 的方法。
"bab" -> 下标为 0 ("baab")，下标为 1 ("baab")，下标为 2 ("abba")
"bab" -> 下标为 0 ("baab")，下标为 1 ("baab")，下标为 3 ("baab")
"bab" -> 下标为 0 ("baab")，下标为 2 ("baab")，下标为 3 ("baab")
"bab" -> 下标为 1 ("abba")，下标为 2 ("baab")，下标为 3 ("baab")
```

- **示例 3：**

```txt
输入：words = ["abcd"], target = "abcd"
输出：1
```

- **示例 4：**

```txt
输入：words = ["abab","baba","abba","baab"], target = "abba"
输出：16
```

---

**提示：**

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 1000`
- `words` 中所有单词长度相同。
- `1 <= target.length <= 1000`
- `words[i]` 和 `target` 都仅包含小写英文字母。

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
