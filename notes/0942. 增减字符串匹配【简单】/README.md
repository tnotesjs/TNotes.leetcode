# [0942. 增减字符串匹配【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0942.%20%E5%A2%9E%E5%87%8F%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/di-string-match/)

由范围 `[0,n]` 内所有整数组成的 `n + 1` 个整数的排列序列可以表示为长度为 `n` 的字符串 `s` ，其中:

- 如果 d `perm[i] < perm[i + 1]`d ，那么 d `s[i] == 'I'`
- 如果 d `perm[i] > perm[i + 1]`d ，那么 `s[i] == 'D'`

给定一个字符串 `s` ，重构排列 d `perm` 并返回它。如果有多个有效排列 perm，则返回其中 **任何一个** 。

---

- **示例 1：**

```txt
输入：s = "IDID"
输出：[0,4,1,3,2]
```

- **示例 2：**

```txt
输入：s = "III"
输出：[0,1,2,3]
```

- **示例 3：**

```txt
输入：s = "DDI"
输出：[3,2,0,1]
```

---

**提示：**

- `1 <= s.length <= 10^5`
- `s` 只包含字符 d `"I"`d 或 d `"D"`

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
