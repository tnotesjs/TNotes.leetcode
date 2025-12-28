# [1071. 字符串的最大公因子【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1071.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E5%85%AC%E5%9B%A0%E5%AD%90%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 欧几里得算法](#2--s1---欧几里得算法)
  - [2.1. 欧几里得算法 - 数学原理分步解释](#21-欧几里得算法---数学原理分步解释)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/greatest-common-divisor-of-strings)

对于字符串 `s` 和 `t`，只有在 `s = t + t + t + ... + t + t`（`t` 自身连接 1 次或多次）时，我们才认定 “`t` 能除尽 `s`”。

给定两个字符串 `str1` 和 `str2`。返回 _最长字符串 `x`，要求满足 `x` 能除尽 `str1` 且 `x` 能除尽 `str2`_。

---

- 示例 1：

```txt
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
```

- 示例 2：

```txt
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
```

- 示例 3：

```txt
输入：str1 = "LEET", str2 = "CODE"
输出：""
```

---

提示：

- `1 <= str1.length, str2.length <= 1000`
- `str1` 和 `str2` 由大写英文字母组成

## 2. 🎯 s.1 - 欧几里得算法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(m + n + log(min(m, n)))$
  - 拼接并比较两个字符串：$O(m + n)$
  - 计算 GCD：$O(log(min(m, n)))$
- 空间复杂度：$O(m + n)$
  - 由于拼接 `str1 + str2` 和 `str2 + str1` 创建了两个长度为 $m+n$ 的新字符串（在 JavaScript 中字符串不可变，必须分配新空间）
- 一句话描述该解法的核心：当且仅当 `str1 + str2 == str2 + str1` 时，两个字符串有公共因子字符串；此时，最长公共因子字符串的长度等于两个字符串长度的最大公约数，且该因子就是任一字符串的前 GCD 个字符。
- 问题分析
  - 我们要找的是一个 字符串 x，使得：
    - `str1 = x + x + ... + x`（重复若干次）
    - `str2 = x + x + ... + x`（重复若干次）
  - 也就是说，x 是 str1 和 str2 的“公共因子字符串”，并且我们希望 x 是最长的这样的字符串 —— 即“最大公共因子字符串”。

### 2.1. 欧几里得算法 - 数学原理分步解释

- 1️⃣ 前提：`str1 + str2 === str2 + str1`
  - 只有满足这个交换律的字符串对，才可能存在公共因子字符串
  - 这是必要条件，如果两个字符串可以由同一个基础字符串 x 重复拼接而成，那么无论你先拼 str1 再拼 str2，还是反过来，结果都应该是相同的。

```txt
✅ 举例：
str1 = "ABCABC", str2 = "ABC"
- str1 + str2 = "ABCABCABC"
- str2 + str1 = "ABCABCABC"
- 相等，说明它们有公共因子 "ABC"

❌ 反例：
str1 = "ABAB", str2 = "ABA"
- str1 + str2 = "ABABABA"
- str2 + str1 = "ABAABAB"
- 不相等 → 无公共因子字符串
```

- 2️⃣ 如果存在公共因子 x，那么 str1 和 str2 都是 x 的重复
  - 假设：
    - str1 = x 重复 m 次 → len(str1) = m \* len(x)
    - str2 = x 重复 n 次 → len(str2) = n \* len(x)
  - 推断出：
    - len(x) 必然是 len(str1) 和 len(str2) 的 公约数
    - 最长的 x 对应的是 len(str1) 和 len(str2) 的 最大公约数（GCD）

```txt
✅ 举例：
str1 = "ABCABC" → len=6
str2 = "ABCABCABC" → len=9
GCD(6,9) = 3 → 所以 x 长度为 3 → "ABC"

验证：
- "ABC" 重复 2 次 = "ABCABC" ✔️
- "ABC" 重复 3 次 = "ABCABCABC" ✔️
```

- 3️⃣ 为什么最大公约数对应最长的公共因子？
  - 任何公共因子 x 的长度必须同时整除 len(str1) 和 len(str2)
  - 所有这样的长度构成的是 len(str1) 和 len(str2) 的“公约数集合”
  - 其中最大的那个公约数，自然对应最长的可能公共因子
  - 换句话说：最长的公共因子字符串 x 的长度 = GCD(len(str1), len(str2))
- 4️⃣ 为什么取 str1 的前缀就行？
  - 我们已经通过 `str1 + str2 === str2 + str1` 验证了它们“结构兼容”，即确实存在公共因子
  - 那么，公共因子 x 一定同时是 str1 和 str2 的前缀
  - 所以只需要取 str1（或 str2）的前 GCD 个字符，它就一定是公共因子

```txt
✅ 举例：
str1 = "ABABAB", str2 = "ABAB"
len1=6, len2=4 → GCD=2
str1.substring(0,2) = "AB"
→ "AB" 重复 3 次 = "ABABAB" ✔️
→ "AB" 重复 2 次 = "ABAB" ✔️
```
