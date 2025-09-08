# [0717. 1 比特与 2 比特字符【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0717.%201%20%E6%AF%94%E7%89%B9%E4%B8%8E%202%20%E6%AF%94%E7%89%B9%E5%AD%97%E7%AC%A6%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 暴力解法](#2--solutions1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/1-bit-and-2-bit-characters/)

有两种特殊字符：

- 第一种字符可以用一比特  `0` 表示
- 第二种字符可以用两比特（`10`  或  `11`）表示

给你一个以 `0` 结尾的二进制数组  `bits` ，如果最后一个字符必须是一个一比特字符，则返回 `true` 。

**示例  1:**

输入: bits = [1, 0, 0] 输出: true 解释: 唯一的解码方式是将其解析为一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。

**示例  2:**

输入：bits = [1,1,1,0] 输出：false 解释：唯一的解码方式是将其解析为两比特字符和两比特字符。所以最后一个字符不是一比特字符。

---

**提示:**

- `1 <= bits.length <= 1000`
- `bits[i]` 为 `0` 或 `1`

:::

## 2. 🎯 Solutions.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
