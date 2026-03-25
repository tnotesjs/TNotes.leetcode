# [1239. 串联字符串的最大长度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1239.%20%E4%B8%B2%E8%81%94%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E9%95%BF%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-length-of-a-concatenated-string-with-unique-characters/)

给定一个字符串数组 `arr`，字符串 `s` 是将 `arr` 的含有 不同字母 的 子序列 字符串 连接 所得的字符串。

请返回所有可行解 `s` 中最长长度。

子序列 是一种可以从另一个数组派生而来的数组，通过删除某些元素或不删除元素而不改变其余元素的顺序。

---

示例 1：

```txt
输入：arr = ["un","iq","ue"]
输出：4
解释：所有可能的串联组合是：
- ""
- "un"
- "iq"
- "ue"
- "uniq" ("un" + "iq")
- "ique" ("iq" + "ue")
最大长度为 4。
```

示例 2：

```txt
输入：arr = ["cha","r","act","ers"]
输出：6
解释：可能的解答有 "chaers" 和 "acters"。
```

示例 3：

```txt
输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
输出：26
```

---

提示：

- `1 <= arr.length <= 16`
- `1 <= arr[i].length <= 26`
- `arr[i]` 中只含有小写英文字母

## 2. 🎯 s.1 - 回溯 + 位运算

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(2^n)$，其中 $n$ 是数组长度
- 空间复杂度：$O(n)$，递归栈的深度

算法思路：

- 将每个无重复字符的字符串转换为位掩码，有重复字符的直接跳过
- 回溯枚举所有可能的子序列组合，通过位与运算检查字符是否冲突
- 记录最大的无冲突字符数
