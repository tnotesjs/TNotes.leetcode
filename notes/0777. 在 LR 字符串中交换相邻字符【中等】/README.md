# [0777. 在 LR 字符串中交换相邻字符【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0777.%20%E5%9C%A8%20LR%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E4%BA%A4%E6%8D%A2%E7%9B%B8%E9%82%BB%E5%AD%97%E7%AC%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/swap-adjacent-in-lr-string/)

在一个由 `'L'` , `'R'` 和 `'X'` 三个字符组成的字符串（例如`"RXXLRXRXL"`）中进行移动操作。一次移动操作指用一个 `"LX"` 替换一个 `"XL"`，或者用一个 `"XR"` 替换一个 `"RX"`。现给定起始字符串 `start` 和结束字符串 `result`，请编写代码，当且仅当存在一系列移动操作使得 `start` 可以转换成 `result` 时， 返回 `True`。

---

- **示例 1：**

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

- **示例 2：**

```txt
输入：start = "X", result = "L"
输出：false
```

---

**提示：**

- `1 <= start.length <= 10^4`
- `start.length == result.length`
- `start` 和 `result` 都只包含 `'L'`, `'R'` 或 `'X'`。

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
