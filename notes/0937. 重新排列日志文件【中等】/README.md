# [0937. 重新排列日志文件【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0937.%20%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reorder-data-in-log-files/)

给你一个日志数组 `logs`。每条日志都是以空格分隔的字串，其第一个字为字母与数字混合的 **标识符** 。

有两种不同类型的日志：

- **字母日志**：除标识符之外，所有字均由小写字母组成
- **数字日志**：除标识符之外，所有字均由数字组成

请按下述规则将日志重新排序：

- 所有 **字母日志** 都排在 **数字日志** 之前。
- **字母日志** 在内容不同时，忽略标识符后，按内容字母顺序排序；在内容相同时，按标识符排序。
- **数字日志** 应该保留原来的相对顺序。

返回日志的最终顺序。

---

- **示例 1：**

```txt
输入：logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
输出：["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
解释：
字母日志的内容都不同，所以顺序为 "art can", "art zero", "own kit dig" 。
数字日志保留原来的相对顺序 "dig1 8 1 5 1", "dig2 3 6" 。
```

- **示例 2：**

```txt
输入：logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
输出：["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
```

---

**提示：**

- `1 <= logs.length <= 100`
- `3 <= logs[i].length <= 100`
- `logs[i]` 中，字与字之间都用 **单个** 空格分隔
- 题目数据保证 `logs[i]` 都有一个标识符，并且在标识符之后至少存在一个字

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
