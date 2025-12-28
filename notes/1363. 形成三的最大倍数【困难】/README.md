# [1363. 形成三的最大倍数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1363.%20%E5%BD%A2%E6%88%90%E4%B8%89%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%8D%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-multiple-of-three/)

给你一个整数数组 `digits`，你可以通过按 任意顺序 连接其中某些数字来形成 3 的倍数，请你返回所能得到的最大的 3 的倍数。

由于答案可能不在整数数据类型范围内，请以字符串形式返回答案。如果无法得到答案，请返回一个空字符串。返回的结果不应包含不必要的前导零。

---

示例 1：

```txt
输入：digits = [8,1,9]
输出："981"
```

示例 2：

```txt
输入：digits = [8,6,7,1,0]
输出："8760"
```

示例 3：

```txt
输入：digits = [1]
输出：""
```

示例 4：

```txt
输入：digits = [0,0,0,0,0,0]
输出："0"
```

---

提示：

- `1 <= digits.length <= 10^4`
- `0 <= digits[i] <= 9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
