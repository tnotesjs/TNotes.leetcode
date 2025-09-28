# [2839. 判断通过操作能否让字符串相等 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2839.%20%E5%88%A4%E6%96%AD%E9%80%9A%E8%BF%87%E6%93%8D%E4%BD%9C%E8%83%BD%E5%90%A6%E8%AE%A9%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E7%AD%89%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-strings-can-be-made-equal-with-operations-i/)

给你两个字符串 `s1` 和 `s2` ，两个字符串的长度都为 `4` ，且只包含 **小写** 英文字母。

你可以对两个字符串中的 **任意一个** 执行以下操作 **任意** 次：

- 选择两个下标 `i` 和 `j` 且满足 `j - i = 2` ，然后 **交换** 这个字符串中两个下标对应的字符。

如果你可以让字符串 `s1` 和 `s2` 相等，那么返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

```txt
输入：s1 = "abcd", s2 = "cdab"
输出：true
解释： 我们可以对 s1 执行以下操作：
- 选择下标 i = 0 ，j = 2 ，得到字符串 s1 = "cbad" 。
- 选择下标 i = 1 ，j = 3 ，得到字符串 s1 = "cdab" = s2 。
```

- **示例 2：**

```txt
输入：s1 = "abcd", s2 = "dacb"
输出：false
解释：无法让两个字符串相等。
```

---

**提示：**

- `s1.length == s2.length == 4`
- `s1` 和 `s2` 只包含小写英文字母。

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
