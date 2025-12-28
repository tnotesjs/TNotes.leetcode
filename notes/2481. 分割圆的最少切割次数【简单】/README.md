# [2481. 分割圆的最少切割次数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2481.%20%E5%88%86%E5%89%B2%E5%9C%86%E7%9A%84%E6%9C%80%E5%B0%91%E5%88%87%E5%89%B2%E6%AC%A1%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-cuts-to-divide-a-circle/)

圆内一个 有效切割 ，符合以下二者之一：

- 该切割是两个端点在圆上的线段，且该线段经过圆心。
- 该切割是一端在圆心另一端在圆上的线段。

一些有效和无效的切割如下图所示。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-19-52.png)

给你一个整数 `n` ，请你返回将圆切割成相等的 `n` 等分的 最少 切割次数。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-19-59.png)

```txt
输入：n = 4
输出：2
解释：
上图展示了切割圆 2 次，得到四等分。
```

---

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-20-20-11.png)

```txt
输入：n = 3
输出：3
解释：
最少需要切割 3 次，将圆切成三等分。
少于 3 次切割无法将圆切成大小相等面积相同的 3 等分。
同时可以观察到，第一次切割无法将圆切割开。
```

---

提示：

- `1 <= n <= 100`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
