# [0345. 反转字符串中的元音字母【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0345.%20%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%85%83%E9%9F%B3%E5%AD%97%E6%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针](#2--s1---双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reverse-vowels-of-a-string/)

给你一个字符串 `s` ，仅反转字符串中的所有元音字母，并返回结果字符串。

元音字母包括 `'a'`、`'e'`、`'i'`、`'o'`、`'u'`，且可能以大小写两种形式出现不止一次。

---

示例 1：

```txt
输入：s = "IceCreAm"
输出："AceCreIm"

解释：
s 中的元音是 ['I', 'e', 'e', 'A']。反转这些元音，s 变为 "AceCreIm".
```

---

示例 2：

```txt
输入：s = "leetcode"
输出："leotcede"
```

---

提示：

- `1 <= s.length <= 3 * 10^5`
- `s` 由可打印的 ASCII 字符组成

## 2. 🎯 s.1 - 双指针

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，双指针遍历一次字符串
- 空间复杂度：$O(n)$，需要将字符串转为数组

算法思路：

- 使用双指针从两端向中间移动
- 用 Set 存储所有元音字母（包括大小写）
- `left` 从左找元音，`right` 从右找元音
- 找到后交换两个元音字母，继续移动指针
- 由于 JavaScript 字符串不可变，需先转为数组操作
