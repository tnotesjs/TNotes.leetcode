# [2042. 检查句子中的数字是否递增【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2042.%20%E6%A3%80%E6%9F%A5%E5%8F%A5%E5%AD%90%E4%B8%AD%E7%9A%84%E6%95%B0%E5%AD%97%E6%98%AF%E5%90%A6%E9%80%92%E5%A2%9E%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 扫描比对](#2--s1---扫描比对)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/)

句子是由若干 token 组成的一个列表，token 间用 单个 空格分隔，句子没有前导或尾随空格。每个 token 要么是一个由数字 `0-9` 组成的不含前导零的 正整数，要么是一个由小写英文字母组成的 单词。

- 示例，`"a puppy has 2 eyes 4 legs"` 是一个由 7 个 token 组成的句子：`"2"` 和 `"4"` 是数字，其他像 `"puppy"` 这样的 tokens 属于单词。

给你一个表示句子的字符串 `s`，你需要检查 `s` 中的 全部 数字是否从左到右严格递增（即，除了最后一个数字，`s` 中的 每个 数字都严格小于它 右侧 的数字）。

如果满足题目要求，返回 `true`，否则，返回 `false`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-29-38.png)

```txt
输入：s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
输出：true
解释：句子中的数字是：1, 3, 4, 6, 12。
这些数字是按从左到右严格递增的 1 < 3 < 4 < 6 < 12。
```

示例 2：

```txt
输入：s = "hello world 5 x 5"
输出：false
解释：句子中的数字是：5, 5。这些数字不是严格递增的。
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-22-29-57.png)

```txt
输入：s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
输出：false
解释：s 中的数字是：7, 51, 50, 60。这些数字不是严格递增的。
```

示例 4：

```txt
输入：s = "4 5 11 26"
输出：true
解释：s 中的数字是：4, 5, 11, 26。
这些数字是按从左到右严格递增的：4 < 5 < 11 < 26。
```

---

提示：

- `3 <= s.length <= 200`
- `s` 由小写英文字母、空格和数字 `0` 到 `9` 组成（包含 `0` 和 `9`）
- `s` 中数字 token 的数目在 `2` 和 `100` 之间（包含 `2` 和 `100`）
- `s` 中的 token 之间由单个空格分隔
- `s` 中至少有 两个 数字
- `s` 中的每个数字都是一个 小于 `100` 的 正 数，且不含前导零
- `s` 不含前导或尾随空格

## 2. 🎯 s.1 - 扫描比对

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，分割 token 线性扫描数字
- 空间复杂度：$O(1)$，仅常数变量记录上一个数字

算法思路：

- 遍历句子 token，遇到数字转成整数与上一个数字比较，若不递增则返回 false；否则更新上一数，扫描结束返回 true。
