# [2109. 向字符串添加空格【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2109.%20%E5%90%91%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%B7%BB%E5%8A%A0%E7%A9%BA%E6%A0%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针](#2--s1---双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/adding-spaces-to-a-string/)

给你一个下标从 0 开始的字符串 `s`，以及一个下标从 0 开始的整数数组 `spaces`。

数组 `spaces` 描述原字符串中需要添加空格的下标。每个空格都应该插入到给定索引处的字符值 之前。

- 例如，`s = "EnjoyYourCoffee"` 且 `spaces = [5, 9]`，那么我们需要在 `'Y'` 和 `'C'` 之前添加空格，这两个字符分别位于下标 `5` 和下标 `9`。因此，最终得到 `"Enjoy Your Coffee"`。

请你添加空格，并返回修改后的字符串。

---

示例 1：

```txt
输入：s = "LeetcodeHelpsMeLearn", spaces = [8,13,15]
输出："Leetcode Helps Me Learn"
解释：
下标 8、13 和 15 对应 "LeetcodeHelpsMeLearn" 中加粗斜体字符。
接着在这些字符前添加空格。
```

示例 2：

```txt
输入：s = "icodeinpython", spaces = [1,5,7,9]
输出："i code in py thon"
解释：
下标 1、5、7 和 9 对应 "icodeinpython" 中加粗斜体字符。
接着在这些字符前添加空格。
```

示例 3：

```txt
输入：s = "spacing", spaces = [0,1,2,3,4,5,6]
输出：" s p a c i n g"
解释：
字符串的第一个字符前可以添加空格。
```

---

提示：

- `1 <= s.length <= 3 * 10^5`
- `s` 仅由大小写英文字母组成
- `1 <= spaces.length <= 3 * 10^5`
- `0 <= spaces[i] <= s.length - 1`
- `spaces` 中的所有值 严格递增

## 2. 🎯 s.1 - 双指针

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + m)$，其中 n 是字符串长度，m 是 spaces 数组长度
- 空间复杂度：$O(n + m)$，用于存储结果字符串

算法思路：

- 使用指针 j 遍历 spaces 数组，指针 i 遍历字符串 s
- 当 i 等于 spaces[j] 时，在结果中插入空格并移动 j
- 依次将 s 的每个字符追加到结果数组中，最后拼接返回
