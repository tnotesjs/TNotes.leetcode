# [2546. 执行逐位运算使字符串相等【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2546.%20%E6%89%A7%E8%A1%8C%E9%80%90%E4%BD%8D%E8%BF%90%E7%AE%97%E4%BD%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9B%B8%E7%AD%89%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/apply-bitwise-operations-to-make-strings-equal/)

给你两个下标从 **0** 开始的 **二元** 字符串 `s` 和 `target` ，两个字符串的长度均为 `n` 。你可以对 `s` 执行下述操作 **任意** 次：

- 选择两个 **不同** 的下标 `i` 和 `j` ，其中 `0 <= i, j < n` 。
- 同时，将 `s[i]` 替换为 (`s[i]` **OR** `s[j]`) ，`s[j]` 替换为 (`s[i]` **XOR** `s[j]`) 。

例如，如果 `s = "0110"` ，你可以选择 `i = 0` 和 `j = 2`，然后同时将 `s[0]` 替换为 (`s[0]` **OR** `s[2]` = `0` **OR** `1` = `1`)，并将 `s[2]` 替换为 (`s[0]` **XOR** `s[2]` = `0` **XOR** `1` = `1`)，最终得到 `s = "1110"` 。

如果可以使 `s` 等于 `target` ，返回 `true` ，否则，返回 `false` 。

---

- **示例 1：**

```txt
输入：s = "1010", target = "0110"
输出：true
解释：可以执行下述操作：
- 选择 i = 2 和 j = 0 ，得到 s = "0010".
- 选择 i = 2 和 j = 1 ，得到 s = "0110".
可以使 s 等于 target ，返回 true 。
```

- **示例 2：**

```txt
输入：s = "11", target = "00"
输出：false
解释：执行任意次操作都无法使 s 等于 target 。
```

---

**提示：**

- `n == s.length == target.length`
- `2 <= n <= 10^5`
- `s` 和 `target` 仅由数字 `0` 和 `1` 组成

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
