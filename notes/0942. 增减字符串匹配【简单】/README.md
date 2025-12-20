# [0942. 增减字符串匹配【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0942.%20%E5%A2%9E%E5%87%8F%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%8C%B9%E9%85%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针（low/high 贪心）](#2--s1---双指针lowhigh-贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/di-string-match/)

由范围 `[0,n]` 内所有整数组成的 `n + 1` 个整数的排列序列可以表示为长度为 `n` 的字符串 `s` ，其中:

- 如果 d `perm[i] < perm[i + 1]`d ，那么 d `s[i] == 'I'`
- 如果 d `perm[i] > perm[i + 1]`d ，那么 `s[i] == 'D'`

给定一个字符串 `s` ，重构排列 d `perm` 并返回它。如果有多个有效排列 perm，则返回其中任何一个。

---

- 示例 1：

```txt
输入：s = "IDID"
输出：[0,4,1,3,2]
```

- 示例 2：

```txt
输入：s = "III"
输出：[0,1,2,3]
```

- 示例 3：

```txt
输入：s = "DDI"
输出：[3,2,0,1]
```

---

提示：

- `1 <= s.length <= 10^5`
- `s` 只包含字符 `"I"` 或 `"D"`

## 2. 🎯 s.1 - 双指针（low/high 贪心）

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，单次遍历字符串
- 空间复杂度：$O(1)$，除返回结果外仅用常数变量

解题思路：

- 维护两个边界：`low=0` 与 `high=n`
- 遇到 `'I'` 取当前最小值并令 `low++`；遇到 `'D'` 取当前最大值并令 `high--`
- 遍历结束时 `low==high`，将最后一个位置赋为该值
- 该策略保证相邻关系满足增减要求，且一次构造完成
