# [0796. 旋转字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0796.%20%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟旋转](#2--s1---模拟旋转)
- [3. 🎯 s.2 - 利用字符串的周期性](#3--s2---利用字符串的周期性)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rotate-string/)

---

- 给定两个字符串, `s` 和 `goal`。
- 如果在若干次旋转操作之后，`s` 能变成 `goal` ，那么返回 `true`。
- `s` 的 旋转操作 就是将 `s` 最左边的字符移动到最右边。
- 例如, 若 `s = 'abcde'`，在旋转一次之后结果就是`'bcdea'`。

---

- 示例 1：

```txt
输入: s = "abcde", goal = "cdeab"
输出: true
```

- 示例 2：

```txt
输入: s = "abcde", goal = "abced"
输出: false
```

---

提示：

- `1 <= s.length, goal.length <= 100`
- `s` 和 `goal` 由小写英文字母组成

## 2. 🎯 s.1 - 模拟旋转

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n^2)$，其中 n 是字符串的长度，需要进行 n 次旋转，每次旋转和比较需要 $O(n)$ 时间
- 空间复杂度：$O(n)$，每次旋转都需要创建新的字符串

## 3. 🎯 s.2 - 利用字符串的周期性

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n^2)$，其中 n 是字符串的长度，字符串包含检查需要 $O(n^2)$ 时间
- 空间复杂度：$O(n)$，需要创建长度为 2n 的字符串
- 解题思路：巧妙利用字符串的周期性来求解。

```txt {9-10}
字符串 s = "abcde" 的旋转具有周期性：
旋转0次: abcde
旋转1次: bcdea
旋转2次: cdeab
旋转3次: deabc
旋转4次: eabcd
旋转5次: abcde (回到原点)

关键：所有可能的旋转结果都包含在 s+s 中
s+s = "abcdeabcde" 包含了所有旋转状态
```
