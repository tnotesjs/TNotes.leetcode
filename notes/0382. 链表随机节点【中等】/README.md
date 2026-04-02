# [0382. 链表随机节点【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0382.%20%E9%93%BE%E8%A1%A8%E9%9A%8F%E6%9C%BA%E8%8A%82%E7%82%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 蓄水池抽样](#2--s1---蓄水池抽样)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/linked-list-random-node/)

给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 被选中的概率一样。

实现 `Solution` 类：

- `Solution(ListNode head)` 使用整数数组初始化对象。
- `int getRandom()` 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。

示例：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-29-09.png)

```txt
输入
["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]
输出
[null, 1, 3, 2, 2, 3]

解释
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // 返回 1
solution.getRandom(); // 返回 3
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 2
solution.getRandom(); // 返回 3
// getRandom() 方法应随机返回 1、2、3中的一个，每个元素被返回的概率相等。
```

---

提示：

- 链表中的节点数在范围 `[1, 10^4]` 内
- `-10^4 <= Node.val <= 10^4`
- 至多调用 `getRandom` 方法 `10^4` 次

进阶：

- 如果链表非常大且长度未知，该怎么处理？
- 你能否在不使用额外空间的情况下解决此问题？

## 2. 🎯 s.1 - 蓄水池抽样

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(1)$，`getRandom` $O(n)$
- 空间复杂度：$O(1)$

算法思路：

- 蓄水池抽样：遍历链表时，第 $i$ 个节点以 $\frac{1}{i}$ 的概率被选中
- 保证每个节点被选中的概率均为 $\frac{1}{n}$
