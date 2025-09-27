# [2661. 找出叠涂元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2661.%20%E6%89%BE%E5%87%BA%E5%8F%A0%E6%B6%82%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/first-completely-painted-row-or-column/)

给你一个下标从 **0** 开始的整数数组 `arr` 和一个 `m x n` 的整数 **矩阵** `mat` 。`arr` 和 `mat` 都包含范围 `[1，m * n]` 内的 **所有** 整数。

从下标 `0` 开始遍历 `arr` 中的每个下标 `i` ，并将包含整数 `arr[i]` 的 `mat` 单元格涂色。

请你找出 `arr` 中第一个使得  `mat` 的某一行或某一列都被涂色的元素，并返回其下标 `i` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-22-52-15.png)

```txt
输入：arr = [1,3,4,2], mat = [[1,4],[2,3]]
输出：2
解释：遍历如上图所示，arr[2] 在矩阵中的第一行或第二列上都被涂色。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-22-52-30.png)

```txt
输入：arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]
输出：3
解释：遍历如上图所示，arr[3] 在矩阵中的第二列上都被涂色。
```

---

**提示：**

- `m == mat.length`
- `n = mat[i].length`
- `arr.length == m * n`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `1 <= arr[i], mat[r][c] <= m * n`
- `arr` 中的所有整数 **互不相同**
- `mat` 中的所有整数 **互不相同**

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
