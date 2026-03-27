# [3137. K 周期字符串需要的最少操作次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3137.%20K%20%E5%91%A8%E6%9C%9F%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%9C%80%E8%A6%81%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-operations-to-make-word-k-periodic/)

给你一个长度为 `n` 的字符串 `word` 和一个整数 `k`，其中 `k` 是 `n` 的因数。

在一次操作中，你可以选择任意两个下标 `i` 和 `j`，其中 `0 <= i, j < n`，且这两个下标都可以被 `k` 整除，然后用从 `j` 开始的长度为 `k` 的子串替换从 `i` 开始的长度为 `k` 的子串。也就是说，将子串 `word[i..i + k - 1]` 替换为子串 `word[j..j + k - 1]`。

返回使 `word` 成为 K 周期字符串 所需的 最少 操作次数。

如果存在某个长度为 `k` 的字符串 `s`，使得 `word` 可以表示为任意次数连接 `s`，则称字符串 `word` 是 K 周期字符串。例如，如果 `word == "ababab"`，那么 `word` 就是 `s = "ab"` 时的 2 周期字符串。

---

示例 1：

输入：word = "leetcodeleet", k = 4

输出：1

解释：可以选择 i = 4 和 j = 0 获得一个 4 周期字符串。这次操作后，word 变为 "leetleetleet"。

---

示例 2：

输入：word = "leetcoleet", k = 2

输出：3

解释：可以执行以下操作获得一个 2 周期字符串。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-07-58-43.png)

---

提示：

- `1 <= n == word.length <= 10^5`
- `1 <= k <= word.length`
- `k` 能整除 `word.length`。
- `word` 仅由小写英文字母组成。

## 2. 🎯 s.1 - 哈希计数

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，遍历字符串
- 空间复杂度：$O(n/k)$，哈希表

算法思路：

- 将字符串按长度 k 分组
- 统计每种子串的出现次数，找到出现最多的那个
- 最少操作次数 = 总组数 - 最大出现次数

