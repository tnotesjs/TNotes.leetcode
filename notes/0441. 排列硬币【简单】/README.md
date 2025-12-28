# [0441. 排列硬币【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0441.%20%E6%8E%92%E5%88%97%E7%A1%AC%E5%B8%81%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分 + 等差数列公式](#2--s1---二分--等差数列公式)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/arranging-coins/)

你总共有 `n` 枚硬币，并计划将它们按阶梯状排列。对于一个由 `k` 行组成的阶梯，其第 `i` 行必须正好有 `i` 枚硬币。阶梯的最后一行 可能 是不完整的。

给你一个数字 `n` ，计算并返回可形成 完整阶梯行 的总行数。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-28-48.png)

```txt
输入：n = 5
输出：2
解释：因为第三行不完整，所以返回 2。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-14-28-52.png)

```txt
输入：n = 8
输出：3
解释：因为第四行不完整，所以返回 3。
```

---

提示：

- `1 <= n <= 2^31 - 1`

## 2. 🎯 s.1 - 二分 + 等差数列公式

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(\log n)$，二分查找的时间复杂度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

---

- 利用等差数列求和公式
- 前 k 行总共需要的硬币数为：

$$
1 + 2 + 3 + \ldots + k = \frac{k(k+1)}{2}
$$

- 目标是找到最大的 k，使得：

$$
\frac{k(k+1)}{2} \leq n
$$

---

- 执行过程示例
- 以 `n = 8` 为例：

```txt
排满 k 行需要 k*(k+1)/2 枚硬币：
- 1 行：1*2/2 = 1 枚
- 2 行：2*3/2 = 3 枚
- 3 行：3*4/2 = 6 枚
- 4 行：4*5/2 = 10 枚

二分查找过程：
1. left=1, right=8, mid=4, 需要 10 枚 > 8 枚，right=3
2. left=1, right=3, mid=2, 需要 3 枚 < 8 枚，left=3
3. left=3, right=3, mid=3, 需要 6 枚 < 8 枚，left=4
4. left=4, right=3，循环结束，返回 right=3

可以排满 3 行，第 4 行只能排 2 枚（需要 4 枚），所以返回 3
```
