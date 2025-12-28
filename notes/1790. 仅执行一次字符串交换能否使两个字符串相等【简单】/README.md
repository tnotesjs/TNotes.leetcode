# [1790. 仅执行一次字符串交换能否使两个字符串相等【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1790.%20%E4%BB%85%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AC%A1%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BA%A4%E6%8D%A2%E8%83%BD%E5%90%A6%E4%BD%BF%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E7%AD%89%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-one-string-swap-can-make-strings-equal/)

给你长度相等的两个字符串 `s1` 和 `s2`。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。

如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：s1 = "bank", s2 = "kanb"
输出：true
解释：例如，交换 s2 中的第一个和最后一个字符可以得到 "bank"
```

示例 2：

```txt
输入：s1 = "attack", s2 = "defend"
输出：false
解释：一次字符串交换无法使两个字符串相等
```

示例 3：

```txt
输入：s1 = "kelb", s2 = "kelb"
输出：true
解释：两个字符串已经相等，所以不需要进行字符串交换
```

示例 4：

```txt
输入：s1 = "abcd", s2 = "dcba"
输出：false
```

---

提示：

- `1 <= s1.length, s2.length <= 100`
- `s1.length == s2.length`
- `s1` 和 `s2` 仅由小写英文字母组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
