# [1116. 打印零与奇偶数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1116.%20%E6%89%93%E5%8D%B0%E9%9B%B6%E4%B8%8E%E5%A5%87%E5%81%B6%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/print-zero-even-odd/)

现有函数 `printNumber` 可以用一个整数参数调用，并输出该整数到控制台。

- 例如，调用 `printNumber(7)` 将会输出 `7` 到控制台。

给你类 `ZeroEvenOdd` 的一个实例，该类中有三个函数：`zero`、`even` 和 `odd` 。`ZeroEvenOdd` 的相同实例将会传递给三个不同线程：

- 线程 A： 调用 `zero()` ，只输出 `0`
- 线程 B： 调用 `even()` ，只输出偶数
- 线程 C： 调用 `odd()` ，只输出奇数

修改给出的类，以输出序列 `"010203040506..."` ，其中序列的长度必须为 `2n` 。

实现 `ZeroEvenOdd` 类：

- `ZeroEvenOdd(int n)` 用数字 `n` 初始化对象，表示需要输出的数。
- `void zero(printNumber)` 调用 `printNumber` 以输出一个 0 。
- `void even(printNumber)` 调用`printNumber` 以输出偶数。
- `void odd(printNumber)` 调用 `printNumber` 以输出奇数。

---

- 示例 1：

```txt
输入：n = 2
输出："0102"
解释：三条线程异步执行，其中一个调用 zero()，另一个线程调用 even()，最后一个线程调用odd()。正确的输出为 "0102"。
```

- 示例 2：

```txt
输入：n = 5
输出："0102030405"
```

---

提示：

- `1 <= n <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
