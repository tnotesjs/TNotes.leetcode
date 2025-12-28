# [0466. 统计重复个数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0466.%20%E7%BB%9F%E8%AE%A1%E9%87%8D%E5%A4%8D%E4%B8%AA%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-repetitions/)

定义 `str = [s, n]` 表示 `str` 由 `n` 个字符串 `s` 连接构成。

- 例如，`str == ["abc", 3] =="abcabcabc"`。

如果可以从 `s2` 中删除某些字符使其变为 `s1`，则称字符串 `s1` 可以从字符串 `s2` 获得。

- 例如，根据定义，`s1 = "abc"` 可以从 `s2 = "ab*dbe*c"` 获得，仅需要删除加粗且用斜体标识的字符。

现在给你两个字符串 `s1` 和 `s2` 和两个整数 `n1` 和 `n2`。由此构造得到两个字符串，其中 `str1 = [s1, n1]`、`str2 = [s2, n2]`。

请你找出一个最大整数 `m` ，以满足 `str = [str2, m]` 可以从 `str1` 获得。

---

示例 1：

```txt
输入：s1 = "acb", n1 = 4, s2 = "ab", n2 = 2
输出：2
```

示例 2：

```txt
输入：s1 = "acb", n1 = 1, s2 = "acb", n2 = 1
输出：1
```

---

提示：

- `1 <= s1.length, s2.length <= 100`
- `s1` 和 `s2` 由小写英文字母组成
- `1 <= n1, n2 <= 10^6`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
