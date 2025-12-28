# [2124. 检查是否所有 A 都在 B 之前【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2124.%20%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E6%89%80%E6%9C%89%20A%20%E9%83%BD%E5%9C%A8%20B%20%E4%B9%8B%E5%89%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs/)

给你一个 仅 由字符 `'a'` 和 `'b'` 组成的字符串 `s`。如果字符串中 每个 `'a'` 都出现在 每个 `'b'` 之前，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：s = "aaabbb"
输出：true
解释：
'a' 位于下标 0、1 和 2 ；而 'b' 位于下标 3、4 和 5。
因此，每个 'a' 都出现在每个 'b' 之前，所以返回 true。
```

示例 2：

```txt
输入：s = "abab"
输出：false
解释：
存在一个 'a' 位于下标 2 ，而一个 'b' 位于下标 1。
因此，不能满足每个 'a' 都出现在每个 'b' 之前，所以返回 false。
```

示例 3：

```txt
输入：s = "bbb"
输出：true
解释：
不存在 'a' ，因此可以视作每个 'a' 都出现在每个 'b' 之前，所以返回 true。
```

---

提示：

- `1 <= s.length <= 100`
- `s[i]` 为 `'a'` 或 `'b'`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
