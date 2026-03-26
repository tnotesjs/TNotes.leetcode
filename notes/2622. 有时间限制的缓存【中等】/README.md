# [2622. 有时间限制的缓存【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2622.%20%E6%9C%89%E6%97%B6%E9%97%B4%E9%99%90%E5%88%B6%E7%9A%84%E7%BC%93%E5%AD%98%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表](#2--s1---哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/cache-with-time-limit/)

编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间。

该类有三个公共方法：

`set(key, value, duration)` ：接收参数为整型键 `key` 、整型值 `value` 和以毫秒为单位的持续时间 `duration`。一旦 `duration` 到期后，这个键就无法访问。如果相同的未过期键已经存在，该方法将返回 `true`，否则返回 `false`。如果该键已经存在，则它的值和持续时间都应该被覆盖。

`get(key)` ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 `-1`。

`count()` ：返回未过期键的总数。

---

示例 1：

输入：

```js
actions = ['TimeLimitedCache', 'set', 'get', 'count', 'get']
values = [[], [1, 42, 100], [1], [], [1]]
timeDeays = [0, 0, 50, 50, 150]
```

输出：`[null, false, 42, 1, -1]`

解释：

- 在 t=0 时，缓存被构造。
- 在 t=0 时，添加一个键值对 (1: 42)，过期时间为 100ms。因为该值不存在，因此返回 false。
- 在 t=50 时，请求 key=1 并返回值 42。
- 在 t=50 时，调用 count()，缓存中有一个未过期的键。
- 在 t=100 时，key=1 到期。
- 在 t=150 时，调用 get(1)，返回 -1，因为缓存是空的。

---

示例 2：

输入：

```js
actions = ['TimeLimitedCache', 'set', 'set', 'get', 'get', 'get', 'count']
values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
timeDelays = [0, 0, 40, 50, 120, 200, 250]
```

输出：`[null, false, true, 50, 50, -1]`

解释：

- 在 t=0 时，缓存被构造。
- 在 t=0 时，添加一个键值对 (1: 42)，过期时间为 50ms。因为该值不存在，因此返回 false。
- 在 t=40 时，添加一个键值对 (1: 50)，过期时间为 100ms。因为一个未过期的键已经存在，返回 true 并覆盖这个键的旧值。
- 在 t=50 时，调用 get(1)，返回 50。
- 在 t=120 时，调用 get(1)，返回 50。
- 在 t=140 时，key=1 过期。
- 在 t=200 时，调用 get(1)，但缓存为空，因此返回 -1。
- 在 t=250 时，count() 返回 0，因为缓存是空的，没有未过期的键。

---

提示：

- `0 <= key, value <= 10^9`
- `0 <= duration <= 1000`
- `1 <= actions.length <= 100`
- `actions.length === values.length`
- `actions.length === timeDelays.length`
- `0 <= timeDelays[i] <= 1450`
- `actions[i]` 是 "TimeLimitedCache"、"set"、"get" 和 "count" 中的一个。
- 第一个操作始终是 "TimeLimitedCache" 而且一定会以 0 毫秒的延迟立即执行

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，set/get/count 操作均为常数时间
- 空间复杂度：$O(N)$，其中 N 是缓存中的键数量

算法思路：

- 使用 Map 存储每个键的值和对应的定时器
- set 时若键已存在则清除旧定时器，创建新定时器在 duration 后自动删除该键
- get 直接从 Map 中取值，不存在返回 -1
- count 返回 Map 的大小（过期键已被定时器自动清理）
