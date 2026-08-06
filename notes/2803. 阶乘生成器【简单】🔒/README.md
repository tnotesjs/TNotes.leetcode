# [2803. 阶乘生成器【简单】🔒](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2803.%20%E9%98%B6%E4%B9%98%E7%94%9F%E6%88%90%E5%99%A8%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91%F0%9F%94%92)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/factorial-generator)

编写一个生成器函数，该函数以一个整数 `n` 作为参数，并返回一个生成器对象，该生成器对象可以生成 阶乘序列。

阶乘序列 的定义如下：`n! = n * (n-1) * (n-2) * ... * 2 * 1`。

0 的阶乘被定义为 1。

示例 1：

- 输入：`n = 5`
- 输出：`[1,2,6,24,120]`
- 解释：

```js
const gen = factorial(5)
gen.next().value // 1
gen.next().value // 2
gen.next().value // 6
gen.next().value // 24
gen.next().value // 120
```

示例 2：

- 输入：`n = 2`
- 输出：`[1,2]`
- 解释：

```js
const gen = factorial(2)
gen.next().value // 1
gen.next().value // 2
```

示例 3：

- 输入：`n = 0`
- 输出：`[1]`
- 解释：

```js
const gen = factorial(0)
gen.next().value // 1
```

提示：

- `0 <= n <= 18`

## 2. 🎯 s.1

```javascript
/**
 * @param {number} n
 * @yields {number}
 */
function* factorial(n) {
  let result = 1
  if (n === 0) {
    yield 1
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i
      yield result
    }
  }
}

/**
 * const gen = factorial(2);
 * gen.next().value; // 1
 * gen.next().value; // 2
 */
```
