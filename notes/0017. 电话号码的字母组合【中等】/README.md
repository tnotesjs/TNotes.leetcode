# [0017. 电话号码的字母组合【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0017.%20%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯](#2--s1---回溯)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字 `2-9` 的字符串，返回所有它能表示的字母组合。答案可以按任意顺序返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-09-21-17-48.png)

---

示例 1：

```txt
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

示例 2：

```txt
输入：digits = ""
输出：[]
```

示例 3：

```txt
输入：digits = "2"
输出：["a","b","c"]
```

---

提示：

- `0 <= digits.length <= 4`
- `digits[i]` 是范围 `['2', '9']` 的一个数字。

## 2. 🎯 s.1 - 回溯

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(4^n \cdot n)$，其中 $n$ 是输入数字个数（最多为 4），$4^n$ 是最多的组合数，每个组合需 $O(n)$ 构建
- 空间复杂度：$O(n)$，递归栈深度最多为 $n$（不计输出数组）

算法思路：

- 用哈希表建立数字到字母的映射
- 回渥枚举：每层取当前数字对应的每一个字母，拼接到路径 `path` 后递归处理下一个数字
- 当索引走到末尾（`index == n`）时，将当前路径加入结果集
