# [2630. 记忆函数 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2630.%20%E8%AE%B0%E5%BF%86%E5%87%BD%E6%95%B0%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.双哈希表](#2--s双哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/memoize-ii/)

现给定一个函数 `fn`，返回该函数的一个 记忆化 版本。

一个 记忆化 的函数是一个函数，它不会被相同的输入调用两次。而是会返回一个缓存的值。

函数 `fn` 可以是任何函数，对它所接受的值类型没有任何限制。如果两个输入值在 JavaScript 中使用 `===` 运算符比较时相等，则它们被视为相同。

---

示例 1：

```txt
输入：
getInputs = () => [[2,2],[2,2],[1,2]]
fn = function (a, b) { return a + b; }
输出：[{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
解释：
const inputs = getInputs();
const memoized = memoize(fn);
for (const arr of inputs) {
  memoized(...arr);
}

对于参数为 (2, 2) 的输入: 2 + 2 = 4，需要调用 fn()。
对于参数为 (2, 2) 的输入: 2 + 2 = 4，这些输入之前已经出现过，因此不需要再次调用 fn()。
对于参数为 (1, 2) 的输入: 1 + 2 = 3，需要再次调用 fn()，总共调用了 2 次。
```

---

示例 2：

```txt
输入：
getInputs = () => [[{},{}],[{},{}],[{},{}]]
fn = function (a, b) { return a + b; }
输出：[{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]
解释：
将两个空对象合并总是会得到一个空对象。尽管看起来应该缓存命中并只调用一次 fn()，但是这些空对象彼此之间都不是 === 相等的。
```

---

示例 3：

```txt
输入：
getInputs = () => { const o = {}; return [[o,o],[o,o],[o,o]]; }
fn = function (a, b) { return ({...a, ...b}); }
输出：[{"val":{},"calls":1},{"val":{},"calls":1},{"val":{},"calls":1}]
解释：
将两个空对象合并总是会得到一个空对象。因为传入的每个对象都是相同的，所以第二个和第三个函数调用都会命中缓存。
```

---

提示：

- `1 <= inputs.length <= 10^5`
- `0 <= inputs.flat().length <= 10^5`
- `inputs[i][j] != NaN`

## 2. 🎯 s.1 - 双哈希表

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是参数个数，每次调用需要 $O(n)$ 构建 key
- 空间复杂度：$O(m \cdot n)$，其中 m 是不同调用次数，n 是参数个数

算法思路：

- 用 `idxMap`（Map）为每个参数值分配唯一整数 ID（基于 `===` 引用相等）
- 将参数列表映射为 ID 序列再拼接成字符串作为缓存 key
- 用 `cache`（Map）存储已计算的结果，相同 key 直接返回缓存值
