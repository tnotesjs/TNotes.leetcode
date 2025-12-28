# [2710. 移除字符串中的尾随零【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2710.%20%E7%A7%BB%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%B0%BE%E9%9A%8F%E9%9B%B6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/remove-trailing-zeros-from-a-string/)

给你一个用字符串表示的正整数 `num` ，请你以字符串形式返回不含尾随零的整数 `num`。

---

示例 1：

```txt
输入：num = "51230100"
输出："512301"
解释：整数 "51230100" 有 2 个尾随零，移除并返回整数 "512301"。
```

示例 2：

```txt
输入：num = "123"
输出："123"
解释：整数 "123" 不含尾随零，返回整数 "123"。
```

---

提示：

- `1 <= num.length <= 1000`
- `num` 仅由数字 `0` 到 `9` 组成
- `num` 不含前导零

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
