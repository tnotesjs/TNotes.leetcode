# [2515. 到目标字符串的最短距离【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2515.%20%E5%88%B0%E7%9B%AE%E6%A0%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E7%9F%AD%E8%B7%9D%E7%A6%BB%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shortest-distance-to-target-string-in-a-circular-array/)

给你一个下标从 0 开始的 环形 字符串数组 `words` 和一个字符串 `target` 。环形数组 意味着数组首尾相连。

- 形式上， `words[i]` 的下一个元素是 `words[(i + 1) % n]` ，而 `words[i]` 的前一个元素是 `words[(i - 1 + n) % n]` ，其中 `n` 是 `words` 的长度。

从 `startIndex` 开始，你一次可以用 `1` 步移动到下一个或者前一个单词。

返回到达目标字符串 `target` 所需的最短距离。如果 `words` 中不存在字符串 `target` ，返回 `-1` 。

---

- 示例 1：

```txt
输入：words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1
输出：1
解释：从下标 1 开始，可以经由以下步骤到达 "hello" ：
- 向右移动 3 个单位，到达下标 4 。
- 向左移动 2 个单位，到达下标 4 。
- 向右移动 4 个单位，到达下标 0 。
- 向左移动 1 个单位，到达下标 0 。
到达 "hello" 的最短距离是 1 。
```

- 示例 2：

```txt
输入：words = ["a","b","leetcode"], target = "leetcode", startIndex = 0
输出：1
解释：从下标 0 开始，可以经由以下步骤到达 "leetcode" ：
- 向右移动 2 个单位，到达下标 3 。
- 向左移动 1 个单位，到达下标 3 。
到达 "leetcode" 的最短距离是 1 。
```

- 示例 3：

```txt
输入：words = ["i","eat","leetcode"], target = "ate", startIndex = 0
输出：-1
解释：因为 words 中不存在字符串 "ate" ，所以返回 -1 。
```

---

提示：

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` 和 `target` 仅由小写英文字母组成
- `0 <= startIndex < words.length`

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
