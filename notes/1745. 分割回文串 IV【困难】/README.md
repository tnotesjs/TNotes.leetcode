# [1745. 分割回文串 IV【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1745.%20%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2%20IV%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-partitioning-iv/)

给你一个字符串 `s` ，如果可以将它分割成三个 非空 回文子字符串，那么返回 `true` ，否则返回 `false` 。

当一个字符串正着读和反着读是一模一样的，就称其为 回文字符串 。

---

- 示例 1：

```txt
输入：s = "abcbdd"
输出：true
解释："abcbdd" = "a" + "bcb" + "dd"，三个子字符串都是回文的。
```

- 示例 2：

```txt
输入：s = "bcbddxy"
输出：false
解释：s 没办法被分割成 3 个回文子字符串。
```

---

提示：

- `3 <= s.length <= 2000`
- `s`​​​​​​ 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
