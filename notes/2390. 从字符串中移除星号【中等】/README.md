# [2390. 从字符串中移除星号【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2390.%20%E4%BB%8E%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%A7%BB%E9%99%A4%E6%98%9F%E5%8F%B7%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/removing-stars-from-a-string/)

给你一个包含若干星号 `*` 的字符串 `s`。

在一步操作中，你可以：

- 选中 `s` 中的一个星号。
- 移除星号 左侧 最近的那个 非星号 字符，并移除该星号自身。

返回移除 所有 星号之后的字符串。

注意：

- 生成的输入保证总是可以执行题面中描述的操作。
- 可以证明结果字符串是唯一的。

---

- 示例 1：

```txt
输入：s = "leetcod*e"
输出："lecoe"
解释：从左到右执行移除操作：
- 距离第 1 个星号最近的字符是 "leetcod*e" 中的 't' ，s 变为 "lee*cod*e"。
- 距离第 2 个星号最近的字符是 "lee*cod*e" 中的 'e' ，s 变为 "lecod*e"。
- 距离第 3 个星号最近的字符是 "lecod*e" 中的 'd' ，s 变为 "lecoe"。
不存在其他星号，返回 "lecoe"。
```

- 示例 2：

```txt
输入：s = "erase*"
输出：""
解释：整个字符串都会被移除，所以返回空字符串。
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 由小写英文字母和星号 `*` 组成
- `s` 可以执行上述操作

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
