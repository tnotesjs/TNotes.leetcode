# [1781. 所有子字符串美丽值之和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1781.%20%E6%89%80%E6%9C%89%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%BE%8E%E4%B8%BD%E5%80%BC%E4%B9%8B%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-beauty-of-all-substrings/)

一个字符串的 **美丽值**  定义为：出现频率最高字符与出现频率最低字符的出现次数之差。

- 比方说，`"abaacc"`  的美丽值为  `3 - 1 = 2` 。

给你一个字符串  `s` ，请你返回它所有子字符串的  **美丽值**  之和。

---

- **示例 1：**

```txt
输入：s = "aabcb"
输出：5
解释：美丽值不为零的字符串包括 ["aab","aabc","aabcb","abcb","bcb"] ，每一个字符串的美丽值都为 1 。
```

- **示例 2：**

```txt
输入：s = "aabcbaa"
输出：17
```

---

**提示：**

- `1 <= s.length <= 500`
- `s`  只包含小写英文字母。

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
