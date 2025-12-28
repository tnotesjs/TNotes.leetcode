# [2287. 重排字符形成目标字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2287.%20%E9%87%8D%E6%8E%92%E5%AD%97%E7%AC%A6%E5%BD%A2%E6%88%90%E7%9B%AE%E6%A0%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

::: warning 注意

- 本题与 [1189. “气球” 的最大数量][1] 相同。

:::

- [leetcode](https://leetcode.cn/problems/rearrange-characters-to-make-target-string/)

给你两个下标从 0 开始的字符串 `s` 和 `target`。你可以从 `s` 取出一些字符并将其重排，得到若干新的字符串。

从 `s` 中取出字符并重新排列，返回可以形成 `target` 的 最大 副本数。

---

- 示例 1：

```txt
输入：s = "ilovecodingonleetcode", target = "code"
输出：2
解释：
对于 "code" 的第 1 个副本，选取下标为 4 、5 、6 和 7 的字符。
对于 "code" 的第 2 个副本，选取下标为 17 、18 、19 和 20 的字符。
形成的字符串分别是 "ecod" 和 "code" ，都可以重排为 "code"。
可以形成最多 2 个 "code" 的副本，所以返回 2。
```

- 示例 2：

```txt
输入：s = "abcba", target = "abc"
输出：1
解释：
选取下标为 0 、1 和 2 的字符，可以形成 "abc" 的 1 个副本。
可以形成最多 1 个 "abc" 的副本，所以返回 1。
注意，尽管下标 3 和 4 分别有额外的 'a' 和 'b' ，但不能重用下标 2 处的 'c' ，所以无法形成 "abc" 的第 2 个副本。
```

- 示例 3：

```txt
输入：s = "abbaccaddaeea", target = "aaaaa"
输出：1
解释：
选取下标为 0 、3 、6 、9 和 12 的字符，可以形成 "aaaaa" 的 1 个副本。
可以形成最多 1 个 "aaaaa" 的副本，所以返回 1。
```

---

提示：

- `1 <= s.length <= 100`
- `1 <= target.length <= 10`
- `s` 和 `target` 由小写英文字母组成

---

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 5. 🔗 引用

- [1189. “气球” 的最大数量][1]

[1]: https://leetcode.cn/problems/maximum-number-of-balloons/
