# [0284. 窥视迭代器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0284.%20%E7%AA%A5%E8%A7%86%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/peeking-iterator/)

请你在设计一个迭代器，在集成现有迭代器拥有的 `hasNext` 和 `next` 操作的基础上，还额外支持 `peek` 操作。

实现 `PeekingIterator` 类：

- `PeekingIterator(Iterator<int> nums)` 使用指定整数迭代器 `nums` 初始化迭代器。
- `int next()` 返回数组中的下一个元素，并将指针移动到下个元素处。
- `bool hasNext()` 如果数组中存在下一个元素，返回 `true` ；否则，返回 `false`。
- `int peek()` 返回数组中的下一个元素，但 不 移动指针。

---

注意：每种语言可能有不同的构造函数和迭代器 `Iterator`，但均支持 `int next()` 和 `boolean hasNext()` 函数。

---

示例 1：

```txt
输入：
["PeekingIterator", "next", "peek", "next", "next", "hasNext"]
[[[1, 2, 3]], [], [], [], [], []]
输出：
[null, 1, 2, 2, 3, false]

解释：
PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [1,2,3]
peekingIterator.next();    // 返回 1，指针移动到下一个元素 [1,2,3]
peekingIterator.peek();    // 返回 2，指针未发生移动 [1,2,3]
peekingIterator.next();    // 返回 2，指针移动到下一个元素 [1,2,3]
peekingIterator.next();    // 返回 3，指针移动到下一个元素 [1,2,3]
peekingIterator.hasNext(); // 返回 False
```

---

提示：

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- 对 `next` 和 `peek` 的调用均有效
- `next`、`hasNext` 和 `peek` 最多调用 `1000` 次

进阶：你将如何拓展你的设计？使之变得通用化，从而适应所有的类型，而不只是整数型？

## 2. 🎯 s.1 - 缓存下一个元素

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：每个操作均为 $O(1)$
- 空间复杂度：$O(1)$，只缓存一个元素

算法思路：

- 用一个变量缓存 `peek` 的结果，配合布尔标记记录是否已缓存
- `peek` 时若未缓存则调用 `next` 并存储，`next` 时优先返回缓存值
