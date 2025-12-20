# [3168. 候诊室中的最少椅子数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3168.%20%E5%80%99%E8%AF%8A%E5%AE%A4%E4%B8%AD%E7%9A%84%E6%9C%80%E5%B0%91%E6%A4%85%E5%AD%90%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-chairs-in-a-waiting-room/)

给你一个字符串 `s`，模拟每秒钟的事件 `i`：

- 如果 `s[i] == 'E'`，表示有一位顾客进入候诊室并占用一把椅子。
- 如果 `s[i] == 'L'`，表示有一位顾客离开候诊室，从而释放一把椅子。

返回保证每位进入候诊室的顾客都能有椅子坐的 最少 椅子数，假设候诊室最初是 空的 。

---

- 示例 1：

输入： s = "EEEEEEE"

输出： 7

解释：

每秒后都有一个顾客进入候诊室，没有人离开。因此，至少需要 7 把椅子。

---

- 示例 2：

输入： s = "ELELEEL"

输出： 2

解释：

假设候诊室里有 2 把椅子。下表显示了每秒钟等候室的状态。

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-03-25.png)

---

- 示例 3：

输入： s = "ELEELEELLL"

输出： 3

解释：

假设候诊室里有 3 把椅子。下表显示了每秒钟等候室的状态。

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-03-55.png)

---

提示：

- `1 <= s.length <= 50`
- `s` 仅由字母 `'E'` 和 `'L'` 组成。
- `s` 表示一个有效的进出序列。

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
