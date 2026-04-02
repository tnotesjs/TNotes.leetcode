# [1003. 检查替换后的词是否有效【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1003.%20%E6%A3%80%E6%9F%A5%E6%9B%BF%E6%8D%A2%E5%90%8E%E7%9A%84%E8%AF%8D%E6%98%AF%E5%90%A6%E6%9C%89%E6%95%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 栈模拟](#2--s1---栈模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-word-is-valid-after-substitutions/)

给你一个字符串 `s`，请你判断它是否 有效。

字符串 `s` 有效 需要满足：假设开始有一个空字符串 `t = ""`，你可以执行 任意次 下述操作将 `t` 转换为 `s` ：

- 将字符串 `"abc"` 插入到 `t` 中的任意位置。形式上，`t` 变为 `tleft + "abc" + tright`，其中 `t == tleft + tright`。注意，`tleft` 和 `tright` 可能为 空。

如果字符串 `s` 有效，则返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：s = "aabcbc"
输出：true
解释：
"" -> "abc" -> "aabcbc"
因此，"aabcbc" 有效。
```

示例 2：

```txt
输入：s = "abcabcababcc"
输出：true
解释：
"" -> "abc" -> "abcabc" -> "abcabcabc" -> "abcabcababcc"
因此，"abcabcababcc" 有效。
```

示例 3：

```txt
输入：s = "abccba"
输出：false
解释：执行操作无法得到 "abccba"。
```

---

提示：

- `1 <= s.length <= 2 * 10^4`
- `s` 由字母 `'a'`、`'b'` 和 `'c'` 组成

## 2. 🎯 s.1 - 栈模拟

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是字符串的长度
- 空间复杂度：$O(n)$，栈的最大深度为 $n$

算法思路：

- 用栈模拟字符串的构造过程，遍历每个字符：
  - 遇到 `'c'` 时，检查栈顶两个字符是否为 `'a'` 和 `'b'`，若是则弹出，否则无效
  - 遇到 `'a'` 或 `'b'` 时直接入栈
- 遍历结束后栈为空则字符串有效
