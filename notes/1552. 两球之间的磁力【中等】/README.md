# [1552. 两球之间的磁力【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1552.%20%E4%B8%A4%E7%90%83%E4%B9%8B%E9%97%B4%E7%9A%84%E7%A3%81%E5%8A%9B%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找](#2--s1---二分查找)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/magnetic-force-between-two-balls/)

在代号为 C-137 的地球上，Rick 发现如果他将两个球放在他新发明的篮子里，它们之间会形成特殊形式的磁力。Rick 有 `n` 个空的篮子，第 `i` 个篮子的位置在 `position[i]`，Morty 想把 `m` 个球放到这些篮子里，使得任意两球间 最小磁力 最大。

已知两个球如果分别位于 `x` 和 `y`，那么它们之间的磁力为 `|x - y|`。

给你一个整数数组 `position` 和一个整数 `m`，请你返回最大化的最小磁力。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-56-10.png)

```txt
输入：position = [1,2,3,4,7], m = 3
输出：3
解释：将 3 个球分别放入位于 1，4 和 7 的三个篮子，两球间的磁力分别为 [3, 3, 6]。最小磁力为 3。我们没办法让最小磁力大于 3。
```

示例 2：

```txt
输入：position = [5,4,3,2,1,1000000000], m = 2
输出：999999999
解释：我们使用位于 1 和 1000000000 的篮子时最小磁力最大。
```

---

提示：

- `n == position.length`
- `2 <= n <= 10^5`
- `1 <= position[i] <= 10^9`
- 所有 `position` 中的整数 互不相同。
- `2 <= m <= position.length`

## 2. 🎯 s.1 - 二分查找

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \log D)$，其中 $n$ 是篮子数，$D$ 是位置范围
- 空间复杂度：$O(\log n)$，排序所需的栈空间

算法思路：

- 二分查找最小磁力（答案）的最大值
- 对于每个候选最小磁力 `mid`，贪心验证能否在排序后的篮子中放下 $m$ 个球
- 验证方法：从第一个篮子开始放球，每次放球后跳过距离小于 `mid` 的篮子
- 若能放下 $m$ 个球则尝试更大的值，否则缩小范围
