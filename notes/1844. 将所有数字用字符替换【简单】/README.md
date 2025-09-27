# [1844. 将所有数字用字符替换【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1844.%20%E5%B0%86%E6%89%80%E6%9C%89%E6%95%B0%E5%AD%97%E7%94%A8%E5%AD%97%E7%AC%A6%E6%9B%BF%E6%8D%A2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/replace-all-digits-with-characters/)

给你一个下标从 **0** 开始的字符串 `s` ，它的 **偶数** 下标处为小写英文字母，**奇数** 下标处为数字。

定义一个函数 `shift(c, x)` ，其中 `c` 是一个字符且 `x` 是一个数字，函数返回字母表中 `c` 后面第 `x` 个字符。

- 比方说，`shift('a', 5) = 'f'` 和 `shift('x', 0) = 'x'` 。

对于每个 **奇数** 下标 `i` ，你需要将数字 `s[i]` 用 `shift(s[i-1], s[i])` 替换。

请你替换所有数字以后，将字符串 `s` 返回。题目 **保证** `shift(s[i-1], s[i])` 不会超过 `'z'` 。

---

- **示例 1：**

```txt
输入：s = "a1c1e1"
输出："abcdef"
解释：数字被替换结果如下：
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'
```

- **示例 2：**

```txt
输入：s = "a1b2c3d4e"
输出："abbdcfdhe"
解释：数字被替换结果如下：
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'
```

---

**提示：**

- `1 <= s.length <= 100`
- `s` 只包含小写英文字母和数字。
- 对所有 **奇数** 下标处的 `i` ，满足 `shift(s[i-1], s[i]) <= 'z'` 。

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
