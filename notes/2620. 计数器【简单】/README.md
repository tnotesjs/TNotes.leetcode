# [2620. 计数器【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2620.%20%E8%AE%A1%E6%95%B0%E5%99%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/counter/)

给定一个整型参数 `n`，请你编写并返回一个 `counter` 函数。这个 `counter` 函数最初返回 `n`，每次调用它时会返回前一个值加 1 的值 ( `n` , `n + 1` , `n + 2` ，等等)。

---

**示例 1：**

输入：

```js
n = (10)[('call', 'call', 'call')]
```

输出：`[10,11,12]`

解释：

```js
counter() = 10 // 第一次调用 counter()，返回 n。
counter() = 11 // 返回上次调用的值加 1。
counter() = 12 // 返回上次调用的值加 1。
```

---

**示例 2：**

输入：

```js
n = -(2)[('call', 'call', 'call', 'call', 'call')]
```

输出：`[-2,-1,0,1,2]`

解释：counter() 最初返回 -2。然后在每个后续调用后增加 1。

---

**提示：**

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

## 2. 🎯 s.1

```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return () => n++
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

上述程序是一个用于创建计数器的函数。函数 `createCounter` 接受一个数字参数 `n`，并返回一个函数 `counter`。

`counter` 函数是一个闭包，它内部引用了外部函数 `createCounter` 的参数 `n`。每次调用 `counter` 函数，它都会返回 `n` 的当前值，并且将 `n` 的值加 `1`。

**使用示例**

```javascript
const counter = createCounter(10)
console.log(counter()) // 输出 10
console.log(counter()) // 输出 11
console.log(counter()) // 输出 12
```

在上述示例中，我们首先调用 `createCounter(10)` 来创建一个计数器，并将返回的函数赋值给变量 `counter`。然后，每次调用 `counter()` 函数时，它会返回 `n` 的当前值，并将 `n` 的值增加 1。所以，第一次调用 `counter()` 时，输出为 10，第二次调用时，输出为 11，依此类推。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-26-15-30-14.png)
