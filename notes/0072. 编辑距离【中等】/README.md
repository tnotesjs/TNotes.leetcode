# [0072. 编辑距离【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0072.%20%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 动态规划（滚动数组）](#2--s1---动态规划滚动数组)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/edit-distance/)

给你两个单词 `word1` 和 `word2`， _请返回将 `word1` 转换成 `word2` 所使用的最少操作数_。

你可以对一个单词进行如下三种操作：

- 插入一个字符
- 删除一个字符
- 替换一个字符

示例 1：

```txt
输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
```

示例 2：

```txt
输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
```

---

提示：

- `0 <= word1.length, word2.length <= 500`
- `word1` 和 `word2` 由小写英文字母组成

## 2. 🎯 s.1 - 动态规划（滚动数组）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 m 和 n 分别是两个字符串的长度
- 空间复杂度：$O(n)$，只使用一维滚动数组

算法思路：

- 状态定义：`dp[j]` 表示 `word1[0..i-1]` 转换为 `word2[0..j-1]` 的最少操作数
- 边界：`dp[j] = j`（word1 为空时需插入 j 次），`dp[0] = i`（word2 为空时需删除 i 次）
- 状态转移：
  - 若 `word1[i-1] == word2[j-1]`，则 `dp[j] = prev`（无需操作）
  - 否则 `dp[j] = min(prev, dp[j], dp[j-1]) + 1`（分别对应替换、删除、插入）
- 用 `prev` 变量保存滚动更新前的左上角值 `dp[i-1][j-1]`
