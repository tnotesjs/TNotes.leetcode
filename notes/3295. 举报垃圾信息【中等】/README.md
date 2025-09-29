# [3295. 举报垃圾信息【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3295.%20%E4%B8%BE%E6%8A%A5%E5%9E%83%E5%9C%BE%E4%BF%A1%E6%81%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/report-spam-message/)

给你一个字符串数组 `message` 和一个字符串数组 `bannedWords`。

如果数组中 **至少** 存在两个单词与 `bannedWords` 中的任一单词 **完全相同**，则该数组被视为 **垃圾信息**。

如果数组 `message` 是垃圾信息，则返回 `true`；否则返回 `false`。

---

- **示例 1：**

**输入：** message = ["hello","world","leetcode"], bannedWords = ["world","hello"]

**输出：** true

**解释：**

数组 `message` 中的 `"hello"` 和 `"world"` 都出现在数组 `bannedWords` 中。

---

- **示例 2：**

**输入：** message = ["hello","programming","fun"], bannedWords = ["world","programming","leetcode"]

**输出：** false

**解释：**

数组 `message` 中只有一个单词（`"programming"`）出现在数组 `bannedWords` 中。

---

**提示：**

- `1 <= message.length, bannedWords.length <= 10^5`
- `1 <= message[i].length, bannedWords[i].length <= 15`
- `message[i]` 和 `bannedWords[i]` 都只由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
