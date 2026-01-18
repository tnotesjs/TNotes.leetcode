# [0381. O(1) 时间插入、删除和获取随机元素 - 允许重复【困难】](<https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0381.%20O(1)%20%E6%97%B6%E9%97%B4%E6%8F%92%E5%85%A5%E3%80%81%E5%88%A0%E9%99%A4%E5%92%8C%E8%8E%B7%E5%8F%96%E9%9A%8F%E6%9C%BA%E5%85%83%E7%B4%A0%20-%20%E5%85%81%E8%AE%B8%E9%87%8D%E5%A4%8D%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91>)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/insert-delete-getrandom-o1-duplicates-allowed/)

`RandomizedCollection` 是一种包含数字集合(可能是重复的)的数据结构。它应该支持插入和删除特定元素，以及删除随机元素。

实现 `RandomizedCollection` 类:

- `RandomizedCollection()`初始化空的 `RandomizedCollection` 对象。
- `bool insert(int val)` 将一个 `val` 项插入到集合中，即使该项已经存在。如果该项不存在，则返回 `true` ，否则返回 `false`。
- `bool remove(int val)` 如果存在，从集合中移除一个 `val` 项。如果该项存在，则返回 `true` ，否则返回 `false`。注意，如果 `val` 在集合中出现多次，我们只删除其中一个。
- `int getRandom()` 从当前的多个元素集合中返回一个随机元素。每个元素被返回的概率与集合中包含的相同值的数量 线性相关。

您必须实现类的函数，使每个函数的 平均 时间复杂度为 `O(1)`。

---

注意：生成测试用例时，只有在 `RandomizedCollection` 中 至少有一项 时，才会调用 `getRandom`。

---

示例 1：

```txt
输入
["RandomizedCollection", "insert", "insert", "insert", "getRandom", "remove", "getRandom"]
[[], [1], [1], [2], [], [1], []]
输出
[null, true, false, true, 2, true, 1]

解释
RandomizedCollection collection = new RandomizedCollection();// 初始化一个空的集合。
collection.insert(1);   // 返回 true，因为集合不包含 1。
                        // 将 1 插入到集合中。
collection.insert(1);   // 返回 false，因为集合包含 1。
                        // 将另一个 1 插入到集合中。集合现在包含 [1,1]。
collection.insert(2);   // 返回 true，因为集合不包含 2。
                        // 将 2 插入到集合中。集合现在包含 [1,1,2]。
collection.getRandom(); // getRandom 应当:
                        // 有 2/3 的概率返回 1,
                        // 1/3 的概率返回 2。
collection.remove(1);   // 返回 true，因为集合包含 1。
                        // 从集合中移除 1。集合现在包含 [1,2]。
collection.getRandom(); // getRandom 应该返回 1 或 2，两者的可能性相同。
```

---

提示：

- `-2^31 <= val <= 2^31 - 1`
- `insert`, `remove` 和 `getRandom` 最多 总共 被调用 `2 * 10^5` 次
- 当调用 `getRandom` 时，数据结构中 至少有一个 元素

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
