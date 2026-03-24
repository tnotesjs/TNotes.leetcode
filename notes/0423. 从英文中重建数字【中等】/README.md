# [0423. 从英文中重建数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0423.%20%E4%BB%8E%E8%8B%B1%E6%96%87%E4%B8%AD%E9%87%8D%E5%BB%BA%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reconstruct-original-digits-from-english/)

给你一个字符串 `s`，其中包含字母顺序打乱的用英文单词表示的若干数字（`0-9`）。按 升序 返回原始的数字。

---

示例 1：

```txt
输入：s = "owoztneoer"
输出："012"
```

示例 2：

```txt
输入：s = "fviefuro"
输出："45"
```

---

提示：

- `1 <= s.length <= 10^5`
- `s[i]` 为 `["e","g","f","i","h","o","n","s","r","u","t","w","v","x","z"]` 这些字符之一
- `s` 保证是一个符合题目要求的字符串

## 2. 🎯 s.1 - 字母计数

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是字符串长度
- 空间复杂度：$O(1)$

算法思路：

- 找每个数字单词中的唯一字母：`z`→`0`, `w`→`2`, `u`→`4`, `x`→`6`, `g`→`8`
- 再用剩余字母推断 `3,5,7,1,9`
