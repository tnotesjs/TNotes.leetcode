# [1886. 判断矩阵经轮转后是否一致【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1886.%20%E5%88%A4%E6%96%AD%E7%9F%A9%E9%98%B5%E7%BB%8F%E8%BD%AE%E8%BD%AC%E5%90%8E%E6%98%AF%E5%90%A6%E4%B8%80%E8%87%B4%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-whether-matrix-can-be-obtained-by-rotation/)

给你两个大小为 `n x n` 的二进制矩阵 `mat` 和 `target` 。现 **以 90 度顺时针轮转** 矩阵 `mat` 中的元素 **若干次** ，如果能够使 `mat` 与  `target` 一致，返回 `true` ；否则，返回 `false` _。_

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-21-41-15.png)

```txt
输入：mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
输出：true
解释：顺时针轮转 90 度一次可以使 mat 和 target 一致。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-21-41-22.png)

```txt
输入：mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
输出：false
解释：无法通过轮转矩阵中的元素使 equal 与 target 一致。
```

- **示例 3：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-25-21-41-40.png)

```txt
输入：mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
输出：true
解释：顺时针轮转 90 度两次可以使 mat 和 target 一致。
```

---

**提示：**

- `n == mat.length == target.length`
- `n == mat[i].length == target[i].length`
- `1 <= n <= 10`
- `mat[i][j]` 和 `target[i][j]` 不是 `0` 就是 `1`

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
