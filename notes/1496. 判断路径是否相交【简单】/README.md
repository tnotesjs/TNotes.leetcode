# [1496. 判断路径是否相交【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1496.%20%E5%88%A4%E6%96%AD%E8%B7%AF%E5%BE%84%E6%98%AF%E5%90%A6%E7%9B%B8%E4%BA%A4%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希集合判重](#2--s1---哈希集合判重)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/path-crossing/)

给你一个字符串 `path`，其中 `path[i]` 的值可以是 `'N'`、`'S'`、`'E'` 或者 `'W'`，分别表示向北、向南、向东、向西移动一个单位。

你从二维平面上的原点 `(0, 0)` 处开始出发，按 `path` 所指示的路径行走。

如果路径在任何位置上与自身相交，也就是走到之前已经走过的位置，请返回 `true` ；否则，返回 `false`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-23-57.png)

```txt
输入：path = "NES"
输出：false
解释：该路径没有在任何位置相交。
```

示例 2：

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

## 2. 🎯 s.1 - 哈希集合判重

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，遍历路径长度
- 空间复杂度：$O(n)$，哈希集合存储已访问坐标

解题思路：

- 从原点出发，使用哈希集合记录访问过的坐标（字符串编码为 `"x,y"`）
- 依次按指令移动，更新坐标后检查是否已出现过，若出现则路径相交返回 `true`
- 遍历结束未相交则返回 `false`
