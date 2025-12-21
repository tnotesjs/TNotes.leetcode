# [1898. 可移除字符的最大数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1898.%20%E5%8F%AF%E7%A7%BB%E9%99%A4%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-removable-characters/)

给你两个字符串 `s` 和 `p` ，其中 `p` 是 `s` 的一个 子序列 。同时，给你一个元素 互不相同 且下标 从 0 开始 计数的整数数组 `removable` ，该数组是 `s` 中下标的一个子集（`s` 的下标也 从 0 开始 计数）。

请你找出一个整数 `k`（`0 <= k <= removable.length`），选出 `removable` 中的 前 `k` 个下标，然后从 `s` 中移除这些下标对应的 `k` 个字符。整数 `k` 需满足：在执行完上述步骤后， `p` 仍然是 `s` 的一个 子序列 。更正式的解释是，对于每个 `0 <= i < k` ，先标记出位于 `s[removable[i]]` 的字符，接着移除所有标记过的字符，然后检查 `p` 是否仍然是 `s` 的一个子序列。

返回你可以找出的 最大 `k` ，满足在移除字符后 `p` 仍然是 `s` 的一个子序列。

字符串的一个 子序列 是一个由原字符串生成的新字符串，生成过程中可能会移除原字符串中的一些字符（也可能不移除）但不改变剩余字符之间的相对顺序。

---

- 示例 1：

```txt
输入：s = "abcacb", p = "ab", removable = [3,1,0]
输出：2
解释：在移除下标 3 和 1 对应的字符后，"abcacb" 变成 "accb" 。
"ab" 是 "accb" 的一个子序列。
如果移除下标 3、1 和 0 对应的字符后，"abcacb" 变成 "ccb" ，那么 "ab" 就不再是 s 的一个子序列。
因此，最大的 k 是 2 。
```

- 示例 2：

```txt
输入：s = "abcbddddd", p = "abcd", removable = [3,2,1,4,5,6]
输出：1
解释：在移除下标 3 对应的字符后，"abcbddddd" 变成 "abcddddd" 。
"abcd" 是 "abcddddd" 的一个子序列。
```

- 示例 3：

```txt
输入：s = "abcab", p = "abc", removable = [0,1,2,3,4]
输出：0
解释：如果移除数组 removable 的第一个下标，"abc" 就不再是 s 的一个子序列。
```

---

提示：

- `1 <= p.length <= s.length <= 10^5`
- `0 <= removable.length < s.length`
- `0 <= removable[i] < s.length`
- `p` 是 `s` 的一个 子字符串
- `s` 和 `p` 都由小写英文字母组成
- `removable` 中的元素 互不相同

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
