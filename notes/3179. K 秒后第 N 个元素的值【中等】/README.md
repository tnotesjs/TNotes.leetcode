# [3179. K 秒后第 N 个元素的值【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3179.%20K%20%E7%A7%92%E5%90%8E%E7%AC%AC%20N%20%E4%B8%AA%E5%85%83%E7%B4%A0%E7%9A%84%E5%80%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟前缀和](#2--s1---模拟前缀和)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-n-th-value-after-k-seconds/)

给你两个整数 `n` 和 `k`。

最初，你有一个长度为 `n` 的整数数组 `a`，对所有 `0 <= i <= n - 1`，都有 `a[i] = 1`。每过一秒，你会同时更新每个元素为其前面所有元素的和加上该元素本身。例如，一秒后，`a[0]` 保持不变，`a[1]` 变为 `a[0] + a[1]`，`a[2]` 变为 `a[0] + a[1] + a[2]`，以此类推。

返回 `k` 秒后 `a[n - 1]` 的值。

由于答案可能非常大，返回其对 `10^9 + 7` 取余 后的结果。

---

示例 1：

输入：n = 4, k = 5

输出：56

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-09-41.png)

---

示例 2：

输入：n = 5, k = 3

输出：35

解释：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-09-57.png)

---

提示：

- `1 <= n, k <= 1000`

## 2. 🎯 s.1 - 模拟前缀和

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \times k)$，k 轮前缀和
- 空间复杂度：$O(n)$，数组

算法思路：

- 初始全 1 数组，每秒做一次前缀和
- 重复 k 次后返回最后一个元素

