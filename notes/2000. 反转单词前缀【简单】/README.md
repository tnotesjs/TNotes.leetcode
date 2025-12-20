# [2000. 反转单词前缀【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2000.%20%E5%8F%8D%E8%BD%AC%E5%8D%95%E8%AF%8D%E5%89%8D%E7%BC%80%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-prefix-of-word/)

给你一个下标从 0 开始的字符串 `word` 和一个字符 `ch` 。找出 `ch` 第一次出现的下标 `i` ，反转 `word` 中从下标 `0` 开始、直到下标 `i` 结束（含下标 `i` ）的那段字符。如果 `word` 中不存在字符 `ch` ，则无需进行任何操作。

- 例如，如果 `word = "abcdefd"` 且 `ch = 'd'` ，那么你应该 反转 从下标 0 开始、直到下标 `3` 结束（含下标 `3` ）。结果字符串将会是 `"*dcba*efd"` 。

返回 结果字符串 。

---

- 示例 1：

```txt
输入：word = "abcdefd", ch = 'd'
输出："dcbaefd"
解释："d" 第一次出现在下标 3 。
反转从下标 0 到下标 3（含下标 3）的这段字符，结果字符串是 "dcbaefd" 。
```

- 示例 2：

```txt
输入：word = "xyxzxe", ch = 'z'
输出："zxyxxe"
解释："z" 第一次也是唯一一次出现是在下标 3 。
反转从下标 0 到下标 3（含下标 3）的这段字符，结果字符串是 "zxyxxe" 。
```

- 示例 3：

```txt
输入：word = "abcd", ch = 'z'
输出："abcd"
解释："z" 不存在于 word 中。
无需执行反转操作，结果字符串是 "abcd" 。
```

---

提示：

- `1 <= word.length <= 250`
- `word` 由小写英文字母组成
- `ch` 是一个小写英文字母

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
