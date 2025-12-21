# [1496. 判断路径是否相交【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1496.%20%E5%88%A4%E6%96%AD%E8%B7%AF%E5%BE%84%E6%98%AF%E5%90%A6%E7%9B%B8%E4%BA%A4%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/path-crossing/)

给你一个字符串 `path`，其中 `path[i]` 的值可以是 `'N'`、`'S'`、`'E'` 或者 `'W'`，分别表示向北、向南、向东、向西移动一个单位。

你从二维平面上的原点 `(0, 0)` 处开始出发，按 `path` 所指示的路径行走。

如果路径在任何位置上与自身相交，也就是走到之前已经走过的位置，请返回 `true` ；否则，返回 `false` 。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-23-57.png)

```txt
输入：path = "NES"
输出：false
解释：该路径没有在任何位置相交。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-24-02.png)

```txt
输入：path = "NESWW"
输出：true
解释：该路径经过原点两次。
```

---

提示：

- `1 <= path.length <= 10^4`
- `path[i]` 为 `'N'`、`'S'`、`'E'` 或 `'W'`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
