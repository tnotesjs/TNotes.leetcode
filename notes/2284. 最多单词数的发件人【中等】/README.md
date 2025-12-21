# [2284. 最多单词数的发件人【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2284.%20%E6%9C%80%E5%A4%9A%E5%8D%95%E8%AF%8D%E6%95%B0%E7%9A%84%E5%8F%91%E4%BB%B6%E4%BA%BA%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sender-with-largest-word-count/)

给你一个聊天记录，共包含 `n` 条信息。给你两个字符串数组 `messages` 和 `senders` ，其中 `messages[i]` 是 `senders[i]` 发出的一条 信息 。

一条 信息 是若干用单个空格连接的 单词 ，信息开头和结尾不会有多余空格。发件人的 单词计数 是这个发件人总共发出的 单词数 。注意，一个发件人可能会发出多于一条信息。

请你返回发出单词数 最多 的发件人名字。如果有多个发件人发出最多单词数，请你返回 字典序 最大的名字。

注意：

- 字典序里，大写字母小于小写字母。
- `"Alice"` 和 `"alice"` 是不同的名字。

---

- 示例 1：

```txt
输入：messages = ["Hello userTwooo","Hi userThree","Wonderful day Alice","Nice day userThree"], senders = ["Alice","userTwo","userThree","Alice"]
输出："Alice"
解释：Alice 总共发出了 2 + 3 = 5 个单词。
userTwo 发出了 2 个单词。
userThree 发出了 3 个单词。
由于 Alice 发出单词数最多，所以我们返回 "Alice" 。
```

- 示例 2：

```txt
输入：messages = ["How is leetcode for everyone","Leetcode is useful for practice"], senders = ["Bob","Charlie"]
输出："Charlie"
解释：Bob 总共发出了 5 个单词。
Charlie 总共发出了 5 个单词。
由于最多单词数打平，返回字典序最大的名字，也就是 Charlie 。
```

---

提示：

- `n == messages.length == senders.length`
- `1 <= n <= 10^4`
- `1 <= messages[i].length <= 100`
- `1 <= senders[i].length <= 10`
- `messages[i]` 包含大写字母、小写字母和 `' '` 。
- `messages[i]` 中所有单词都由 单个空格 隔开。
- `messages[i]` 不包含前导和后缀空格。
- `senders[i]` 只包含大写英文字母和小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
