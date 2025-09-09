# [0017. 电话号码的字母组合【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0017.%20%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字  `2-9`  的字符串，返回所有它能表示的字母组合。答案可以按 **任意顺序** 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-21-17-48.png)

---

- **示例 1：**

```txt
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

- **示例 2：**

```txt
输入：digits = ""
输出：[]
```

- **示例 3：**

```txt
输入：digits = "2"
输出：["a","b","c"]
```

---

**提示：**

- `0 <= digits.length <= 4`
- `digits[i]` 是范围 `['2', '9']` 的一个数字。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
