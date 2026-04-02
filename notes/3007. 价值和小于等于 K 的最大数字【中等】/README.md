# [3007. 价值和小于等于 K 的最大数字【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3007.%20%E4%BB%B7%E5%80%BC%E5%92%8C%E5%B0%8F%E4%BA%8E%E7%AD%89%E4%BA%8E%20K%20%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E5%AD%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分查找 + 逐位统计](#2--s1---二分查找--逐位统计)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-that-sum-of-the-prices-is-less-than-or-equal-to-k/)

给你一个整数 `k` 和一个整数 `x`。整数 `num` 的价值是它的二进制表示中在 `x`，`2x`，`3x` 等位置处 设置位 的数目（从最低有效位开始）。下面的表格包含了如何计算价值的例子。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-32-34.png)

`num` 的 累加价值 是从 `1` 到 `num` 的数字的 总 价值。如果 `num` 的累加价值小于或等于 `k` 则被认为是 廉价 的。

请你返回 最大 的廉价数字。

---

示例 1：

```txt
输入：k = 9, x = 1
输出：6
解释：由下表所示，6 是最大的廉价数字。
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-32-50.png)

---

示例 2：

```txt
输入：k = 7, x = 2
输出：9
解释：由下表所示，9 是最大的廉价数字。
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-21-33-11.png)

---

提示：

- `1 <= k <= 10^15`
- `1 <= x <= 8`

## 2. 🎯 s.1 - 二分查找 + 逐位统计

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\frac{60}{x} \cdot \log(k \cdot 2^x))$，二分查找 $O(\log C)$ 轮，每轮遍历 $O(60/x)$ 个位
- 空间复杂度：$O(1)$，只使用常数级别的额外空间

算法思路：

- 二分查找答案 num，检查 $[1, num]$ 的累加价值是否 $\leq k$
- 累加价值 = 所有第 $x, 2x, 3x, \ldots$ 位上的设置位总和
- 对于第 p 位（1-indexed），$[1, num]$ 中该位为 1 的数字个数可通过公式直接计算：$\lfloor \frac{num+1}{2^p} \rfloor \cdot 2^{p-1} + \max(0,\, (num+1) \bmod 2^p - 2^{p-1})$
- 对所有 $p = x, 2x, 3x, \ldots$ 求和即得累加价值
