# [0991. 坏了的计算器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0991.%20%E5%9D%8F%E4%BA%86%E7%9A%84%E8%AE%A1%E7%AE%97%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 逆向贪心](#2--s1---逆向贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/broken-calculator/)

在显示着数字 `startValue` 的坏计算器上，我们可以执行以下两种操作：

- 双倍（Double）：将显示屏上的数字乘 2；
- 递减（Decrement）：将显示屏上的数字减 `1`。

给定两个整数 `startValue` 和 `target`。返回显示数字 `target` 所需的最小操作数。

---

示例 1：

```txt
输入：startValue = 2, target = 3
输出：2

解释：
先进行双倍运算，然后再进行递减运算 {2 -> 4 -> 3}.
```

---

示例 2：

```txt
输入：startValue = 5, target = 8
输出：2

解释：
先递减，再双倍 {5 -> 4 -> 8}.
```

---

示例 3：

```txt
输入：startValue = 3, target = 10
输出：3

解释：
先双倍，然后递减，再双倍 {3 -> 6 -> 5 -> 10}.
```

---

提示：

- `1 <= startValue, target <= 10^9`

## 2. 🎯 s.1 - 逆向贪心

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(\log target)$，每次除以 2 会将 target 减半
- 空间复杂度：$O(1)$，只使用常数级别的额外空间

算法思路：

- 逆向思考：从 target 变到 startValue，将操作逆转为除以 2 和加 1
- 贪心策略：当 target > startValue 时，优先选择除以 2（target 为偶数）或加 1（target 为奇数）
- 偶数处理：如果 target 为偶数，直接除以 2，相当于正向的乘 2 操作
- 奇数处理：如果 target 为奇数，加 1 变成偶数，相当于正向的先减 1 再乘 2
- 终止条件：当 target <= startValue 时，只能递减，累加 startValue - target 次操作
