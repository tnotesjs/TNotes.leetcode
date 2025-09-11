# [0192. 统计词频【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0192.%20%E7%BB%9F%E8%AE%A1%E8%AF%8D%E9%A2%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/word-frequency/)

写一个 bash 脚本以统计一个文本文件 `words.txt` 中每个单词出现的频率。

> 单词 x 在文本文件中出现的次数称作该单词的 频率。

为了简单起见，你可以假设：

- `words.txt` 只包括小写字母和 `' '`。
- 每个单词只由小写字母组成。
- 单词间由一个或多个空格字符分隔。

**示例:**

假设 `words.txt` 内容如下：

```txt
the day is sunny the the
the sunny is is
```

你的脚本应当输出（以词频降序排列）：

```txt
the 4
is 3
sunny 2
day 1
```

**说明:**

- 不要担心词频相同的单词的排序问题，每个单词出现的频率都是唯一的。
- 你可以使用一行 [Unix pipes][1] 实现吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [Unix pipes][1]

[1]: http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html
