# [0201. 数字范围按位与【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0201.%20%E6%95%B0%E5%AD%97%E8%8C%83%E5%9B%B4%E6%8C%89%E4%BD%8D%E4%B8%8E%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 公共前缀](#2--s1---公共前缀)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/bitwise-and-of-numbers-range/)

给你两个整数 `left` 和 `right`，表示区间 `[left, right]`，返回此区间内所有数字 按位与 的结果（包含 `left` 、`right` 端点）。

---

示例 1：

```txt
输入：left = 5, right = 7
输出：4
```

示例 2：

```txt
输入：left = 0, right = 0
输出：0
```

示例 3：

```txt
输入：left = 1, right = 2147483647
输出：0
```

---

提示：

- `0 <= left <= right <= 2^31 - 1`

## 2. 🎯 s.1 - 公共前缀

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log n)$，最多右移 32 次
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 范围内所有数字按位与的结果就是 `left` 和 `right` 的二进制公共前缀
- 同时右移 `left` 和 `right` 直到它们相等，记录移动次数，最后左移回去
