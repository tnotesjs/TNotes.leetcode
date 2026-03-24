# [0380. O(1) 时间插入、删除和获取随机元素【中等】](<https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0380.%20O(1)%20%E6%97%B6%E9%97%B4%E6%8F%92%E5%85%A5%E3%80%81%E5%88%A0%E9%99%A4%E5%92%8C%E8%8E%B7%E5%8F%96%E9%9A%8F%E6%9C%BA%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91>)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/insert-delete-getrandom-o1/)

实现`RandomizedSet` 类：

- `RandomizedSet()` 初始化 `RandomizedSet` 对象
- `bool insert(int val)` 当元素 `val` 不存在时，向集合中插入该项，并返回 `true` ；否则，返回 `false`。
- `bool remove(int val)` 当元素 `val` 存在时，从集合中移除该项，并返回 `true` ；否则，返回 `false`。
- `int getRandom()` 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。每个元素应该有 相同的概率 被返回。

你必须实现类的所有函数，并满足每个函数的 平均 时间复杂度为 `O(1)`。

示例：

```txt
输入
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
输出
[null, true, false, true, 2, true, false, 2]

解释
RandomizedSet randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // 向集合中插入 1。返回 true 表示 1 被成功地插入。
randomizedSet.remove(2); // 返回 false，表示集合中不存在 2。
randomizedSet.insert(2); // 向集合中插入 2。返回 true。集合现在包含 [1,2]。
randomizedSet.getRandom(); // getRandom 应随机返回 1 或 2。
randomizedSet.remove(1); // 从集合中移除 1，返回 true。集合现在包含 [2]。
randomizedSet.insert(2); // 2 已在集合中，所以返回 false。
randomizedSet.getRandom(); // 由于 2 是集合中唯一的数字，getRandom 总是返回 2。
```

---

提示：

- `-2^31 <= val <= 2^31 - 1`
- 最多调用 `insert`、`remove` 和 `getRandom` 函数 `2 *` `10^5` 次
- 在调用 `getRandom` 方法时，数据结构中 至少存在一个 元素。

## 2. 🎯 s.1 - 哈希表 + 动态数组

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：所有操作均为 $O(1)$
- 空间复杂度：$O(n)$

算法思路：

- 哈希表存储值到索引的映射，数组存储元素
- 删除时将目标元素与末尾交换后 `pop`，保证 $O(1)$
- `getRandom` 直接随机索引数组
