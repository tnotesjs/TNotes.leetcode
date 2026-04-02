# [2715. 执行可取消的延迟函数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2715.%20%E6%89%A7%E8%A1%8C%E5%8F%AF%E5%8F%96%E6%B6%88%E7%9A%84%E5%BB%B6%E8%BF%9F%E5%87%BD%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - setTimeout + clearTimeout](#2--s1---settimeout--cleartimeout)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/timeout-cancellation)

给定一个函数 `fn`，一个参数数组 `args` 和一个以毫秒为单位的超时时间 `t`，返回一个取消函数 `cancelFn`。

在 `cancelTimeMs` 的延迟后，返回的取消函数 `cancelFn` 将被调用。

`setTimeout(cancelFn, cancelTimeMs)`

最初，函数 `fn` 的执行应该延迟 `t` 毫秒。

如果在 `t` 毫秒的延迟之前调用了函数 `cancelFn`，它应该取消 `fn` 的延迟执行。否则，如果在指定的延迟 `t` 内没有调用 `cancelFn`，则应执行 `fn`，并使用提供的 `args` 作为参数。

---

示例 1：

- 输入：`fn = (x) => x * 5, args = [2], t = 20`
- 输出：`[{"time": 20, "returned": 10}]`

解释：

- `const cancelTimeMs = 50;`
- `const cancelFn = cancellable((x) => x * 5, [2], 20);`
- `setTimeout(cancelFn, cancelTimeMs);`

取消操作被安排在延迟了 cancelTimeMs（50 毫秒）后进行，这发生在 fn(2) 在 20 毫秒时执行之后。

---

示例 2：

- 输入：`fn = (x) => x2, args = [2], t = 100`
- 输出：`[]`

解释：

- `const cancelTimeMs = 50;`
- `const cancelFn = cancellable((x) => x2, [2], 100);`
- `setTimeout(cancelFn, cancelTimeMs);`

取消操作被安排在延迟了 cancelTimeMs（50 毫秒）后进行，这发生在 fn(2) 在 100 毫秒时执行之前，导致 fn(2) 从未被调用。

---

示例 3：

- 输入：`fn = (x1, x2) => x1 * x2, args = [2,4], t = 30`
- 输出：`[{"time": 30, "returned": 8}]`

解释：

- `const cancelTimeMs = 100;`
- `const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);`
- `setTimeout(cancelFn, cancelTimeMs);`

取消操作被安排在延迟了 cancelTimeMs（100 毫秒）后进行，这发生在 fn(2,4) 在 30 毫秒时执行之后。

---

提示：

- `fn` 是一个函数
- `args` 是一个有效的 JSON 数组
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelTimeMs <= 1000`

## 2. 🎯 s.1 - setTimeout + clearTimeout

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

算法思路：

- 使用 `setTimeout` 延迟 t 毫秒后执行 `fn(...args)`
- 返回取消函数，内部调用 `clearTimeout` 取消定时器
