# [3324. 出现在屏幕上的字符串序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3324.%20%E5%87%BA%E7%8E%B0%E5%9C%A8%E5%B1%8F%E5%B9%95%E4%B8%8A%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-sequence-of-strings-appeared-on-the-screen/)

给你一个字符串 `target`。

Alice 将会使用一种特殊的键盘在她的电脑上输入 `target`，这个键盘 只有两个 按键：

- 按键 1：在屏幕上的字符串后追加字符 `'a'`。
- 按键 2：将屏幕上字符串的 最后一个 字符更改为英文字母表中的 下一个 字符。例如，`'c'` 变为 `'d'`，`'z'` 变为 `'a'`。

注意，最初屏幕上是一个*空*字符串 `""`，所以她 只能 按按键 1。

请你考虑按键次数 最少 的情况，按字符串出现顺序，返回 Alice 输入 `target` 时屏幕上出现的所有字符串列表。

---

示例 1：

输入：target = "abc"

输出：["a","aa","ab","aba","abb","abc"]

解释：

Alice 按键的顺序如下：

- 按下按键 1，屏幕上的字符串变为 `"a"`。
- 按下按键 1，屏幕上的字符串变为 `"aa"`。
- 按下按键 2，屏幕上的字符串变为 `"ab"`。
- 按下按键 1，屏幕上的字符串变为 `"aba"`。
- 按下按键 2，屏幕上的字符串变为 `"abb"`。
- 按下按键 2，屏幕上的字符串变为 `"abc"`。

---

示例 2：

输入：target = "he"

输出：["a","b","c","d","e","f","g","h","ha","hb","hc","hd","he"]

---

提示：

- `1 <= target.length <= 400`
- `target` 仅由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
