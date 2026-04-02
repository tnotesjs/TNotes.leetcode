# [0155. 最小栈【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0155.%20%E6%9C%80%E5%B0%8F%E6%A0%88%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 辅助栈](#2--s1---辅助栈)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/min-stack/)

设计一个支持 `push`，`pop`，`top` 操作，并能在常数时间内检索到最小元素的栈。

实现 `MinStack` 类:

- `MinStack()` 初始化堆栈对象。
- `void push(int val)` 将元素 val 推入堆栈。
- `void pop()` 删除堆栈顶部的元素。
- `int top()` 获取堆栈顶部的元素。
- `int getMin()` 获取堆栈中的最小元素。

---

示例 1：

```txt
输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
```

---

提示：

- `-2^31 <= val <= 2^31 - 1`
- `pop`、`top` 和 `getMin` 操作总是在 非空栈 上调用
- `push`,`pop`,`top`, and`getMin`最多被调用 `3 * 10^4` 次

## 2. 🎯 s.1 - 辅助栈

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$，所有操作均为常数时间
- 空间复杂度：$O(n)$，其中 $n$ 是栈中元素的数量

算法思路：

- 使用一个辅助栈 `minStack` 同步记录当前栈中的最小值
- `push` 时，若新元素 $\leq$ 辅助栈栈顶，则同时压入辅助栈
- `pop` 时，若弹出元素等于辅助栈栈顶，则辅助栈也弹出
