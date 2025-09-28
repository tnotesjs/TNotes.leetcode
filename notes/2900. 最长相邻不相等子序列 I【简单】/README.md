# [2900. 最长相邻不相等子序列 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2900.%20%E6%9C%80%E9%95%BF%E7%9B%B8%E9%82%BB%E4%B8%8D%E7%9B%B8%E7%AD%89%E5%AD%90%E5%BA%8F%E5%88%97%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-unequal-adjacent-groups-subsequence-i/)

给定一个字符串数组 `words` ，和一个 **二进制** 数组 `groups` ，两个数组长度都是 `n` 。

如果 `words` 的一个 子序列 是交替的，那么对于序列中的任意两个连续字符串，它们在 `groups` 中相同索引的对应元素是 **不同** 的（也就是说，不能有连续的 0 或 1），

> 子序列 是可以通过从另一个数组删除或不删除某些元素，但不更改其余元素的顺序得到的数组。

你需要从 `words` 中选出 **最长交替子序列**。

返回选出的子序列。如果有多个答案，返回 **任意** 一个。

---

**注意：** `words` 中的元素是不同的 。

---

- **示例 1：**

```txt
输入：words = ["e","a","b"], groups = [0,0,1]
输出：["e","b"]
解释：一个可行的子序列是 [0,2] ，因为 groups[0] != groups[2] 。
所以一个可行的答案是 [words[0],words[2]] = ["e","b"] 。
另一个可行的子序列是 [1,2] ，因为 groups[1] != groups[2] 。
得到答案为 [words[1],words[2]] = ["a","b"] 。
这也是一个可行的答案。
符合题意的最长子序列的长度为 2 。
```

- **示例 2：**

```txt
输入：words = ["a","b","c","d"], groups = [1,0,1,1]
输出：["a","b","c"]
解释：一个可行的子序列为 [0,1,2] 因为 groups[0] != groups[1] 且 groups[1] != groups[2] 。
所以一个可行的答案是 [words[0],words[1],words[2]] = ["a","b","c"] 。
另一个可行的子序列为 [0,1,3] 因为 groups[0] != groups[1] 且 groups[1] != groups[3] 。
得到答案为 [words[0],words[1],words[3]] = ["a","b","d"] 。
这也是一个可行的答案。
符合题意的最长子序列的长度为 3 。
```

---

**提示：**

- `1 <= n == words.length == groups.length <= 100`
- `1 <= words[i].length <= 10`
- `groups[i]` 是 `0` 或 `1`。
- `words` 中的字符串 **互不相同** 。
- `words[i]` 只包含小写英文字母。

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
