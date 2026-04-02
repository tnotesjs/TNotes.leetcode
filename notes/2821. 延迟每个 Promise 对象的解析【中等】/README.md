# [2821. 延迟每个 Promise 对象的解析【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2821.%20%E5%BB%B6%E8%BF%9F%E6%AF%8F%E4%B8%AA%20Promise%20%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%A7%A3%E6%9E%90%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Promise 包装 + setTimeout](#2--s1---promise-包装--settimeout)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delay-the-resolution-of-each-promise)

给定一个函数数组 `functions` 和一个数字 `ms`，返回一个新的函数数组。

- `functions` 是一个返回 Promise 对象的函数数组。
- `ms` 表示延迟的时间，以毫秒为单位。它决定了在新数组中的每个函数返回的 Promise 在解析之前等待的时间。

新数组中的每个函数应该返回一个 Promise 对象，在延迟了 `ms` 毫秒后解析，保持原始 `functions` 数组中的顺序。`delayAll` 函数应确保从 `functions` 中的每个 Promise 都被延迟执行，形成返回延迟的 Promise 的函数的新数组。

示例 1：

```
输入：
functions = [
   () => new Promise((resolve) => setTimeout(resolve, 30))
],
ms = 50
输出：[80]
解释：数组中的 Promise 在 30 毫秒后解析，但被延迟了 50 毫秒，所以总共延迟了 30 毫秒 + 50 毫秒 = 80 毫秒。
```

示例 2：

```
输入：
functions = [
    () => new Promise((resolve) => setTimeout(resolve, 50)),
    () => new Promise((resolve) => setTimeout(resolve, 80))
],
ms = 70
输出：[120,150]
解释：数组中的 Promise 在 50 毫秒和 80 毫秒后解析，但它们被延迟了 70 毫秒，所以总共延迟了 50 毫秒 + 70 毫秒 = 120 毫秒 和 80 毫秒 + 70 毫秒 = 150 毫秒。
```

提示：

- `functions` 是一个返回 Promise 对象的函数数组
- `10 <= ms <= 500`
- `1 <= functions.length <= 10`

## 2. 🎯 s.1 - Promise 包装 + setTimeout

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，遍历函数数组
- 空间复杂度：$O(n)$，创建新的函数数组

算法思路：

- 对每个原始函数 fn 生成一个包装函数
- 包装函数返回一个新的 Promise，先调用 fn() 等待原始 Promise 解析
- 原始 Promise 解析后，通过 `setTimeout` 延迟 ms 毫秒再 resolve 结果
