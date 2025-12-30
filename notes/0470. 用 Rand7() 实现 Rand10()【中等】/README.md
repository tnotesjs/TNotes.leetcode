# [0470. 用 Rand7() 实现 Rand10()【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0470.%20%E7%94%A8%20Rand7()%20%E5%AE%9E%E7%8E%B0%20Rand10()%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/implement-rand10-using-rand7/)

给定方法 `rand7` 可生成 `[1,7]` 范围内的均匀随机整数，试写一个方法 `rand10` 生成 `[1,10]` 范围内的均匀随机整数。

你只能调用 `rand7()` 且不能调用其他方法。请不要使用系统的 `Math.random()` 方法。

每个测试用例将有一个内部参数 `n`，即你实现的函数 `rand10()` 在测试时将被调用的次数。请注意，这不是传递给 `rand10()` 的参数。

---

示例 1：

```txt
输入: 1
输出: [2]
```

示例 2：

```txt
输入: 2
输出: [2,8]
```

示例 3：

```txt
输入: 3
输出: [3,8,10]
```

---

提示：

- `1 <= n <= 10^5`

进阶：

- `rand7()`调用次数的 [期望值][1] 是多少?
- 你能否尽量少调用 `rand7()` ?

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [Expected value 期望值][1]
  - wiki

[1]: https://en.wikipedia.org/wiki/Expected_value
