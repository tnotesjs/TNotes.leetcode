# [0991. 坏了的计算器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0991.%20%E5%9D%8F%E4%BA%86%E7%9A%84%E8%AE%A1%E7%AE%97%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/broken-calculator/)

在显示着数字 `startValue` 的坏计算器上，我们可以执行以下两种操作：

- **双倍（Double）：** 将显示屏上的数字乘 2；
- **递减（Decrement）：** 将显示屏上的数字减 `1` 。

给定两个整数 `startValue` 和 `target` 。返回显示数字 `target` 所需的最小操作数。

---

- **示例 1：**

```txt
输入：startValue = 2, target = 3
输出：2
解释：先进行双倍运算，然后再进行递减运算 {2 -> 4 -> 3}.
```

- **示例 2：**

```txt
输入：startValue = 5, target = 8
输出：2
解释：先递减，再双倍 {5 -> 4 -> 8}.
```

- **示例 3：**

```txt
输入：startValue = 3, target = 10
输出：3
解释：先双倍，然后递减，再双倍 {3 -> 6 -> 5 -> 10}.
```

---

**提示：**

- `1 <= startValue, target <= 10^9`

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
