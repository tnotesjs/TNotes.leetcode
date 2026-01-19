# [1221. 分割平衡字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1221.%20%E5%88%86%E5%89%B2%E5%B9%B3%E8%A1%A1%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数平衡](#2--s1---计数平衡)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/split-a-string-in-balanced-strings/)

平衡字符串中，`'L'` 和 `'R'` 字符的数量是相同的。

给你一个平衡字符串 `s`，请你将它分割成尽可能多的子字符串，并满足：

- 每个子字符串都是平衡字符串。

返回可以通过分割得到的平衡字符串的最大数量。

---

示例 1：

```txt
输入：s = "RLRRLLRLRL"
输出：4

解释：
s 可以分割为 "RL"、"RRLL"、"RL"、"RL"，每个子字符串中都包含相同数量的 'L' 和 'R'。
```

---

示例 2：

```txt
输入：s = "RLRRRLLRLL"
输出：2

解释：
s 可以分割为 "RL"、"RRRLLRLL"，每个子字符串中都包含相同数量的 'L' 和 'R'。
注意，s 无法分割为 "RL"、"RR"、"RL"、"LR"、"LL" 因为第 2 个和第 5 个子字符串不是平衡字符串。
```

---

示例 3：

```txt
输入：s = "LLLLRRRR"
输出：1

解释：
s 只能保持原样 "LLLLRRRR"。
```

---

提示：

- `2 <= s.length <= 1000`
- `s[i] = 'L' 或 'R'`
- `s` 是一个 平衡 字符串

## 2. 🎯 s.1 - 计数平衡

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，单次遍历累计平衡值
- 空间复杂度：$O(1)$，常数计数器

算法思路：

- 遍历字符串，遇到 `L` 让平衡值 `+1`，`R` 让平衡值 `-1`
- 每当平衡值回到 0，说明形成一个平衡段，答案加一
