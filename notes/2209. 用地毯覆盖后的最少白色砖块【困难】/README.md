# [2209. 用地毯覆盖后的最少白色砖块【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2209.%20%E7%94%A8%E5%9C%B0%E6%AF%AF%E8%A6%86%E7%9B%96%E5%90%8E%E7%9A%84%E6%9C%80%E5%B0%91%E7%99%BD%E8%89%B2%E7%A0%96%E5%9D%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-white-tiles-after-covering-with-carpets/)

给你一个下标从 **0** 开始的 **二进制** 字符串 `floor` ，它表示地板上砖块的颜色。

- `floor[i] = '0'` 表示地板上第 `i` 块砖块的颜色是 **黑色** 。
- `floor[i] = '1'` 表示地板上第 `i` 块砖块的颜色是 **白色** 。

同时给你 `numCarpets` 和 `carpetLen` 。你有 `numCarpets` 条 **黑色** 的地毯，每一条 **黑色** 的地毯长度都为 `carpetLen` 块砖块。请你使用这些地毯去覆盖砖块，使得未被覆盖的剩余 **白色** 砖块的数目 **最小** 。地毯相互之间可以覆盖。

请你返回没被覆盖的白色砖块的 **最少** 数目。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-10-27-46.png)

```txt
输入：floor = "10110101", numCarpets = 2, carpetLen = 2
输出：2
解释：
上图展示了剩余 2 块白色砖块的方案。
没有其他方案可以使未被覆盖的白色砖块少于 2 块。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-10-27-51.png)

```txt
输入：floor = "11111", numCarpets = 2, carpetLen = 3
输出：0
解释：
上图展示了所有白色砖块都被覆盖的一种方案。
注意，地毯相互之间可以覆盖。
```

---

**提示：**

- `1 <= carpetLen <= floor.length <= 1000`
- `floor[i]` 要么是 `'0'` ，要么是 `'1'` 。
- `1 <= numCarpets <= 1000`

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
