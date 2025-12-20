# [2705. 精简对象【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2705.%20%E7%B2%BE%E7%AE%80%E5%AF%B9%E8%B1%A1%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/compact-object/)

现给定一个对象或数组 `obj`，返回一个 精简对象 。

精简对象 与原始对象相同，只是将包含 假 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 `Boolean(value)` 返回 `false` 时，值被视为 假 值。

你可以假设 `obj` 是 `JSON.parse` 的输出结果。换句话说，它是有效的 JSON。

---

- 示例 1：

```txt
输入：obj = [null, 0, false, 1]
输出：[1]
解释：数组中的所有假值已被移除。
```

- 示例 2：

```txt
输入：obj = {"a": null, "b": [false, 1]}
输出：{"b": [1]}
解释：obj["a"] 和 obj["b"][0] 包含假值，因此被移除。
```

- 示例 3：

```txt
输入：obj = [null, 0, 5, [0], [false, 16]]
输出：[5, [], [16]]
解释：obj[0], obj[1], obj[3][0], 和 obj[4][0] 包含假值，因此被移除。
```

---

提示：

- `obj` 是一个有效的 JSON 对象
- `2 <= JSON.stringify(obj).length <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
