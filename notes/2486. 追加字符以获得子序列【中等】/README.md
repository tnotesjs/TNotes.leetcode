# [2486. 追加字符以获得子序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2486.%20%E8%BF%BD%E5%8A%A0%E5%AD%97%E7%AC%A6%E4%BB%A5%E8%8E%B7%E5%BE%97%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/append-characters-to-string-to-make-subsequence/)

给你两个仅由小写英文字母组成的字符串 `s` 和 `t` 。

现在需要通过向 `s` 末尾追加字符的方式使 `t` 变成 `s` 的一个 子序列 ，返回需要追加的最少字符数。

子序列是一个可以由其他字符串删除部分（或不删除）字符但不改变剩下字符顺序得到的字符串。

---

- 示例 1：

```txt
输入：s = "coaching", t = "coding"
输出：4
解释：向 s 末尾追加字符串 "ding" ，s = "coachingding" 。
现在，t 是 s ("coachingding") 的一个子序列。
可以证明向 s 末尾追加任何 3 个字符都无法使 t 成为 s 的一个子序列。
```

---

- 示例 2：

```txt
输入：s = "abcde", t = "a"
输出：0
解释：t 已经是 s ("abcde") 的一个子序列。
```

---

- 示例 3：

```txt
输入：s = "z", t = "abcde"
输出：5
解释：向 s 末尾追加字符串 "abcde" ，s = "zabcde" 。
现在，t 是 s ("zabcde") 的一个子序列。
可以证明向 s 末尾追加任何 4 个字符都无法使 t 成为 s 的一个子序列。
```

---

提示：

- `1 <= s.length, t.length <= 10^5`
- `s` 和 `t` 仅由小写英文字母组成

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
