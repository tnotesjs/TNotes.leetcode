# [2443. 反转之后的数字和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2443.%20%E5%8F%8D%E8%BD%AC%E4%B9%8B%E5%90%8E%E7%9A%84%E6%95%B0%E5%AD%97%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 枚举](#2--s1---枚举)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-number-and-its-reverse/)

给你一个 非负 整数 `num`。如果存在某个 非负 整数 `k` 满足 `k + reverse(k) = num`，则返回 `true` ；否则，返回 `false`。

`reverse(k)` 表示 `k` 反转每个数位后得到的数字。

---

示例 1：

```txt
输入：num = 443
输出：true
解释：172 + 271 = 443，所以返回 true。
```

示例 2：

```txt
输入：num = 63
输出：false
解释：63 不能表示为非负整数及其反转后数字之和，返回 false。
```

示例 3：

```txt
输入：num = 181
输出：true
解释：140 + 041 = 181，所以返回 true。注意，反转后的数字可能包含前导零。
```

---

提示：

- `0 <= num <= 10^5`

## 2. 🎯 s.1 - 枚举

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times d)$，其中 n 是 num 的大小，d 是位数
- 空间复杂度：$O(d)$，字符串反转空间

算法思路：

- 从 0 到 num 枚举每个整数 i
- 计算 i + reverse(i)，若等于 num 则返回 true
- 遍历完毕无匹配则返回 false
