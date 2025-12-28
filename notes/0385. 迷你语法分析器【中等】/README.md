# [0385. 迷你语法分析器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0385.%20%E8%BF%B7%E4%BD%A0%E8%AF%AD%E6%B3%95%E5%88%86%E6%9E%90%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/mini-parser/)

给定一个字符串 s 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 `NestedInteger`。

列表中的每个元素只可能是整数或整数嵌套列表

---

示例 1：

```txt
输入：s = "324",
输出：324
解释：你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
```

示例 2：

```txt
输入：s = "[123,[456,[789]]]",
输出：[123,[456,[789]]]
解释：返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：
1. 一个 integer 包含值 123
2. 一个包含两个元素的嵌套列表：
    i.  一个 integer 包含值 456
    ii. 一个包含一个元素的嵌套列表
         a. 一个 integer 包含值 789
```

---

提示：

- `1 <= s.length <= 5 * 10^4`
- `s` 由数字、方括号 `"[]"`、负号 `'-'` 、逗号 `','`组成
- 用例保证 `s` 是可解析的 `NestedInteger`
- 输入中的所有值的范围是 `[-10^6, 10^6]`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
