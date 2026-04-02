# [1670. 设计前中后队列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1670.%20%E8%AE%BE%E8%AE%A1%E5%89%8D%E4%B8%AD%E5%90%8E%E9%98%9F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 数组模拟](#2--s1---数组模拟)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/design-front-middle-back-queue/)

请你设计一个队列，支持在前，中，后三个位置的 `push` 和 `pop` 操作。

请你完成 `FrontMiddleBack` 类：

- `FrontMiddleBack()` 初始化队列。
- `void pushFront(int val)` 将 `val` 添加到队列的 最前面。
- `void pushMiddle(int val)` 将 `val` 添加到队列的 正中间。
- `void pushBack(int val)` 将 `val` 添加到队里的 最后面。
- `int popFront()` 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 `-1`。
- `int popMiddle()` 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 `-1`。
- `int popBack()` 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 `-1`。

请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：

- 将 `6` 添加到 `[1, 2, 3, 4, 5]` 的中间位置，结果数组为 `[1, 2, 6, 3, 4, 5]`。
- 从 `[1, 2, 3, 4, 5, 6]` 的中间位置弹出元素，返回 `3`，数组变为 `[1, 2, 4, 5, 6]`。

---

示例 1：

```txt
输入：
["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
[[], [1], [2], [3], [4], [], [], [], [], []]
输出：
[null, null, null, null, null, 1, 3, 4, 2, -1]

解释：
FrontMiddleBackQueue q = new FrontMiddleBackQueue();
q.pushFront(1);   // [1]
q.pushBack(2);    // [1, 2]
q.pushMiddle(3);  // [1, 3, 2]
q.pushMiddle(4);  // [1, 4, 3, 2]
q.popFront();     // 返回 1 -> [4, 3, 2]
q.popMiddle();    // 返回 3 -> [4, 2]
q.popMiddle();    // 返回 4 -> [2]
q.popBack();      // 返回 2 -> []
q.popFront();     // 返回 -1 -> [] （队列为空）
```

---

提示：

- `1 <= val <= 10^9`
- 最多调用 `1000` 次 `pushFront`， `pushMiddle`， `pushBack`， `popFront`， `popMiddle` 和 `popBack`。

## 2. 🎯 s.1 - 数组模拟

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：单次操作 $O(n)$，其中 $n$ 为队列长度
- 空间复杂度：$O(n)$，存储队列元素

算法思路：

- 使用数组存储所有元素
- pushMiddle 在 ⌊n/2⌋ 位置插入，popMiddle 在 ⌊(n-1)/2⌋ 位置删除
- pushFront/pushBack/popFront/popBack 在首尾操作
