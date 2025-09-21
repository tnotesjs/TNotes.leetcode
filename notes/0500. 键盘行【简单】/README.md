# [0500. 键盘行【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0500.%20%E9%94%AE%E7%9B%98%E8%A1%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🎯 s.2 - 使用内置库](#3--s2---使用内置库)
- [4. 🎯 s.3 - 使用正则](#4--s3---使用正则)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/keyboard-row/)

给你一个字符串数组 `words` ，只返回可以使用在 **美式键盘** 同一行的字母打印出来的单词。键盘如下图所示。

**请注意**，字符串 **不区分大小写**，相同字母的大小写形式都被视为在同一行。

**美式键盘** 中：

- 第一行由字符 `"qwertyuiop"` 组成。
- 第二行由字符 `"asdfghjkl"` 组成。
- 第三行由字符 `"zxcvbnm"` 组成。

![American keyboard](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-08-02-09-47-26.png)

---

- **示例 1：**

```txt
输入： words = ["Hello","Alaska","Dad","Peace"]
输出： ["Alaska","Dad"]
解释： 由于不区分大小写，"a" 和 "A" 都在美式键盘的第二行。
```

- **示例 2：**

```txt
输入： words = ["omk"]
输出： []
```

- **示例 3：**

```txt
输入： words = ["adsdf","sfd"]
输出： ["adsdf","sfd"]
```

---

**提示：**

- `1 <= words.length <= 20`
- `1 <= words[i].length <= 100`
- `words[i]` 由英文字母（小写和大写字母）组成

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \times m)$，其中 $n$ 是单词数，$m$ 是单词平均长度，每个字符都要检查行号。
- 空间复杂度：$O(1)$，只用了固定的集合和变量，额外空间与输入无关。

## 3. 🎯 s.2 - 使用内置库

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n \times m \times r)$，其中 $r=3$（行数固定），因为对每个单词要遍历行并逐字符检查，但 $r$ 是常数，整体仍为 $O(n \times m)$。
- 空间复杂度：$O(m)$，因为 `split` 会生成临时数组，平均长度为 $m$。

## 4. 🎯 s.3 - 使用正则

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(n \times m)$，每个单词都要逐字符匹配正则表达式。
- 空间复杂度：$O(1)$，只用了常量大小的正则对象和结果数组，没有额外依赖于输入大小的空间。
