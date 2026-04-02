# [2024. 考试的最大困扰度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2024.%20%E8%80%83%E8%AF%95%E7%9A%84%E6%9C%80%E5%A4%A7%E5%9B%B0%E6%89%B0%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 滑动窗口](#2--s1---滑动窗口)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-the-confusion-of-an-exam/)

一位老师正在出一场由 `n` 道判断题构成的考试，每道题的答案为 true （用 `'T'` 表示）或者 false （用 `'F'` 表示）。老师想增加学生对自己做出答案的不确定性，方法是 最大化 有 连续相同 结果的题数。（也就是连续出现 true 或者连续出现 false）。

给你一个字符串 `answerKey`，其中 `answerKey[i]` 是第 `i` 个问题的正确结果。除此以外，还给你一个整数 `k`，表示你能进行以下操作的最多次数：

- 每次操作中，将问题的正确答案改为 `'T'` 或者 `'F'` （也就是将 `answerKey[i]` 改为 `'T'` 或者 `'F'` ）。

请你返回在不超过 `k` 次操作的情况下，最大 连续 `'T'` 或者 `'F'` 的数目。

---

示例 1：

```txt
输入：answerKey = "TTFF", k = 2
输出：4
解释：我们可以将两个 'F' 都变为 'T'，得到 answerKey = "TTTT"。
总共有四个连续的 'T'。
```

示例 2：

```txt
输入：answerKey = "TFFT", k = 1
输出：3
解释：我们可以将最前面的 'T' 换成 'F'，得到 answerKey = "FFFT"。
或者，我们可以将第二个 'T' 换成 'F'，得到 answerKey = "TFFF"。
两种情况下，都有三个连续的 'F'。
```

示例 3：

```txt
输入：answerKey = "TTFTTFTT", k = 1
输出：5
解释：我们可以将第一个 'F' 换成 'T'，得到 answerKey = "TTTTTFTT"。
或者我们可以将第二个 'F' 换成 'T'，得到 answerKey = "TTFTTTTT"。
两种情况下，都有五个连续的 'T'。
```

---

提示：

- `n == answerKey.length`
- `1 <= n <= 5 * 10^4`
- `answerKey[i]` 要么是 `'T'`，要么是 `'F'`
- `1 <= k <= n`

## 2. 🎯 s.1 - 滑动窗口

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 分别求「将最多 k 个 F 变为 T」和「将最多 k 个 T 变为 F」时的最长连续相同子串长度
- 对每种情况使用滑动窗口，维护窗口内翻转次数不超过 k
- 两种情况取最大值即为答案
