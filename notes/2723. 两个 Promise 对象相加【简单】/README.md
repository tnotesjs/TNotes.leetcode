# [2723. 两个 Promise 对象相加【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2723.%20%E4%B8%A4%E4%B8%AA%20Promise%20%E5%AF%B9%E8%B1%A1%E7%9B%B8%E5%8A%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - async/await](#2--s1---asyncawait)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/add-two-promises)

给定两个 promise 对象 `promise1` 和 `promise2`，返回一个新的 promise。`promise1` 和 `promise2` 都会被解析为一个数字。返回的 Promise 应该解析为这两个数字的和。

---

示例 1：

输入：

```js
;(promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))),
  (promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60)))
```

输出：`7`

解释：两个输入的 Promise 分别解析为值 2 和 5。返回的 Promise 应该解析为 2 + 5 = 7。返回的 Promise 解析的时间不作为判断条件。

---

示例 2：

输入：

```js
;(promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50))),
  (promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30)))
```

输出：`-2`

解释：两个输入的 Promise 分别解析为值 10 和 -12。返回的 Promise 应该解析为 10 + -12 = -2。

---

提示：

- `promise1 和 promise2` 都是被解析为一个数字的 promise 对象

## 2. 🎯 s.1 - async/await

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 使用 `async/await` 分别等待两个 Promise 解析，返回两个结果之和
