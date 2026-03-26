# [2623. 记忆函数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2623.%20%E8%AE%B0%E5%BF%86%E5%87%BD%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 双哈希表](#2--s1---双哈希表)
- [3. 🎯 s.哈希表](#3--s哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/memoize)

请你编写一个函数 `fn`，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。

记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。

你可以假设有 3 个可能的输入函数：`sum` 、`fib` 和 `factorial`。

- `sum` 接收两个整型参数 `a` 和 `b`，并返回 `a + b`。假设如果参数 `(b, a)` 已经缓存了值，其中 `a != b`，它不能用于参数 `(a, b)`。例如，如果参数是 `(3, 2)` 和 `(2, 3)`，则应进行两个单独的调用。
- `fib` 接收一个整型参数 `n`，如果 `n <= 1` 则返回 `1`，否则返回 `fib (n - 1) + fib (n - 2)`。
- `factorial` 接收一个整型参数 `n`，如果 `n <= 1` 则返回 `1`，否则返回 `factorial(n - 1) * n`。

---

示例 1：

```txt
输入：
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
输出：[4,4,1,3,2]
解释：
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum (2, 2);// "call" - 返回 4。sum() 被调用，因为之前没有使用参数 (2, 2) 调用过。
memoizedSum (2, 2);// "call" - 返回 4。没有调用 sum()，因为前面有相同的输入。
// "getCallCount" - 总调用数：1
memoizedSum(1, 2);// "call" - 返回 3。sum() 被调用，因为之前没有使用参数 (1, 2) 调用过。
// "getCallCount" - 总调用数：2
```

---

示例 2：

```txt
输入：
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
输出：[2,6,2,2,6,2]
解释：
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - 返回 2。
memoFactorial(3); // "call" - 返回 6。
memoFactorial(2); // "call" - 返回 2。 没有调用 factorial()，因为前面有相同的输入。
// "getCallCount" -  总调用数：2
memoFactorial(3); // "call" - 返回 6。 没有调用 factorial()，因为前面有相同的输入。
// "getCallCount" -  总调用数：2
```

---

示例 3：

```txt
输入：
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
输出：[8,1]
解释：
fib(5) = 8 // "call"
// "getCallCount" - 总调用数：1
```

提示：

- `0 <= a, b <= 10^5`
- `1 <= n <= 10`
- `actions.length === values.length`
- `actions[i]` 为 "call" 和 "getCallCount" 中的一个
- `fnName` 为 "sum", "factorial" 和 "fib" 中的一个

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，每次调用的哈希查找和缓存操作为常数时间
- 空间复杂度：$O(N)$，其中 N 是不同参数组合的数量

算法思路：

- 使用 Map 缓存函数调用结果，键为参数用逗号拼接的字符串
- 调用时先检查缓存是否命中，命中则直接返回缓存值，否则执行原函数并缓存结果
