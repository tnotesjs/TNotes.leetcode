# [0873. 最长的斐波那契子序列的长度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0873.%20%E6%9C%80%E9%95%BF%E7%9A%84%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E5%AD%90%E5%BA%8F%E5%88%97%E7%9A%84%E9%95%BF%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/length-of-longest-fibonacci-subsequence)

如果序列  `x1, x2, ..., xn`  满足下列条件，就说它是  *斐波那契式*  的：

- `n >= 3`
- 对于所有  `i + 2 <= n`，都有  `xi + xi+1 == xi+2`

给定一个  **严格递增**  的正整数数组形成序列 `arr` ，找到 `arr`  中最长的斐波那契式的子序列的长度。如果不存在，返回   `0` 。

**子序列** 是通过从另一个序列 `arr` 中删除任意数量的元素（包括删除 0 个元素）得到的，同时不改变剩余元素顺序。例如，`[3, 5, 8]` 是 `[3, 4, 5, 6, 7, 8]`  的子序列。

---

- **示例 1：**

```txt
输入: arr = [1,2,3,4,5,6,7,8]
输出: 5
解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。
```

**示例  2：**

```txt
输入: arr = [1,3,7,11,12,14,18]
输出: 3
解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。
```

---

**提示：**

- `3 <= arr.length <= 1000`
- `1 <= arr[i] < arr[i + 1] <= 10^9`

:::

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
