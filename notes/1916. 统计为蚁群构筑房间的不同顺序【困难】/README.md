# [1916. 统计为蚁群构筑房间的不同顺序【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1916.%20%E7%BB%9F%E8%AE%A1%E4%B8%BA%E8%9A%81%E7%BE%A4%E6%9E%84%E7%AD%91%E6%88%BF%E9%97%B4%E7%9A%84%E4%B8%8D%E5%90%8C%E9%A1%BA%E5%BA%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-ways-to-build-rooms-in-an-ant-colony/)

你是一只蚂蚁，负责为蚁群构筑 `n` 间编号从 `0` 到 `n-1` 的新房间。给你一个 下标从 0 开始 且长度为 `n` 的整数数组 `prevRoom` 作为扩建计划。其中，`prevRoom[i]` 表示在构筑房间 `i` 之前，你必须先构筑房间 `prevRoom[i]` ，并且这两个房间必须 直接 相连。房间 `0` 已经构筑完成，所以 `prevRoom[0] = -1` 。扩建计划中还有一条硬性要求，在完成所有房间的构筑之后，从房间 `0` 可以访问到每个房间。

你一次只能构筑 一个 房间。你可以在 已经构筑好的 房间之间自由穿行，只要这些房间是 相连的 。如果房间 `prevRoom[i]` 已经构筑完成，那么你就可以构筑房间 `i`。

返回你构筑所有房间的 不同顺序的数目 。由于答案可能很大，请返回对 `10^9 + 7` 取余 的结果。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-07-20.png)

```txt
输入：prevRoom = [-1,0,1]
输出：1
解释：仅有一种方案可以完成所有房间的构筑：0 → 1 → 2
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-07-27.png)

```txt
输入：prevRoom = [-1,0,0,1,2]
输出：6
解释：
有 6 种不同顺序：
0 → 1 → 3 → 2 → 4
0 → 2 → 4 → 1 → 3
0 → 1 → 2 → 3 → 4
0 → 1 → 2 → 4 → 3
0 → 2 → 1 → 3 → 4
0 → 2 → 1 → 4 → 3
```

---

提示：

- `n == prevRoom.length`
- `2 <= n <= 10^5`
- `prevRoom[0] == -1`
- 对于所有的 `1 <= i < n` ，都有 `0 <= prevRoom[i] < n`
- 题目保证所有房间都构筑完成后，从房间 `0` 可以访问到每个房间

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
