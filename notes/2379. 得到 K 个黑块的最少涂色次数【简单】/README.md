# [2379. 得到 K 个黑块的最少涂色次数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2379.%20%E5%BE%97%E5%88%B0%20K%20%E4%B8%AA%E9%BB%91%E5%9D%97%E7%9A%84%E6%9C%80%E5%B0%91%E6%B6%82%E8%89%B2%E6%AC%A1%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/)

给你一个长度为 `n` 下标从 0 开始的字符串 `blocks` ，`blocks[i]` 要么是 `'W'` 要么是 `'B'` ，表示第 `i` 块的颜色。字符 `'W'` 和 `'B'` 分别表示白色和黑色。

给你一个整数 `k` ，表示想要 连续 黑色块的数目。

每一次操作中，你可以选择一个白色块将它 涂成 黑色块。

请你返回至少出现 一次 连续 `k` 个黑色块的 最少 操作次数。

---

- 示例 1：

```txt
输入：blocks = "WBBWWBBWBW", k = 7
输出：3
解释：
一种得到 7 个连续黑色块的方法是把第 0 ，3 和 4 个块涂成黑色。
得到 blocks = "BBBBBBBWBW"。
可以证明无法用少于 3 次操作得到 7 个连续的黑块。
所以我们返回 3。
```

- 示例 2：

```txt
输入：blocks = "WBWBBBW", k = 2
输出：0
解释：
不需要任何操作，因为已经有 2 个连续的黑块。
所以我们返回 0。
```

---

提示：

- `n == blocks.length`
- `1 <= n <= 100`
- `blocks[i]` 要么是 `'W'` ，要么是 `'B'`。
- `1 <= k <= n`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
