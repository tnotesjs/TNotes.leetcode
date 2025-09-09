# [0500. 键盘行【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0500.%20%E9%94%AE%E7%9B%98%E8%A1%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/keyboard-row/)

给你一个字符串数组 `words` ，只返回可以使用在 **美式键盘** 同一行的字母打印出来的单词。键盘如下图所示。

**请注意**，字符串 **不区分大小写**，相同字母的大小写形式都被视为在同一行**。**

**美式键盘** 中：

- 第一行由字符 `"qwertyuiop"` 组成。
- 第二行由字符 `"asdfghjkl"` 组成。
- 第三行由字符 `"zxcvbnm"` 组成。

![American keyboard](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-02-09-47-26.png)

---

- **示例 1：**
  - **输入：** words = \["Hello","Alaska","Dad","Peace"\]
  - **输出：** \["Alaska","Dad"\]
  - **解释：** 由于不区分大小写，`"a"` 和 `"A"` 都在美式键盘的第二行。
- **示例 2：**
  - **输入：** words = \["omk"\]
  - **输出：** \[\]
- **示例 3：**
  - **输入：** words = \["adsdf","sfd"\]
  - **输出：** \["adsdf","sfd"\]

---

**提示：**

- `1 <= words.length <= 20`
- `1 <= words[i].length <= 100`
- `words[i]` 由英文字母（小写和大写字母）组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js（简洁版）]

:::
