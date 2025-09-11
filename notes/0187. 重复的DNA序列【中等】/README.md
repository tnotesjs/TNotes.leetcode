# [0187. 重复的DNA序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0187.%20%E9%87%8D%E5%A4%8D%E7%9A%84DNA%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/repeated-dna-sequences/)

**DNA 序列** 由一系列核苷酸组成，缩写为 `'A'`,`'C'`,`'G'` 和 `'T'`.。

- 例如，`"ACGAATTCCG"` 是一个 **DNA 序列** 。

在研究 **DNA** 时，识别 DNA 中的重复序列非常有用。

给定一个表示 **DNA 序列** 的字符串 `s` ，返回所有在 DNA 分子中出现不止一次的 **长度为 `10`** 的序列(子字符串)。你可以按 **任意顺序** 返回答案。

---

- **示例 1：**

```txt
输入：s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
输出：["AAAAACCCCC","CCCCCAAAAA"]
```

- **示例 2：**

```txt
输入：s = "AAAAAAAAAAAAA"
输出：["AAAAAAAAAA"]
```

---

**提示：**

- `0 <= s.length <= 10^5`
- `s[i]=='A'`、`'C'`、`'G'`or`'T'`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
