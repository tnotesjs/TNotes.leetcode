# [1079. 活字印刷【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1079.%20%E6%B4%BB%E5%AD%97%E5%8D%B0%E5%88%B7%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/letter-tile-possibilities/)

你有一套活字字模 `tiles`，其中每个字模上都刻有一个字母 `tiles[i]`。返回你可以印出的非空字母序列的数目。

---

注意： 本题中，每个活字字模只能使用一次。

---

- 示例 1：

```txt
输入："AAB"
输出：8
解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
```

- 示例 2：

```txt
输入："AAABBC"
输出：188
```

- 示例 3：

```txt
输入："V"
输出：1
```

---

提示：

- `1 <= tiles.length <= 7`
- `tiles` 由大写英文字母组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
