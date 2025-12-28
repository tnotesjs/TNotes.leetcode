# [1044. 最长重复子串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1044.%20%E6%9C%80%E9%95%BF%E9%87%8D%E5%A4%8D%E5%AD%90%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-duplicate-substring/)

给你一个字符串 `s` ，考虑其所有 _重复子串_ ：即 `s` 的（连续）子串，在 `s` 中出现 2 次或更多次。这些出现之间可能存在重叠。

返回 任意一个 可能具有最长长度的重复子串。如果 `s` 不含重复子串，那么答案为 `""`。

---

- 示例 1：

```txt
输入：s = "banana"
输出："ana"
```

- 示例 2：

```txt
输入：s = "abcd"
输出：""
```

---

提示：

- `2 <= s.length <= 3 * 10^4`
- `s` 由小写英文字母组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
