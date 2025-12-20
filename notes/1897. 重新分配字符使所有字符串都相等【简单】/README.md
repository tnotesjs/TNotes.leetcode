# [1897. 重新分配字符使所有字符串都相等【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1897.%20%E9%87%8D%E6%96%B0%E5%88%86%E9%85%8D%E5%AD%97%E7%AC%A6%E4%BD%BF%E6%89%80%E6%9C%89%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%83%BD%E7%9B%B8%E7%AD%89%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/redistribute-characters-to-make-all-strings-equal/)

给你一个字符串数组 `words`（下标 从 0 开始 计数）。

在一步操作中，需先选出两个 不同 下标 `i` 和 `j`，其中 `words[i]` 是一个非空字符串，接着将 `words[i]` 中的 任一 字符移动到 `words[j]` 中的 任一 位置上。

如果执行任意步操作可以使 `words` 中的每个字符串都相等，返回 `true` ；否则，返回 `false` 。

---

- 示例 1：

```txt
输入：words = ["abc","aabc","bc"]
输出：true
解释：将 words[1] 中的第一个 'a' 移动到 words[2] 的最前面。
使 words[1] = "abc" 且 words[2] = "abc" 。
所有字符串都等于 "abc" ，所以返回 true 。
```

- 示例 2：

```txt
输入：words = ["ab","a"]
输出：false
解释：执行操作无法使所有字符串都相等。
```

---

提示：

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` 由小写英文字母组成

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
