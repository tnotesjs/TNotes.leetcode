# [0115. 不同的子序列【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0115.%20%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/distinct-subsequences/)

给你两个字符串 `s` 和 `t`，统计并返回在 `s` 的 子序列 中 `t` 出现的个数。

测试用例保证结果在 32 位有符号整数范围内。

示例 1：

```txt
输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
rabbbit
rabbbit
rabbbit
```

示例 2：

```txt
输入：s = "babgbag", t = "bag"
输出：5
解释：
如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。
babgbag
babgbag
babgbag
babgbag
babgbag
```

---

提示：

- `1 <= s.length, t.length <= 1000`
- `s` 和 `t` 由英文字母组成

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
