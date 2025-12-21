# [2337. 移动片段得到字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2337.%20%E7%A7%BB%E5%8A%A8%E7%89%87%E6%AE%B5%E5%BE%97%E5%88%B0%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/move-pieces-to-obtain-a-string/)

给你两个字符串 `start` 和 `target` ，长度均为 `n` 。每个字符串 仅 由字符 `'L'`、`'R'` 和 `'_'` 组成，其中：

- 字符 `'L'` 和 `'R'` 表示片段，其中片段 `'L'` 只有在其左侧直接存在一个 空位 时才能向 左 移动，而片段 `'R'` 只有在其右侧直接存在一个 空位 时才能向 右 移动。
- 字符 `'_'` 表示可以被 任意 `'L'` 或 `'R'` 片段占据的空位。

如果在移动字符串 `start` 中的片段任意次之后可以得到字符串 `target` ，返回 `true` ；否则，返回 `false` 。

---

- 示例 1：

```txt
输入：start = "_L__R__R_", target = "L______RR"
输出：true
解释：可以从字符串 start 获得 target ，需要进行下面的移动：
- 将第一个片段向左移动一步，字符串现在变为 "L___R__R_" 。
- 将最后一个片段向右移动一步，字符串现在变为 "L___R___R" 。
- 将第二个片段向右移动三步，字符串现在变为 "L______RR" 。
可以从字符串 start 得到 target ，所以返回 true 。
```

- 示例 2：

```txt
输入：start = "R_L_", target = "__LR"
输出：false
解释：字符串 start 中的 'R' 片段可以向右移动一步得到 "_RL_" 。
但是，在这一步之后，不存在可以移动的片段，所以无法从字符串 start 得到 target 。
```

- 示例 3：

```txt
输入：start = "_R", target = "R_"
输出：false
解释：字符串 start 中的片段只能向右移动，所以无法从字符串 start 得到 target 。
```

---

提示：

- `n == start.length == target.length`
- `1 <= n <= 10^5`
- `start` 和 `target` 由字符 `'L'`、`'R'` 和 `'_'` 组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
