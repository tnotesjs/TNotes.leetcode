# [2627. 函数防抖【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2627.%20%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 闭包 + setTimeout](#2--s1---闭包--settimeout)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/debounce/)

请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 `t`，并返回该函数的 函数防抖 后的结果。

函数防抖 方法是一个函数，它的执行被延迟了 `t` 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。

例如，假设 `t = 50ms`，函数分别在 `30ms` 、 `60ms` 和 `100ms` 时调用。前两个函数调用将被取消，第三个函数调用将在 `150ms` 执行。如果改为 `t = 35ms`，则第一个调用将被取消，第二个调用将在 `95ms` 执行，第三个调用将在 `135ms` 执行。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2024-09-26-21-44-40.png)

上图展示了了防抖函数是如何转换事件的。其中，每个矩形表示 100ms，反弹时间为 400ms。每种颜色代表一组不同的输入。

请在不使用 lodash 的 `_.debounce()` 函数的前提下解决该问题。

示例 1：

输入：

```js
t = 50
calls = [
  { t: 50, inputs: [1] },
  { t: 75, inputs: [2] },
]
```

输出：`[{"t": 125, inputs: [2]}]`

解释：

```js
let start = Date.now()
function log(...inputs) {
  console.log([Date.now() - start, inputs])
}
const dlog = debounce(log, 50)
setTimeout(() => dlog(1), 50)
setTimeout(() => dlog(2), 75)
```

- 第一次调用被第二次调用取消，因为第二次调用发生在 100ms 之前。
- 第二次调用延迟 50ms，在 125ms 执行。输入为 (2)。

示例 2：

输入：

```js
t = 20
calls = [
  { t: 50, inputs: [1] },
  { t: 100, inputs: [2] },
]
```

输出：`[{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]`

解释：

- 第一次调用延迟到 70ms。输入为 (1)。
- 第二次调用延迟到 120ms。输入为 (2)。

示例 3：

输入：

```js
t = 150
calls = [
  { t: 50, inputs: [1, 2] },
  { t: 300, inputs: [3, 4] },
  { t: 300, inputs: [5, 6] },
]
```

输出：`[{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]`

解释：

- 第一次调用延迟了 150ms，运行时间为 200ms。输入为 (1, 2)。
- 第二次调用被第三次调用取消
- 第三次调用延迟了 150ms，运行时间为 450ms。输入为 (5, 6)。

提示：

- `0 <= t <= 1000`
- `1 <= calls.length <= 10`
- `0 <= calls[i].t <= 1000`
- `0 <= calls[i].inputs.length <= 10`

## 2. 🎯 s.1 - 闭包 + setTimeout

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，每次调用只做常数操作
- 空间复杂度：$O(1)$，闭包中仅保存一个定时器引用

算法思路：

- 每次调用时先 `clearTimeout` 清除上一次的定时器
- 然后重新 `setTimeout` 设置新的定时器，延迟 `t` 毫秒后执行 `fn`
- 如果在 `t` 毫秒内再次调用，之前的定时器被取消，只有最后一次调用会真正执行
