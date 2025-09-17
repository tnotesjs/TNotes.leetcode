# [1032. 字符流【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1032.%20%E5%AD%97%E7%AC%A6%E6%B5%81%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/stream-of-characters/)

设计一个算法：接收一个字符流，并检查这些字符的后缀是否是字符串数组 `words` 中的一个字符串。

例如，`words = ["abc", "xyz"]` 且字符流中逐个依次加入 4 个字符 `'a'`、`'x'`、`'y'` 和 `'z'` ，你所设计的算法应当可以检测到 `"axyz"` 的后缀 `"xyz"` 与 `words` 中的字符串 `"xyz"` 匹配。

按下述要求实现 `StreamChecker` 类：

- `StreamChecker(String[] words)` ：构造函数，用字符串数组 `words` 初始化数据结构。
- `boolean query(char letter)`：从字符流中接收一个新字符，如果字符流中的任一非空后缀能匹配 `words` 中的某一字符串，返回 `true` ；否则，返回 `false`。

**示例：**

```txt
输入：
["StreamChecker", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query", "query"]
[[["cd", "f", "kl"]], ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"]]
输出：
[null, false, false, false, true, false, true, false, false, false, false, false, true]

解释：
StreamChecker streamChecker = new StreamChecker(["cd", "f", "kl"]);
streamChecker.query("a"); // 返回 False
streamChecker.query("b"); // 返回 False
streamChecker.query("c"); // 返回n False
streamChecker.query("d"); // 返回 True ，因为 'cd' 在 words 中
streamChecker.query("e"); // 返回 False
streamChecker.query("f"); // 返回 True ，因为 'f' 在 words 中
streamChecker.query("g"); // 返回 False
streamChecker.query("h"); // 返回 False
streamChecker.query("i"); // 返回 False
streamChecker.query("j"); // 返回 False
streamChecker.query("k"); // 返回 False
streamChecker.query("l"); // 返回 True ，因为 'kl' 在 words 中
```

---

**提示：**

- `1 <= words.length <= 2000`
- `1 <= words[i].length <= 200`
- `words[i]` 由小写英文字母组成
- `letter` 是一个小写英文字母
- 最多调用查询 `4 * 10^4` 次

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
