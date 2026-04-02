# [0522. 最长特殊序列 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0522.%20%E6%9C%80%E9%95%BF%E7%89%B9%E6%AE%8A%E5%BA%8F%E5%88%97%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 枚举 + 子序列判定](#2--s1---枚举--子序列判定)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-uncommon-subsequence-ii/)

给定字符串列表 `strs`，返回其中 最长的特殊序列 的长度。如果最长特殊序列不存在，返回 `-1`。

特殊序列 定义如下：该序列为某字符串 独有的子序列（即不能是其他字符串的子序列）。

`s` 的 子序列可以通过删去字符串 `s` 中的某些字符实现。

- 例如，`"abc"` 是 `"aebdc"` 的子序列，因为您可以删除`"aebdc"`中的下划线字符来得到 `"abc"`。`"aebdc"`的子序列还包括`"aebdc"`、 `"aeb"` 和 "" (空字符串)。

---

示例 1：

```txt
输入: strs = ["aba","cdc","eae"]
输出: 3
```

示例 2：

```txt
输入: strs = ["aaa","aaa","aa"]
输出: -1
```

---

提示：

- `2 <= strs.length <= 50`
- `1 <= strs[i].length <= 10`
- `strs[i]` 只包含小写英文字母

## 2. 🎯 s.1 - 枚举 + 子序列判定

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2 \times l)$，其中 $n$ 是字符串数量，$l$ 是字符串最大长度
- 空间复杂度：$O(1)$

算法思路：

- 对每个字符串，检查它是否是其它任何字符串的子序列
- 若不是任何其它字符串的子序列，则它是“特殊序列”
- 取所有特殊序列中的最大长度
