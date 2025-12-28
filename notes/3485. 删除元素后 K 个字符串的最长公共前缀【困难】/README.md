# [3485. 删除元素后 K 个字符串的最长公共前缀【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3485.%20%E5%88%A0%E9%99%A4%E5%85%83%E7%B4%A0%E5%90%8E%20K%20%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E9%95%BF%E5%85%AC%E5%85%B1%E5%89%8D%E7%BC%80%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-common-prefix-of-k-strings-after-removal/)

给你一个字符串数组 `words` 和一个整数 `k`。

对于范围 `[0, words.length - 1]` 中的每个下标 `i`，在移除第 `i` 个元素后的剩余数组中，找到任意 `k` 个字符串（`k` 个下标 互不相同）的 最长公共前缀 的 长度。

返回一个数组 `answer`，其中 `answer[i]` 是 `i` 个元素的答案。如果移除第 `i` 个元素后，数组中的字符串少于 `k` 个，`answer[i]` 为 0。

一个字符串的 前缀 是一个从字符串的开头开始并延伸到字符串内任何位置的子字符串。

一个 子字符串 是字符串中一段连续的字符序列。

---

示例 1：

输入： words = ["jump","run","run","jump","run"], k = 2

输出： [3,4,4,3,4]

解释：

- 移除下标 0 处的元素 `"jump"` ：
  - `words` 变为： `["run", "run", "jump", "run"]`。 `"run"` 出现了 3 次。选择任意两个得到的最长公共前缀是 `"run"` （长度为 3）。
- 移除下标 1 处的元素 `"run"` ：
  - `words` 变为： `["jump", "run", "jump", "run"]`。 `"jump"` 出现了 2 次。选择这两个得到的最长公共前缀是 `"jump"` （长度为 4）。
- 移除下标 2 处的元素 `"run"` ：
  - `words` 变为： `["jump", "run", "jump", "run"]`。 `"jump"` 出现了 2 次。选择这两个得到的最长公共前缀是 `"jump"` （长度为 4）。
- 移除下标 3 处的元素 `"jump"` ：
  - `words` 变为： `["jump", "run", "run", "run"]`。 `"run"` 出现了 3 次。选择任意两个得到的最长公共前缀是 `"run"` （长度为 3）。
- 移除下标 4 处的元素 `"run"` ：
  - `words` 变为： `["jump", "run", "run", "jump"]`。 `"jump"` 出现了 2 次。选择这两个得到的最长公共前缀是 `"jump"` （长度为 4）。

---

示例 2：

输入： words = ["dog","racer","car"], k = 2

输出： [0,0,0]

解释：

- 移除任何元素的结果都是 0。

---

提示：

- `1 <= k <= words.length <= 10^5`
- `1 <= words[i].length <= 10^4`
- `words[i]` 由小写英文字母组成。
- `words[i].length` 的总和小于等于 `10^5`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
