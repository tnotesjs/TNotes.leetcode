# [1311. 获取你好友已观看的视频【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1311.%20%E8%8E%B7%E5%8F%96%E4%BD%A0%E5%A5%BD%E5%8F%8B%E5%B7%B2%E8%A7%82%E7%9C%8B%E7%9A%84%E8%A7%86%E9%A2%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/get-watched-videos-by-your-friends/)

有 `n` 个人，每个人都有一个 `0` 到 `n-1` 的唯一 _id_。

给你数组 `watchedVideos` 和 `friends`，其中 `watchedVideos[i]` 和 `friends[i]` 分别表示 `id = i` 的人观看过的视频列表和他的好友列表。

Level 1 的视频包含所有你好友观看过的视频，level 2 的视频包含所有你好友的好友观看过的视频，以此类推。一般的，Level 为 k 的视频包含所有从你出发，最短距离为 k 的好友观看过的视频。

给定你的 `id` 和一个 `level` 值，请你找出所有指定 `level` 的视频，并将它们按观看频率升序返回。如果有频率相同的视频，请将它们按字母顺序从小到大排列。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-19-06-26-55.png)

```txt
输入：watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 1
输出：["B","C"]
解释：
你的 id 为 0（绿色），你的朋友包括（黄色）：
id 为 1 -> watchedVideos = ["C"]
id 为 2 -> watchedVideos = ["B","C"]
你朋友观看过视频的频率为：
B -> 1
C -> 2
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-19-06-27-00.png)

```txt
输入：watchedVideos = [["A","B"],["C"],["B","C"],["D"]], friends = [[1,2],[0,3],[0,3],[1,2]], id = 0, level = 2
输出：["D"]
解释：
你的 id 为 0（绿色），你朋友的朋友只有一个人，他的 id 为 3（黄色）。
```

---

提示：

- `n == watchedVideos.length == friends.length`
- `2 <= n <= 100`
- `1 <= watchedVideos[i].length <= 100`
- `1 <= watchedVideos[i][j].length <= 8`
- `0 <= friends[i].length < n`
- `0 <= friends[i][j] < n`
- `0 <= id < n`
- `1 <= level < n`
- 如果 `friends[i]` 包含 `j`，那么 `friends[j]` 包含 `i`

## 2. 🎯 s.1 - BFS + 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n + V \log V)$，其中 $n$ 是人数，$V$ 是视频总数
- 空间复杂度：$O(n + V)$，visited 数组和哈希表的空间

算法思路：

- 从 id 出发进行 BFS，扩展恰好 level 层，找到所有第 level 层的好友
- 统计这些好友观看过的视频频率，存入哈希表
- 按频率升序、同频率按字母序排序后返回
