# [0641. 设计循环双端队列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0641.%20%E8%AE%BE%E8%AE%A1%E5%BE%AA%E7%8E%AF%E5%8F%8C%E7%AB%AF%E9%98%9F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/design-circular-deque/)

设计实现双端队列。

实现 `MyCircularDeque` 类:

- `MyCircularDeque(int k)` ：构造函数,双端队列最大为 `k`。
- `boolean insertFront()`：将一个元素添加到双端队列头部。 如果操作成功返回 `true`，否则返回 `false`。
- `boolean insertLast()` ：将一个元素添加到双端队列尾部。如果操作成功返回 `true`，否则返回 `false`。
- `boolean deleteFront()` ：从双端队列头部删除一个元素。 如果操作成功返回 `true`，否则返回 `false`。
- `boolean deleteLast()` ：从双端队列尾部删除一个元素。如果操作成功返回 `true`，否则返回 `false`。
- `int getFront()` ：从双端队列头部获得一个元素。如果双端队列为空，返回 `-1`。
- `int getRear()` ：获得双端队列的最后一个元素。 如果双端队列为空，返回 `-1`。
- `boolean isEmpty()` ：若双端队列为空，则返回 `true`，否则返回 `false`。
- `boolean isFull()` ：若双端队列满了，则返回 `true`，否则返回 `false`。

示例 1：

```
输入
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
输出
[null, true, true, true, false, 2, true, true, true, 4]

解释
MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
circularDeque.insertLast(1);			        // 返回 true
circularDeque.insertLast(2);			        // 返回 true
circularDeque.insertFront(3);			        // 返回 true
circularDeque.insertFront(4);			        // 已经满了，返回 false
circularDeque.getRear();  				// 返回 2
circularDeque.isFull();				        // 返回 true
circularDeque.deleteLast();			        // 返回 true
circularDeque.insertFront(4);			        // 返回 true
circularDeque.getFront();				// 返回 4
```

提示：

- `1 <= k <= 1000`
- `0 <= value <= 1000`
- `insertFront`, `insertLast`, `deleteFront`, `deleteLast`, `getFront`, `getRear`, `isEmpty`, `isFull` 调用次数不大于 `2000` 次

## 2. 🎯 s.1 - 循环数组

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$，所有操作均为常数时间
- 空间复杂度：$O(k)$

算法思路：

- 用大小为 `k + 1` 的循环数组，维护 `front` 和 `rear` 两个指针
- 空判断：`front == rear`；满判断：`(rear + 1) % cap == front`
- 头部插入向前移动 `front`，尾部插入向后移动 `rear`
