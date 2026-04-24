# [1306. 跳跃游戏 III【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1306.%20%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F%20III%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS](#2--s1---bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/jump-game-iii/)

这里有一个非负整数数组 `arr`，你最开始位于该数组的起始下标 `start` 处。当你位于下标 `i` 处时，你可以跳到 `i + arr[i]` 或者 `i - arr[i]`。

请你判断自己是否能够跳到对应元素值为 0 的任一下标处。

注意，不管是什么情况下，你都无法跳到数组之外。

---

示例 1：

```txt
输入：arr = [4, 2, 3, 0, 3, 1, 2], start = 5
输出：true
```

解释：

- 到达值为 0 的下标 3 有以下可能方案：
- 下标 5 -> 下标 4 -> 下标 1 -> 下标 3
- 下标 5 -> 下标 6 -> 下标 4 -> 下标 1 -> 下标 3

---

示例 2：

```txt
输入：arr = [4, 2, 3, 0, 3, 1, 2], start = 0
输出：true
```

解释：

- 到达值为 0 的下标 3 有以下可能方案：
- 下标 0 -> 下标 4 -> 下标 1 -> 下标 3

---

示例 3：

```txt
输入：arr = [3, 0, 2, 1, 2], start = 2
输出：false
```

- 解释：无法到达值为 0 的下标 1 处。

---

提示：

- `1 <= arr.length <= 5 * 10^4`
- `0 <= arr[i] < arr.length`
- `0 <= start < arr.length`

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是数组长度，每个位置最多入队一次
- 空间复杂度：$O(n)$，visited 数组和队列的空间

算法思路：

- 从 `start` 出发进行 BFS，每次可以跳到 `i + arr[i]` 或 `i - arr[i]`
- 使用 `visited` 数组避免重复访问
- 当访问到某个位置 `arr[i] === 0` 时返回 `true`，队列耗尽则返回 `false`
