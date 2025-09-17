# [0917. 仅仅反转字母【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0917.%20%E4%BB%85%E4%BB%85%E5%8F%8D%E8%BD%AC%E5%AD%97%E6%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-only-letters/)

给你一个字符串 `s` ，根据下述规则反转字符串：

- 所有非英文字母保留在原有位置。
- 所有英文字母（小写或大写）位置反转。

返回反转后的 `s` 。

---

- **示例 1：**

```txt
输入：s = "ab-cd"
输出："dc-ba"
```

- **示例 2：**

```txt
输入：s = "a-bC-dEf-ghIj"
输出："j-Ih-gfE-dCba"
```

- **示例 3：**

```txt
输入：s = "Test1ng-Leet=code-Q!"
输出："Qedo1ct-eeLg=ntse-T!"
```

- **提示**
  - `1 <= s.length <= 100`
  - `s` 仅由 ASCII 值在范围 `[33, 122]` 的字符组成
  - `s` 不含 `'\"'` 或 `'\\'`

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
