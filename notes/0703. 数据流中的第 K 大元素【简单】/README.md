# [0703. 数据流中的第 K 大元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0703.%20%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E7%AC%AC%20K%20%E5%A4%A7%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🫧 评价](#2--评价)
- [3. 🎯 s.1 - 最小堆](#3--s1---最小堆)
- [4. 🎯 s.2 - 优先队列（更简洁）](#4--s2---优先队列更简洁)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/kth-largest-element-in-a-stream/)

设计一个找到数据流中第 `k` 大元素的类（class）。注意是排序后的第 `k` 大元素，不是第 `k` 个不同的元素。

请实现 `KthLargest` 类：

- `KthLargest(int k, int[] nums)` 使用整数 `k` 和整数流 `nums` 初始化对象。
- `int add(int val)` 将 `val` 插入数据流 `nums` 后，返回当前数据流中第 `k` 大的元素。

---

- **示例 1：**

```txt
输入：
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

输出：[null, 4, 5, 5, 8, 8]

解释：

KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3); // 返回 4
kthLargest.add(5); // 返回 5
kthLargest.add(10); // 返回 5
kthLargest.add(9); // 返回 8
kthLargest.add(4); // 返回 8
```

**示例 2：**

```txt
输入：
["KthLargest", "add", "add", "add", "add"]
[[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]

输出：[null, 7, 7, 7, 8]

解释：

KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
kthLargest.add(2); // 返回 7
kthLargest.add(10); // 返回 7
kthLargest.add(9); // 返回 7
kthLargest.add(9); // 返回 8
```

---

**提示：**

- `0 <= nums.length <= 10^4`
- `1 <= k <= nums.length + 1`
- `-10^4 <= nums[i] <= 10^4`
- `-10^4 <= val <= 10^4`
- 最多调用 `add` 方法 `10^4` 次

## 2. 🫧 评价

- `s.1` 是手写最小堆
- `s.2` 是利用内置的 [datastructures-js 中的 MinPriorityQueue](https://datastructures-js.info/docs/priority-queue)
  - Javascript 语言执行环境中内置了 datastructures-js 中的数据结构。

## 3. 🎯 s.1 - 最小堆

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \log k)$，其中 n 是添加元素的个数，每次添加操作的时间复杂度为 $O(\log k)$
- 空间复杂度：$O(k)$，堆中最多存储 k 个元素

## 4. 🎯 s.2 - 优先队列（更简洁）

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n \log k)$，其中 n 是添加元素的个数，每次添加操作的时间复杂度为 $O(\log k)$
- 空间复杂度：$O(k)$，堆中最多存储 k 个元素

## 5. 🔗 引用

- [datastructures-js 中的 MinPriorityQueue][1]

[1]: https://datastructures-js.info/docs/priority-queue
