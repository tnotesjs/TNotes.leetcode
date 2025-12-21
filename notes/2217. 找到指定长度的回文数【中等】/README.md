# [2217. 找到指定长度的回文数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2217.%20%E6%89%BE%E5%88%B0%E6%8C%87%E5%AE%9A%E9%95%BF%E5%BA%A6%E7%9A%84%E5%9B%9E%E6%96%87%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-palindrome-with-fixed-length/)

给你一个整数数组 `queries` 和一个 正 整数 `intLength` ，请你返回一个数组 `answer` ，其中 `answer[i]` 是长度为 `intLength` 的 正回文数 中第 `queries[i]` 小的数字，如果不存在这样的回文数，则为 `-1` 。

回文数 指的是从前往后和从后往前读一模一样的数字。回文数不能有前导 0 。

---

- 示例 1：

```txt
输入：queries = [1,2,3,4,5,90], intLength = 3
输出：[101,111,121,131,141,999]
解释：
长度为 3 的最小回文数依次是：
101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202, ...
第 90 个长度为 3 的回文数是 999 。
```

- 示例 2：

```txt
输入：queries = [2,4,6], intLength = 4
输出：[1111,1331,1551]
解释：
长度为 4 的前 6 个回文数是：
1001, 1111, 1221, 1331, 1441 和 1551 。
```

---

提示：

- `1 <= queries.length <= 5 * 10^4`
- `1 <= queries[i] <= 10^9`
- `1 <= intLength <= 15`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
