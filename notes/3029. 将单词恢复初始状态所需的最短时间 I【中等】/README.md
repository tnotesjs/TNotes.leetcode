# [3029. 将单词恢复初始状态所需的最短时间 I【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3029.%20%E5%B0%86%E5%8D%95%E8%AF%8D%E6%81%A2%E5%A4%8D%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81%E6%89%80%E9%9C%80%E7%9A%84%E6%9C%80%E7%9F%AD%E6%97%B6%E9%97%B4%20I%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-time-to-revert-word-to-initial-state-i/)

给你一个下标从 **0** 开始的字符串 `word` 和一个整数 `k` 。

在每一秒，你必须执行以下操作：

- 移除 `word` 的前 `k` 个字符。
- 在 `word` 的末尾添加 `k` 个任意字符。

**注意** 添加的字符不必和移除的字符相同。但是，必须在每一秒钟都执行 **两种** 操作。

返回将 `word` 恢复到其 **初始** 状态所需的 **最短** 时间（该时间必须大于零）。

---

- **示例 1：**

```txt
输入：word = "abacaba", k = 3
输出：2
解释：
第 1 秒，移除 word 的前缀 "aba"，并在末尾添加 "bac" 。因此，word 变为 "cababac"。
第 2 秒，移除 word 的前缀 "cab"，并在末尾添加 "aba" 。因此，word 变为 "abacaba" 并恢复到始状态。
可以证明，2 秒是 word 恢复到其初始状态所需的最短时间。
```

- **示例 2：**

```txt
输入：word = "abacaba", k = 4
输出：1
解释：
第 1 秒，移除 word 的前缀 "abac"，并在末尾添加 "caba" 。因此，word 变为 "abacaba" 并恢复到初始状态。
可以证明，1 秒是 word 恢复到其初始状态所需的最短时间。
```

- **示例 3：**

```txt
输入：word = "abcbabcd", k = 2
输出：4
解释：
每一秒，我们都移除 word 的前 2 个字符，并在 word 末尾添加相同的字符。
4 秒后，word 变为 "abcbabcd" 并恢复到初始状态。
可以证明，4 秒是 word 恢复到其初始状态所需的最短时间。
```

---

**提示：**

- `1 <= word.length <= 50`
- `1 <= k <= word.length`
- `word`仅由小写英文字母组成。

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
