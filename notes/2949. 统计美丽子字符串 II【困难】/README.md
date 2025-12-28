# [2949. 统计美丽子字符串 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2949.%20%E7%BB%9F%E8%AE%A1%E7%BE%8E%E4%B8%BD%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-beautiful-substrings-ii/)

给你一个字符串 `s` 和一个正整数 `k`。

用 `vowels` 和 `consonants` 分别表示字符串中元音字母和辅音字母的数量。

如果某个字符串满足以下条件，则称其为 美丽字符串 ：

- `vowels == consonants`，即元音字母和辅音字母的数量相等。
- `(vowels * consonants) % k == 0`，即元音字母和辅音字母的数量的乘积能被 `k` 整除。

返回字符串 `s` 中 非空美丽子字符串 的数量。

子字符串是字符串中的一个连续字符序列。

英语中的 元音字母 为 `'a'`、`'e'`、`'i'`、`'o'` 和 `'u'`。

英语中的 辅音字母 为除了元音字母之外的所有字母。

---

- 示例 1：

```txt
输入：s = "baeyh", k = 2
输出：2
解释：字符串 s 中有 2 个美丽子字符串。
- 子字符串 "baeyh"，vowels = 2（["a","e"]），consonants = 2（["y","h"]）。
可以看出字符串 "aeyh" 是美丽字符串，因为 vowels == consonants 且 vowels * consonants % k == 0。
- 子字符串 "baeyh"，vowels = 2（["a","e"]），consonants = 2（["b","y"]）。
可以看出字符串 "baey" 是美丽字符串，因为 vowels == consonants 且 vowels * consonants % k == 0。
可以证明字符串 s 中只有 2 个美丽子字符串。
```

---

- 示例 2：

```txt
输入：s = "abba", k = 1
输出：3
解释：字符串 s 中有 3 个美丽子字符串。
- 子字符串 "abba"，vowels = 1（["a"]），consonants = 1（["b"]）。
- 子字符串 "abba"，vowels = 1（["a"]），consonants = 1（["b"]）。
- 子字符串 "abba"，vowels = 2（["a","a"]），consonants = 2（["b","b"]）。
可以证明字符串 s 中只有 3 个美丽子字符串。
```

---

- 示例 3：

```txt
输入：s = "bcdf", k = 1
输出：0
解释：字符串 s 中没有美丽子字符串。
```

---

提示：

- `1 <= s.length <= 5 * 10^4`
- `1 <= k <= 1000`
- `s` 仅由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
