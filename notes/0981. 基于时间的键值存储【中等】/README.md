# [0981. 基于时间的键值存储【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0981.%20%E5%9F%BA%E4%BA%8E%E6%97%B6%E9%97%B4%E7%9A%84%E9%94%AE%E5%80%BC%E5%AD%98%E5%82%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/time-based-key-value-store/)

设计一个基于时间的键值数据结构，该结构可以在不同时间戳存储对应同一个键的多个值，并针对特定时间戳检索键对应的值。

实现 `TimeMap` 类：

- `TimeMap()` 初始化数据结构对象
- `void set(String key, String value, int timestamp)` 存储给定时间戳 `timestamp` 时的键 `key` 和值 `value`。
- `String get(String key, int timestamp)` 返回一个值，该值在之前调用了 `set`，其中 `timestamp_prev <= timestamp` 。如果有多个这样的值，它将返回与最大 `timestamp_prev` 关联的值。如果没有值，则返回空字符串（`""`）。

---

- **示例 1：**

```txt
输入：
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
输出：
[null, null, "bar", "bar", null, "bar2", "bar2"]

解释：
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // 存储键 "foo" 和值 "bar" ，时间戳 timestamp = 1
timeMap.get("foo", 1);         // 返回 "bar"
timeMap.get("foo", 3);         // 返回 "bar", 因为在时间戳 3 和时间戳 2 处没有对应 "foo" 的值，所以唯一的值位于时间戳 1 处（即 "bar"） 。
timeMap.set("foo", "bar2", 4); // 存储键 "foo" 和值 "bar2" ，时间戳 timestamp = 4
timeMap.get("foo", 4);         // 返回 "bar2"
timeMap.get("foo", 5);         // 返回 "bar2"
```

---

**提示：**

- `1 <= key.length, value.length <= 100`
- `key` 和 `value` 由小写英文字母和数字组成
- `1 <= timestamp <= 10^7`
- `set` 操作中的时间戳 `timestamp` 都是严格递增的
- 最多调用 `set` 和 `get` 操作 `2 * 10^5` 次

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
