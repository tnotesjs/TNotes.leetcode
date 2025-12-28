# [2476. 二叉搜索树最近节点查询【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2476.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E6%9C%80%E8%BF%91%E8%8A%82%E7%82%B9%E6%9F%A5%E8%AF%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/closest-nodes-queries-in-a-binary-search-tree/)

给你一个 二叉搜索树 的根节点 `root` ，和一个由正整数组成、长度为 `n` 的数组 `queries`。

请你找出一个长度为 `n` 的 二维 答案数组 `answer` ，其中 `answer[i] = [mini, maxi]` ：

- `mini` 是树中小于等于 `queries[i]` 的 最大值。如果不存在这样的值，则使用 `-1` 代替。
- `maxi` 是树中大于等于 `queries[i]` 的 最小值。如果不存在这样的值，则使用 `-1` 代替。

返回数组 `answer`。

---

示例 1 ：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-18-22.png)

```txt
输入：root = [6,2,13,1,4,9,15,null,null,null,null,null,null,14], queries = [2,5,16]
输出：[[2,2],[4,6],[15,-1]]
解释：按下面的描述找出并返回查询的答案：
- 树中小于等于 2 的最大值是 2 ，且大于等于 2 的最小值也是 2。所以第一个查询的答案是 [2,2]。
- 树中小于等于 5 的最大值是 4 ，且大于等于 5 的最小值是 6。所以第二个查询的答案是 [4,6]。
- 树中小于等于 16 的最大值是 15 ，且大于等于 16 的最小值不存在。所以第三个查询的答案是 [15,-1]。
```

---

示例 2 ：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-18-28.png)

```txt
输入：root = [4,null,9], queries = [3]
输出：[[-1,4]]
解释：树中不存在小于等于 3 的最大值，且大于等于 3 的最小值是 4。所以查询的答案是 [-1,4]。
```

---

提示：

- 树中节点的数目在范围 `[2, 10^5]` 内
- `1 <= Node.val <= 10^6`
- `n == queries.length`
- `1 <= n <= 10^5`
- `1 <= queries[i] <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
