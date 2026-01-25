# [1796. 字符串中第二大的数字【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1796.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%AC%AC%E4%BA%8C%E5%A4%A7%E7%9A%84%E6%95%B0%E5%AD%97%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/second-largest-digit-in-a-string/)

给你一个混合字符串 `s`，请你返回 `s` 中第二大的数字，如果不存在第二大的数字，请你返回 `-1`。

混合字符串由小写英文字母和数字组成。

---

示例 1：

```txt
输入：s = "dfa12321afd"
输出：2

解释：
出现在 s 中的数字包括 [1, 2, 3]。
第二大的数字是 2。
```

---

示例 2：

```txt
输入：s = "abc1111"
输出：-1

解释：
出现在 s 中的数字只包含 [1]。
没有第二大的数字。
```

---

提示：

- `1 <= s.length <= 500`
- `s` 只包含小写英文字母和（或）数字。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是字符串 s 的长度
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 初始化 `first` 和 `second` 为 -1，分别记录最大和次大数字
- 遍历字符串，跳过非数字字符
- 遇到数字时转换为数值 `v`：
  - 如果 `v` 大于 `first`，更新 `second = first`，`first = v`
  - 如果 `v` 小于 `first` 但大于 `second`，更新 `second = v`
- 返回 `second`（若不存在第二大数字则为 -1）
