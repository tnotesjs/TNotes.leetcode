# [0784. 字母大小写全排列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0784.%20%E5%AD%97%E6%AF%8D%E5%A4%A7%E5%B0%8F%E5%86%99%E5%85%A8%E6%8E%92%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯](#2--s1---回溯)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/letter-case-permutation/)

给定一个字符串 `s`，通过将字符串 `s` 中的每个字母转变大小写，我们可以获得一个新的字符串。

返回 _所有可能得到的字符串集合_。以 任意顺序 返回输出。

---

示例 1：

```txt
输入：s = "a1b2"
输出：["a1b2", "a1B2", "A1b2", "A1B2"]
```

示例 2：

```txt
输入: s = "3z4"
输出: ["3z4","3Z4"]
```

---

提示：

- `1 <= s.length <= 12`
- `s` 由小写英文字母、大写英文字母和数字组成

## 2. 🎯 s.1 - 回溯

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(2^m \times n)$，其中 m 是字母个数，n 是字符串长度
- 空间复杂度：$O(n)$，递归栈深度

算法思路：

- 逐位处理，若是数字则直接添加，若是字母则分别尝试大小写两种情况
- 每个字母位产生两个分支，最终收集所有叶子节点
