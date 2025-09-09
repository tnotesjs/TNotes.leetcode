# [0231. 2 的幂【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0231.%202%20%E7%9A%84%E5%B9%82%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/power-of-two/)

给你一个整数 `n`，请你判断该整数是否是 2 的幂次方。如果是，返回 `true` ；否则，返回 `false` 。

如果存在一个整数 `x` 使得 `n == 2^x` ，则认为 `n` 是 2 的幂次方。

---

- **示例 1：**

```txt
输入：n = 1
输出：true
解释：20 = 1
```

- **示例 2：**

```txt
输入：n = 16
输出：true
解释：24 = 16
```

- **示例 3：**

```txt
输入：n = 3
输出：false
```

---

**提示：**

- `-2^31 <= n <= 2^31 - 1`

**进阶：** 你能够不使用循环/递归解决此问题吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
