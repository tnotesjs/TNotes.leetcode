# [1812. 判断国际象棋棋盘中一个格子的颜色【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1812.%20%E5%88%A4%E6%96%AD%E5%9B%BD%E9%99%85%E8%B1%A1%E6%A3%8B%E6%A3%8B%E7%9B%98%E4%B8%AD%E4%B8%80%E4%B8%AA%E6%A0%BC%E5%AD%90%E7%9A%84%E9%A2%9C%E8%89%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 奇偶判色](#2--s1---奇偶判色)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-color-of-a-chessboard-square/)

给你一个坐标 `coordinates`，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-12-26-02.png)

如果所给格子的颜色是白色，请你返回 `true`，如果是黑色，请返回 `false`。

给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。

---

示例 1：

```txt
输入：coordinates = "a1"
输出：false

解释：
如上图棋盘所示，"a1" 坐标的格子是黑色的，所以返回 false。
```

---

示例 2：

```txt
输入：coordinates = "h3"
输出：true

解释：
如上图棋盘所示，"h3" 坐标的格子是白色的，所以返回 true。
```

---

示例 3：

```txt
输入：coordinates = "c7"
输出：false
```

---

提示：

- `coordinates.length == 2`
- `'a' <= coordinates[0] <= 'h'`
- `'1' <= coordinates[1] <= '8'`

## 2. 🎯 s.1 - 奇偶判色

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，只需要常数次字符运算
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 国际象棋棋盘的颜色遵循规律：列号和行号之和的奇偶性决定格子颜色
  - 例如：
  - `'a1'` → 1+1=2（偶数）-> 黑色
  - `'h3'` → 8+3=11（奇数）-> 白色
- 计算列号+行号的和，判断奇偶性：和为奇数时是白色，和为偶数时是黑色
  - 将列号 `'a'~'h'` 映射为 `1~8`（通过 `charCodeAt(0) - 96` 实现）
  - 将行号 `'1'~'8'` 映射为 `1~8`（通过 `charCodeAt(1) - 48` 实现）
