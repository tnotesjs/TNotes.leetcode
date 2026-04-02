# [0848. 字母移位【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0848.%20%E5%AD%97%E6%AF%8D%E7%A7%BB%E4%BD%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 后缀和](#2--s1---后缀和)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/shifting-letters/)

有一个由小写字母组成的字符串 `s`，和一个长度相同的整数数组 `shifts`。

我们将字母表中的下一个字母称为原字母的 _移位_ `shift()` （由于字母表是环绕的， `'z'` 将会变成 `'a'`）。

- 例如，`shift('a') = 'b',` `shift('t') = 'u'`, 以及 `shift('z') = 'a'`。

对于每个 `shifts[i] = x`， 我们会将 `s` 中的前 `i + 1` 个字母移位 `x` 次。

返回 _将所有这些移位都应用到 `s` 后最终得到的字符串_。

---

示例 1：

```txt
输入：s = "abc", shifts = [3,5,9]
输出："rpl"
解释：
我们以 "abc" 开始。
将 S 中的第 1 个字母移位 3 次后，我们得到 "dbc"。
再将 S 中的前 2 个字母移位 5 次后，我们得到 "igc"。
最后将 S 中的这 3 个字母移位 9 次后，我们得到答案 "rpl"。
```

示例 2：

```txt
输入: s = "aaa", shifts = [1,2,3]
输出: "gfd"
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 由小写英文字母组成
- `shifts.length == s.length`
- `0 <= shifts[i] <= 10^9`

​​​​​​

## 2. 🎯 s.1 - 后缀和

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串长度
- 空间复杂度：$O(n)$

算法思路：

- 从右向左累加移位量，每个位置的总移位 = 后缀和
- 对每个字符应用总移位量并取模 26
