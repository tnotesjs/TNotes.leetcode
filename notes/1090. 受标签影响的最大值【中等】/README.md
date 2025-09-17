# [1090. 受标签影响的最大值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1090.%20%E5%8F%97%E6%A0%87%E7%AD%BE%E5%BD%B1%E5%93%8D%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-values-from-labels/)

以两个整数数组 `values` 和 `labels` 给定 `n` 个项的值和标签，并且给出两个整数 `numWanted` 和 `useLimit` 。

你的任务是从这些项中找到一个值的和 **最大** 的子集使得：

- 项的数量 **最多** 为 `numWanted`。
- 相同标签的项的数量 **最多** 为 `useLimit`。

返回最大的和。

---

- **示例 1：**

```txt
输入：values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1
输出：9

解释：
选择的子集是第一个、第三个和第五个项，其值之和为 5 + 3 + 1。
```

- **示例 2：**

```txt
输入：values = [5,4,3,2,1], labels = [1,3,3,3,2], numWanted = 3, useLimit = 2
输出：12

解释：
选择的子集是第一个、第二个和第三个项，其值之和为 5 + 4 + 3。
```

- **示例 3：**

```txt
输入：values = [9,8,8,7,6], labels = [0,0,0,1,1], numWanted = 3, useLimit = 1
输出：16

解释：
选择的子集是第一个和第四个项，其值之和为 9 + 7。
```

---

**提示：**

- `n == values.length == labels.length`
- `1 <= n <= 2 * 10^4`
- `0 <= values[i], labels[i] <= 2 * 10^4`
- `1 <= numWanted, useLimit <= n`

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
