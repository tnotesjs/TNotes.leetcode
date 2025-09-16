# [0900. RLE 迭代器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0900.%20RLE%20%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/rle-iterator/)

我们可以使用游程编码(即 **RLE** )来编码一个整数序列。在偶数长度 `encoding` ( **从 0 开始** )的游程编码数组中，对于所有偶数 `i` ，`encoding[i]` 告诉我们非负整数 `encoding[i + 1]` 在序列中重复的次数。

- 例如，序列 `arr = [8,8,8,5,5]` 可以被编码为 `encoding =[3,8,2,5]` 。`encoding =[3,8,0,9,2,5]` 和 `encoding =[2,8,1,8,2,5]` 也是 `arr` 有效的 **RLE** 。

给定一个游程长度的编码数组，设计一个迭代器来遍历它。

实现 `RLEIterator` 类:

- `RLEIterator(int[] encoded)` 用编码后的数组初始化对象。
- `int next(int n)` 以这种方式耗尽后 `n` 个元素并返回最后一个耗尽的元素。如果没有剩余的元素要耗尽，则返回 `-1` 。

---

- **示例 1：**

```txt
输入：
["RLEIterator","next","next","next","next"]
[[[3,8,0,9,2,5]],[2],[1],[1],[2]]
输出：
[null,8,8,5,-1]
解释：
RLEIterator rLEIterator = new RLEIterator([3, 8, 0, 9, 2, 5]); // 这映射到序列 [8,8,8,5,5]。
rLEIterator.next(2); // 耗去序列的 2 个项，返回 8。现在剩下的序列是 [8, 5, 5]。
rLEIterator.next(1); // 耗去序列的 1 个项，返回 8。现在剩下的序列是 [5, 5]。
rLEIterator.next(1); // 耗去序列的 1 个项，返回 5。现在剩下的序列是 [5]。
rLEIterator.next(2); // 耗去序列的 2 个项，返回 -1。 这是由于第一个被耗去的项是 5，
但第二个项并不存在。由于最后一个要耗去的项不存在，我们返回 -1。
```

---

**提示：**

- `2 <= encoding.length <= 1000`
- `encoding.length` 为偶
- `0 <= encoding[i] <= 10^9`
- `1 <= n <= 10^9`
- 每个测试用例调用`next` 不高于 `1000` 次

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
