# [2283. 判断一个数的数字计数是否等于数位的值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2283.%20%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E6%95%B0%E7%9A%84%E6%95%B0%E5%AD%97%E8%AE%A1%E6%95%B0%E6%98%AF%E5%90%A6%E7%AD%89%E4%BA%8E%E6%95%B0%E4%BD%8D%E7%9A%84%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-number-has-equal-digit-count-and-digit-value/)

给你一个下标从 **0** 开始长度为 `n` 的字符串 `num` ，它只包含数字。

如果对于 **每个** `0 <= i < n` 的下标 `i` ，都满足数位 `i` 在 `num` 中出现了 `num[i]`次，那么请你返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

```txt
输入：num = "1210"
输出：true
解释：
num[0] = '1' 。数字 0 在 num 中出现了一次。
num[1] = '2' 。数字 1 在 num 中出现了两次。
num[2] = '1' 。数字 2 在 num 中出现了一次。
num[3] = '0' 。数字 3 在 num 中出现了零次。
"1210" 满足题目要求条件，所以返回 true 。
```

- **示例 2：**

```txt
输入：num = "030"
输出：false
解释：
num[0] = '0' 。数字 0 应该出现 0 次，但是在 num 中出现了两次。
num[1] = '3' 。数字 1 应该出现 3 次，但是在 num 中出现了零次。
num[2] = '0' 。数字 2 在 num 中出现了 0 次。
下标 0 和 1 都违反了题目要求，所以返回 false 。
```

---

**提示：**

- `n == num.length`
- `1 <= n <= 10`
- `num` 只包含数字。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
