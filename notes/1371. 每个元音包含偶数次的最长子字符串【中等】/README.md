# [1371. 每个元音包含偶数次的最长子字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1371.%20%E6%AF%8F%E4%B8%AA%E5%85%83%E9%9F%B3%E5%8C%85%E5%90%AB%E5%81%B6%E6%95%B0%E6%AC%A1%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 状态压缩 + 哈希表](#2--s1---状态压缩--哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-longest-substring-containing-vowels-in-even-counts/)

给你一个字符串 `s`，请你返回满足以下条件的最长子字符串的长度：每个元音字母，即 'a'，'e'，'i'，'o'，'u'，在子字符串中都恰好出现了偶数次。

---

示例 1：

```txt
输入：s = "eleetminicoworoep"
输出：13
解释：最长子字符串是 "leetminicowor"，它包含 e，i，o 各 2 个，以及 0 个 a，u。
```

示例 2：

```txt
输入：s = "leetcodeisgreat"
输出：5
解释：最长子字符串是 "leetc"，其中包含 2 个 e。
```

示例 3：

```txt
输入：s = "bcbcbc"
输出：6
解释：这个示例中，字符串 "bcbcbc" 本身就是最长的，因为所有的元音 a，e，i，o，u 都出现了 0 次。
```

---

提示：

- `1 <= s.length <= 5 x 10^5`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 状态压缩 + 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是字符串长度
- 空间复杂度：$O(1)$，状态只有 $2^5 = 32$ 种

算法思路：

- 用 5 位二进制状态 mask 表示 5 个元音的奇偶性，遍历时对元音字母异或翻转
- 用哈希表记录每个状态第一次出现的位置
- 若相同状态再次出现，说明中间的子串每个元音都出现偶数次，更新最大长度
