# [2823. 深度对象筛选【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2823.%20%E6%B7%B1%E5%BA%A6%E5%AF%B9%E8%B1%A1%E7%AD%9B%E9%80%89%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 递归](#2--s1---递归)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/deep-object-filter)

给定一个对象 `obj` 和一个函数 `fn`，返回一个经过筛选的对象 `filteredObject`。

函数 `deepFilter` 应该在对象 `obj` 上执行深度筛选操作。深度筛选操作应该移除筛选函数 `fn` 输出为 `false` 的属性，以及在键被移除后仍然存在的任何空对象或数组。

如果深度筛选操作导致对象或数组为空，没有剩余属性，`deepFilter` 应该返回 `undefined`，表示在 `filteredObject` 中没有有效数据。

示例 1：

```txt
输入：
obj = [-5, -4, -3, -2, -1, 0, 1],
fn = (x) => x > 0
输出：[1]
解释：所有不大于 0 的值都被移除。
```

示例 2：

```txt
输入：
obj = {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}},
fn = (x) => typeof x === "string"
输出：{"b":"2","d":"4"}
解释：所有值不是字符串的键都被移除。在筛选过程中移除键后，任何导致为空的对象也被移除。
```

示例 3：

```txt
输入：
obj = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]],
fn = (x) => x > 0
输出：[[5,10]]
解释：所有不大于 0 的值都被移除。在筛选过程中移除值后，任何导致为空的数组也被移除。
```

示例 4：

```txt
输入：
obj = [[[[5]]]],
fn = (x) => Array.isArray(x)
输出：undefined
```

提示：

- `fn` 是一个返回布尔值的函数
- `obj` 是一个有效的 JSON 对象
- `2 <= JSON.stringify(obj).length <= 105`

## 2. 🎯 s.1 - 递归

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是对象中所有节点的数量
- 空间复杂度：$O(D)$，其中 D 是对象的最大嵌套深度

算法思路：

- 对于原始值（非数组非对象），用 fn 判断是否保留
- 对于数组，递归过滤每个元素，移除 undefined 结果，若数组为空返回 undefined
- 对于对象，递归过滤每个属性值，移除 undefined 结果，若对象为空返回 undefined
