# [2271. 毯子覆盖的最多白色砖块数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2271.%20%E6%AF%AF%E5%AD%90%E8%A6%86%E7%9B%96%E7%9A%84%E6%9C%80%E5%A4%9A%E7%99%BD%E8%89%B2%E7%A0%96%E5%9D%97%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-white-tiles-covered-by-a-carpet/)

给你一个二维整数数组 `tiles` ，其中 `tiles[i] = [li, ri]` ，表示所有在 `li <= j <= ri` 之间的每个瓷砖位置 `j` 都被涂成了白色。

同时给你一个整数 `carpetLen` ，表示可以放在 **任何位置** 的一块毯子的长度。

请你返回使用这块毯子，**最多** 可以盖住多少块瓷砖。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-46-00.png)

```txt
输入：tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10
输出：9
解释：将毯子从瓷砖 10 开始放置。
总共覆盖 9 块瓷砖，所以返回 9 。
注意可能有其他方案也可以覆盖 9 块瓷砖。
可以看出，瓷砖无法覆盖超过 9 块瓷砖。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-46-12.png)

```txt
输入：tiles = [[10,11],[1,1]], carpetLen = 2
输出：2
解释：将毯子从瓷砖 10 开始放置。
总共覆盖 2 块瓷砖，所以我们返回 2 。
```

---

**提示：**

- `1 <= tiles.length <= 5 * 10^4`
- `tiles[i].length == 2`
- `1 <= li <= ri <= 10^9`
- `1 <= carpetLen <= 10^9`
- `tiles` 互相 **不会重叠** 。

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
