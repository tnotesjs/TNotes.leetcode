# [0739. 每日温度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0739.%20%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/daily-temperatures/)

给定一个整数数组 `temperatures`，表示每天的温度，返回一个数组 `answer`，其中 `answer[i]` 是指对于第 `i` 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 `0` 来代替。

---

示例 1：

```txt
输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
```

示例 2：

```txt
输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
```

示例 3：

```txt
输入: temperatures = [30,60,90]
输出: [1,1,0]
```

---

提示：

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100`

## 2. 🎯 s.1 - 单调栈

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(n)$

算法思路：

- 维护单调递减栈，栈中存储索引
- 当前温度大于栈顶对应温度时，栈顶出栈，得到等待天数 `i - j`
