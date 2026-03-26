# [2632. 柯里化【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2632.%20%E6%9F%AF%E9%87%8C%E5%8C%96%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 📒 函数的 length 属性](#2--函数的-length-属性)
- [3. 🎯 s.1](#3--s1)
- [4. 🎯 s.2](#4--s2)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/curry)

请你编写一个函数，它接收一个其他的函数，并返回该函数的 柯里化 后的形式。

柯里化 函数的定义是接受与原函数相同数量或更少数量的参数，并返回另一个 柯里化 后的函数或与原函数相同的值。

实际上，当你调用原函数，如 `sum(1,2,3)` 时，它将调用 柯里化 函数的某个形式，如 `csum(1)(2)(3)`， `csum(1)(2,3)`， `csum(1,2)(3)`，或 `csum(1,2,3)`。所有调用 柯里化 函数的方法都应该返回与原始函数相同的值。

示例 1：

输入：

```js
fn = function sum(a, b, c) {
  return a + b + c
}
inputs = [[1], [2], [3]]
```

输出：`6`

解释 - 执行的代码是：

- `const curriedSum = curry(fn);`
- `curriedSum(1)(2)(3) === 6;`
- `curriedSum(1)(2)(3)` 应该返回像原函数 `sum(1, 2, 3)` 一样的值。

示例 2：

输入：

```js
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1,2],[3]]]
```

输出：`6`

解释：`curriedSum(1, 2)(3)` 应该返回像原函数 `sum(1, 2, 3)` 一样的值。

示例 3：

输入：

```js
fn = function sum(a, b, c) {
  return a + b + c
}
inputs = [[], [], [1, 2, 3]]
```

输出：`6`

解释：你应该能够以任何方式传递参数，包括一次性传递所有参数或完全不传递参数。`curriedSum()()(1, 2, 3)` 应该返回像原函数 `sum(1, 2, 3)` 一样的值。

示例 4：

输入：

```js
fn = function life() {
  return 42
}
inputs = [[]]
```

输出：`42`

解释：柯里化一个没有接收参数，没做有效操作的函数。`curriedLife() === 42`

提示：

- `1 <= inputs.length <= 1000`
- `0 <= inputs[i][j] <= 10^5`
- `0 <= fn.length <= 1000`
- `inputs.flat().length == fn.length`
- `函数参数需要被显式定义`
- 如果 `fn.length > 0` 则最后一个数组 `inputs` 不为空
- 如果 `fn.length === 0` 则 `inputs.length === 1`

## 2. 📒 函数的 length 属性

- 函数的形参数量可以通过函数的 length 属性来读取。
- 清空一个数组可以通过给数组的 length 属性赋值为 0 来实现。

```javascript
function testFunction(a, b, c) {
  return a + b + c
}
console.log(testFunction.length) // 输出 3

const arr = [1, 2, 3]
arr // [1, 2, 3]
arr.length = 0
arr // []
```

## 3. 🎯 s.1 - 递归收集参数

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是原函数的参数个数
- 空间复杂度：$O(n)$，闭包中累积存储参数

算法思路：

- 返回 `curried` 函数，每次调用时检查累积参数是否 >= `fn.length`
- 参数够了直接调用 `fn`，不够则返回新函数继续收集
- 利用 `(...args, ...nextArgs)` 展开合并参数，避免共享闭包数组的复用 bug
