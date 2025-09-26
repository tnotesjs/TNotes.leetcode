# [1944. 队列中可以看到的人数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1944.%20%E9%98%9F%E5%88%97%E4%B8%AD%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E7%9A%84%E4%BA%BA%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-visible-people-in-a-queue/)

有  `n`  个人排成一个队列，**从左到右**  编号为  `0`  到  `n - 1` 。给你以一个整数数组  `heights` ，每个整数 **互不相同**，`heights[i]`  表示第  `i`  个人的高度。

一个人能 **看到** 他右边另一个人的条件是这两人之间的所有人都比他们两人 **矮** 。更正式的，第  `i`  个人能看到第  `j`  个人的条件是  `i < j`  且  `min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1])` 。

请你返回一个长度为 `n`  的数组  `answer` ，其中  `answer[i]`  是第  `i`  个人在他右侧队列中能  **看到**  的  **人数** 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-22-59.png)

```txt
输入：heights = [10,6,8,5,11,9]
输出：[3,1,2,1,1,0]
解释：
第 0 个人能看到编号为 1 ，2 和 4 的人。
第 1 个人能看到编号为 2 的人。
第 2 个人能看到编号为 3 和 4 的人。
第 3 个人能看到编号为 4 的人。
第 4 个人能看到编号为 5 的人。
第 5 个人谁也看不到因为他右边没人。
```

- **示例 2：**

```txt
输入：heights = [5,1,2,3,10]
输出：[4,1,1,1,0]
```

---

**提示：**

- `n == heights.length`
- `1 <= n <= 10^5`
- `1 <= heights[i] <= 10^5`
- `heights`  中所有数 **互不相同** 。

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
