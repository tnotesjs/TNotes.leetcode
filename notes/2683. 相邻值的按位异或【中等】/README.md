# [2683. 相邻值的按位异或【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2683.%20%E7%9B%B8%E9%82%BB%E5%80%BC%E7%9A%84%E6%8C%89%E4%BD%8D%E5%BC%82%E6%88%96%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 异或性质](#2--s1---异或性质)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/neighboring-bitwise-xor/)

下标从 0 开始、长度为 `n` 的数组 `derived` 是由同样长度为 `n` 的原始 二进制数组 `original` 通过计算相邻值的 按位异或（⊕）派生而来。

特别地，对于范围 `[0, n - 1]` 内的每个下标 `i` ：

- 如果 `i = n - 1`，那么 `derived[i] = original[i] ⊕ original[0]`
- 否则 `derived[i] = original[i] ⊕ original[i + 1]`

给你一个数组 `derived`，请判断是否存在一个能够派生得到 `derived` 的 有效原始二进制数组 `original`。

如果存在满足要求的原始二进制数组，返回 _true_ ；否则，返回 _false_。

- 二进制数组是仅由 0 和 1 组成的数组。

---

示例 1：

```txt
输入：derived = [1,1,0]
输出：true
解释：能够派生得到 [1,1,0] 的有效原始二进制数组是 [0,1,0] ：
derived[0] = original[0] ⊕ original[1] = 0 ⊕ 1 = 1
derived[1] = original[1] ⊕ original[2] = 1 ⊕ 0 = 1
derived[2] = original[2] ⊕ original[0] = 0 ⊕ 0 = 0
```

示例 2：

```txt
输入：derived = [1,1]
输出：true
解释：能够派生得到 [1,1] 的有效原始二进制数组是 [0,1] ：
derived[0] = original[0] ⊕ original[1] = 1
derived[1] = original[1] ⊕ original[0] = 1
```

示例 3：

```txt
输入：derived = [1,0]
输出：false
解释：不存在能够派生得到 [1,0] 的有效原始二进制数组。
```

---

提示：

- `n == derived.length`
- `1 <= n <= 10^5`
- `derived` 中的值不是 0 就是 1。

## 2. 🎯 s.1 - 异或性质

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，遍历数组一次
- 空间复杂度：$O(1)$，只用了常数额外空间

算法思路：

- derived[i] = original[i] ⊕ original[i+1]，所有 derived 异或后每个 original 元素恰好出现两次
- 因此，当且仅当 derived 所有元素异或为 0 时，存在合法的 original 数组
