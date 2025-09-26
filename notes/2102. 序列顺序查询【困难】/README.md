# [2102. 序列顺序查询【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2102.%20%E5%BA%8F%E5%88%97%E9%A1%BA%E5%BA%8F%E6%9F%A5%E8%AF%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sequentially-ordinal-rank-tracker/)

一个观光景点由它的名字 `name` 和景点评分 `score` 组成，其中 `name` 是所有观光景点中 **唯一** 的字符串，`score` 是一个整数。景点按照最好到最坏排序。景点评分 **越高** ，这个景点越好。如果有两个景点的评分一样，那么 **字典序较小** 的景点更好。

你需要搭建一个系统，查询景点的排名。初始时系统里没有任何景点。这个系统支持：

- **添加** 景点，每次添加 **一个** 景点。
- **查询** 已经添加景点中第 `i` **好** 的景点，其中 `i` 是系统目前位置查询的次数（包括当前这一次）。
  - 比方说，如果系统正在进行第 `4` 次查询，那么需要返回所有已经添加景点中第 `4` 好的。

注意，测试数据保证 **任意查询时刻** ，查询次数都 **不超过** 系统中景点的数目。

请你实现 `SORTracker` 类：

- `SORTracker()` 初始化系统。
- `void add(string name, int score)` 向系统中添加一个名为 `name` 评分为 `score` 的景点。
- `string get()` 查询第 `i` 好的景点，其中 `i` 是目前系统查询的次数（包括当前这次查询）。

---

- **示例：**

```txt
输入：
["SORTracker", "add", "add", "get", "add", "get", "add", "get", "add", "get", "add", "get", "get"]
[[], ["bradford", 2], ["branford", 3], [], ["alps", 2], [], ["orland", 2], [], ["orlando", 3], [], ["alpine", 2], [], []]
输出：
[null, null, null, "branford", null, "alps", null, "bradford", null, "bradford", null, "bradford", "orland"]

解释：
SORTracker tracker = new SORTracker(); // 初始化系统
tracker.add("bradford", 2); // 添加 name="bradford" 且 score=2 的景点。
tracker.add("branford", 3); // 添加 name="branford" 且 score=3 的景点。
tracker.get();              // 从好到坏的景点为：branford ，bradford 。
                            // 注意到 branford 比 bradford 好，因为它的 评分更高 (3 > 2) 。
                            // 这是第 1 次调用 get() ，所以返回最好的景点："branford" 。
tracker.add("alps", 2);     // 添加 name="alps" 且 score=2 的景点。
tracker.get();              // 从好到坏的景点为：branford, alps, bradford 。
                            // 注意 alps 比 bradford 好，虽然它们评分相同，都为 2 。
                            // 这是因为 "alps" 字典序 比 "bradford" 小。
                            // 返回第 2 好的地点 "alps" ，因为当前为第 2 次调用 get() 。
tracker.add("orland", 2);   // 添加 name="orland" 且 score=2 的景点。
tracker.get();              // 从好到坏的景点为：branford, alps, bradford, orland 。
                            // 返回 "bradford" ，因为当前为第 3 次调用 get() 。
tracker.add("orlando", 3);  // 添加 name="orlando" 且 score=3 的景点。
tracker.get();              // 从好到坏的景点为：branford, orlando, alps, bradford, orland 。
                            // 返回 "bradford".
tracker.add("alpine", 2);   // 添加 name="alpine" 且 score=2 的景点。
tracker.get();              // 从好到坏的景点为：branford, orlando, alpine, alps, bradford, orland 。
                            // 返回 "bradford" 。
tracker.get();              // 从好到坏的景点为：branford, orlando, alpine, alps, bradford, orland 。
                            // 返回 "orland" 。
```

---

**提示：**

- `name` 只包含小写英文字母，且每个景点名字互不相同。
- `1 <= name.length <= 10`
- `1 <= score <= 10^5`
- 任意时刻，调用 `get` 的次数都不超过调用 `add` 的次数。
- **总共** 调用 `add` 和 `get` 不超过 `4 * 10^4`

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
