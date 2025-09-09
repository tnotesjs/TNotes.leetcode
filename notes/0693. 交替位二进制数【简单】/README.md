# [0693. 交替位二进制数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0693.%20%E4%BA%A4%E6%9B%BF%E4%BD%8D%E4%BA%8C%E8%BF%9B%E5%88%B6%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-number-with-alternating-bits/)

给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：换句话说，就是二进制表示中相邻两位的数字永不相同。

---

- **示例 1：**

```txt
输入：n = 5
输出：true
解释：5 的二进制表示是：101
```

- **示例 2：**

```txt
输入：n = 7
输出：false
解释：7 的二进制表示是：111.
```

- **示例 3：**

```txt
输入：n = 11
输出：false
解释：11 的二进制表示是：1011.
```

---

**提示：**

- `1 <= n <= 2^31 - 1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
