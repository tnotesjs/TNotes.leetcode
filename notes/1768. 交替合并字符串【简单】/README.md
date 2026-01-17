# [1768. 交替合并字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1768.%20%E4%BA%A4%E6%9B%BF%E5%90%88%E5%B9%B6%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针交替合并](#2--s1---双指针交替合并)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/merge-strings-alternately/)

给你两个字符串 `word1` 和 `word2`。请你从 `word1` 开始，通过交替添加字母来合并字符串。如果一个字符串比另一个字符串长，就将多出来的字母追加到合并后字符串的末尾。

返回 合并后的字符串。

---

示例 1：

```txt
输入：word1 = "abc", word2 = "pqr"
输出："apbqcr"
解释：字符串合并情况如下所示：
word1：  a   b   c
word2：    p   q   r
合并后：  a p b q c r
```

示例 2：

```txt
输入：word1 = "ab", word2 = "pqrs"
输出："apbqrs"
解释：注意，word2 比 word1 长，"rs" 需要追加到合并后字符串的末尾。
word1：  a   b
word2：    p   q   r   s
合并后：  a p b q   r   s
```

示例 3：

```txt
输入：word1 = "abcd", word2 = "pq"
输出："apbqcd"
解释：注意，word1 比 word2 长，"cd" 需要追加到合并后字符串的末尾。
word1：  a   b   c   d
word2：    p   q
合并后：  a p b q c   d
```

---

提示：

- `1 <= word1.length, word2.length <= 100`
- `word1` 和 `word2` 由小写英文字母组成

## 2. 🎯 s.1 - 双指针交替合并

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，按位遍历两个字符串
- 空间复杂度：$O(N)$，结果字符串占用

算法思路：

- 双指针同时扫描 `word1`、`word2`，每轮依次追加各自当前字符（若存在），指针递增，直到两串都耗尽。
