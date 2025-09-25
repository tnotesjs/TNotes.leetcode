# [1871. 跳跃游戏 VII【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1871.%20%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F%20VII%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/jump-game-vii/)

给你一个下标从 **0** 开始的二进制字符串 `s` 和两个整数 `minJump` 和 `maxJump` 。一开始，你在下标 `0` 处，且该位置的值一定为 `'0'` 。当同时满足如下条件时，你可以从下标 `i` 移动到下标 `j` 处：

- `i + minJump <= j <= min(i + maxJump, s.length - 1)` 且
- `s[j] == '0'`.

如果你可以到达 `s` 的下标 `s.length - 1` 处，请你返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

```txt
输入：s = "011010", minJump = 2, maxJump = 3
输出：true
解释：
第一步，从下标 0 移动到下标 3 。
第二步，从下标 3 移动到下标 5 。
```

- **示例 2：**

```txt
输入：s = "01101110", minJump = 2, maxJump = 3
输出：false
```

---

**提示：**

- `2 <= s.length <= 10^5`
- `s[i]` 要么是 `'0'` ，要么是 `'1'`
- `s[0] == '0'`
- `1 <= minJump <= maxJump < s.length`

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
