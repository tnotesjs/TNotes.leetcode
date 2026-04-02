# [1456. 定长子串中元音的最大数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1456.%20%E5%AE%9A%E9%95%BF%E5%AD%90%E4%B8%B2%E4%B8%AD%E5%85%83%E9%9F%B3%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 滑动窗口](#2--s1---滑动窗口)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length)

给你字符串 `s` 和整数 `k`。

请返回字符串 `s` 中长度为 `k` 的单个子字符串中可能包含的最大元音字母数。

英文中的 元音字母 为（`a`, `e`, `i`, `o`, `u`）。

示例 1：

```txt
输入：s = "abciiidef", k = 3
输出：3
解释：子字符串 "iii" 包含 3 个元音字母。
```

示例 2：

```txt
输入：s = "aeiou", k = 2
输出：2
解释：任意长度为 2 的子字符串都包含 2 个元音字母。
```

示例 3：

```txt
输入：s = "leetcode", k = 3
输出：2
解释："lee"、"eet" 和 "ode" 都包含 2 个元音字母。
```

示例 4：

```txt
输入：s = "rhythms", k = 4
输出：0
解释：字符串 s 中不含任何元音字母。
```

示例 5：

```txt
输入：s = "tryhard", k = 4
输出：1
```

提示：

- `1 <= s.length <= 10^5`
- `s` 由小写英文字母组成
- `1 <= k <= s.length`

## 2. 🎯 s.1 - 滑动窗口

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 使用固定大小为 k 的滑动窗口
- 先统计前 k 个字符中的元音数
- 窗口每右移一位，加入新字符、移除旧字符，更新元音计数并维护最大值
