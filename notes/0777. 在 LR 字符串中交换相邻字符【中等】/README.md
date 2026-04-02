# [0777. 在 LR 字符串中交换相邻字符【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0777.%20%E5%9C%A8%20LR%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E4%BA%A4%E6%8D%A2%E7%9B%B8%E9%82%BB%E5%AD%97%E7%AC%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双指针](#2--s1---双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/swap-adjacent-in-lr-string/)

在一个由 `'L'` , `'R'` 和 `'X'` 三个字符组成的字符串（例如`"RXXLRXRXL"`）中进行移动操作。一次移动操作指用一个 `"LX"` 替换一个 `"XL"`，或者用一个 `"XR"` 替换一个 `"RX"`。现给定起始字符串 `start` 和结束字符串 `result`，请编写代码，当且仅当存在一系列移动操作使得 `start` 可以转换成 `result` 时， 返回 `True`。

---

示例 1：

```txt
输入：start = "RXXLRXRXL", result = "XRLXXRRLX"
输出：true
解释：通过以下步骤我们可以将 start 转化为 result：
RXXLRXRXL ->
XRXLRXRXL ->
XRLXRXRXL ->
XRLXXRRXL ->
XRLXXRRLX
```

示例 2：

```txt
输入：start = "X", result = "L"
输出：false
```

---

提示：

- `1 <= start.length <= 10^4`
- `start.length == result.length`
- `start` 和 `result` 都只包含 `'L'`, `'R'` 或 `'X'`。

## 2. 🎯 s.1 - 双指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串长度
- 空间复杂度：$O(1)$

算法思路：

- 去掉 X 后两个字符串的 L、R 顺序必须一致
- L 只能左移，所以 start 中 L 的位置必须 >= end 中对应 L 的位置
- R 只能右移，所以 start 中 R 的位置必须 <= end 中对应 R 的位置
