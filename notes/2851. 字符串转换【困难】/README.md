# [2851. 字符串转换【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2851.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%8D%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/string-transformation/)

给你两个长度都为 `n` 的字符串 `s` 和 `t`。你可以对字符串 `s` 执行以下操作：

- 将 `s` 长度为 `l` （`0 < l < n`）的 后缀字符串 删除，并将它添加在 `s` 的开头。  
   比方说，`s = 'abcd'`，那么一次操作中，你可以删除后缀 `'cd'`，并将它添加到 `s` 的开头，得到 `s = 'cdab'`。

给你一个整数 `k`，请你返回 恰好 `k` 次操作将 `s` 变为 `t` 的方案数。

由于答案可能很大，返回答案对 `10^9 + 7` 取余 后的结果。

---

示例 1：

```txt
输入：s = "abcd", t = "cdab", k = 2
输出：2
解释：
第一种方案：
第一次操作，选择 index = 3 开始的后缀，得到 s = "dabc"。
第二次操作，选择 index = 3 开始的后缀，得到 s = "cdab"。

第二种方案：
第一次操作，选择 index = 1 开始的后缀，得到 s = "bcda"。
第二次操作，选择 index = 1 开始的后缀，得到 s = "cdab"。
```

示例 2：

```txt
输入：s = "ababab", t = "ababab", k = 1
输出：2
解释：
第一种方案：
选择 index = 2 开始的后缀，得到 s = "ababab"。

第二种方案：
选择 index = 4 开始的后缀，得到 s = "ababab"。
```

---

提示：

- `2 <= s.length <= 5 * 10^5`
- `1 <= k <= 10^15`
- `s.length == t.length`
- `s` 和 `t` 都只包含小写英文字母。

## 2. 🎯 s.1 - KMP + 数学推导

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，其中 N 是字符串长度
- 空间复杂度：$O(N)$，KMP 失败函数数组

算法思路：

- 每次操作是将 s 循环右移若干位，k 次操作后需要总旋转量使 s 变为 t
- 用 KMP 在 s+s 中搜索 t，统计有 p 个旋转位置使 rotate(s) = t
- 推导递推公式 $h(k+1, r) = (n-1)^k - h(k, r)$，解得闭式解：$f_k = [(-1)^k \cdot (c \cdot n - p) + p \cdot (n-1)^k] / n$，其中 c = [s == t]
