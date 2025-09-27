# [1784. 检查二进制字符串字段【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1784.%20%E6%A3%80%E6%9F%A5%E4%BA%8C%E8%BF%9B%E5%88%B6%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%97%E6%AE%B5%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-binary-string-has-at-most-one-segment-of-ones/)

给你一个二进制字符串 `s` ，该字符串 **不含前导零** 。

如果 `s` 包含 **零个或一个由连续的 `'1'` 组成的字段** ，返回 `true`​​​ 。否则，返回 `false` 。

---

- **示例 1：**

```txt
输入：s = "1001"
输出：false
解释：由连续若干个 '1' 组成的字段数量为 2，返回 false
```

- **示例 2：**

```txt
输入：s = "110"
输出：true
```

---

**提示：**

- `1 <= s.length <= 100`
- `s[i]`​​​​ 为 `'0'` 或 `'1'`
- `s[0]` 为 `'1'`

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
