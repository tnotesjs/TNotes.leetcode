# [1743. 从相邻元素对还原数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1743.%20%E4%BB%8E%E7%9B%B8%E9%82%BB%E5%85%83%E7%B4%A0%E5%AF%B9%E8%BF%98%E5%8E%9F%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/restore-the-array-from-adjacent-pairs/)

存在一个由 `n` 个不同元素组成的整数数组 `nums`，但你已经记不清具体内容。好在你还记得 `nums` 中的每一对相邻元素。

给你一个二维整数数组 `adjacentPairs`，大小为 `n - 1`，其中每个 `adjacentPairs[i] = [ui, vi]` 表示元素 `ui` 和 `vi` 在 `nums` 中相邻。

题目数据保证所有由元素 `nums[i]` 和 `nums[i+1]` 组成的相邻元素对都存在于 `adjacentPairs` 中，存在形式可能是 `[nums[i], nums[i+1]]`，也可能是 `[nums[i+1], nums[i]]`。这些相邻元素对可以 按任意顺序 出现。

返回 原始数组 `nums`。如果存在多种解答，返回 其中任意一个 即可。

---

示例 1：

```txt
输入：adjacentPairs = [[2,1],[3,4],[3,2]]
输出：[1,2,3,4]
解释：数组的所有相邻元素对都在 adjacentPairs 中。
特别要注意的是，adjacentPairs[i] 只表示两个元素相邻，并不保证其 左-右 顺序。
```

示例 2：

```txt
输入：adjacentPairs = [[4,-2],[1,4],[-3,1]]
输出：[-2,4,1,-3]
解释：数组中可能存在负数。
另一种解答是 [-3,1,4,-2]，也会被视作正确答案。
```

示例 3：

```txt
输入：adjacentPairs = [[100000,-100000]]
输出：[100000,-100000]
```

---

提示：

- `nums.length == n`
- `adjacentPairs.length == n - 1`
- `adjacentPairs[i].length == 2`
- `2 <= n <= 10^5`
- `-10^5 <= nums[i], ui, vi <= 10^5`
- 题目数据保证存在一些以 `adjacentPairs` 作为元素对的数组 `nums`

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是 adjacentPairs 的长度
- 空间复杂度：$O(n)$，邻接表的空间

算法思路：

- 构建邻接表，找到度为 1 的节点作为起点
- 从起点开始遍历整个链
- 每次移动到未访问的邻居节点
