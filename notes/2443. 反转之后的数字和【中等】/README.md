# [2443. 反转之后的数字和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2443.%20%E5%8F%8D%E8%BD%AC%E4%B9%8B%E5%90%8E%E7%9A%84%E6%95%B0%E5%AD%97%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-number-and-its-reverse/)

给你一个 **非负** 整数 `num` 。如果存在某个 **非负** 整数 `k` 满足 `k + reverse(k) = num` ，则返回 `true` ；否则，返回 `false` 。

`reverse(k)` 表示 `k` 反转每个数位后得到的数字。

---

- **示例 1：**

```txt
输入：num = 443
输出：true
解释：172 + 271 = 443 ，所以返回 true 。
```

- **示例 2：**

```txt
输入：num = 63
输出：false
解释：63 不能表示为非负整数及其反转后数字之和，返回 false 。
```

- **示例 3：**

```txt
输入：num = 181
输出：true
解释：140 + 041 = 181 ，所以返回 true 。注意，反转后的数字可能包含前导零。
```

---

**提示：**

- `0 <= num <= 10^5`

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
