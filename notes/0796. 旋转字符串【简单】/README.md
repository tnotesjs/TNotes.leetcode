# [0796. 旋转字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0796.%20%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rotate-string/)

给定两个字符串, `s`  和  `goal`。如果在若干次旋转操作之后，`s`  能变成  `goal` ，那么返回  `true` 。

`s`  的 **旋转操作** 就是将  `s` 最左边的字符移动到最右边。

- 例如, 若  `s = 'abcde'`，在旋转一次之后结果就是`'bcdea'` 。

---

- **示例 1:**

```txt
输入: s = "abcde", goal = "cdeab"
输出: true
```

- **示例 2:**

```txt
输入: s = "abcde", goal = "abced"
输出: false
```

---

**提示:**

- `1 <= s.length, goal.length <= 100`
- `s`  和  `goal`  由小写英文字母组成

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
