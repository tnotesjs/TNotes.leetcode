# [1157. 子数组中占绝大多数的元素【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1157.%20%E5%AD%90%E6%95%B0%E7%BB%84%E4%B8%AD%E5%8D%A0%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/online-majority-element-in-subarray/)

设计一个数据结构，有效地找到给定子数组的 多数元素。

子数组的 多数元素 是在子数组中出现 `threshold` 次数或次数以上的元素。

实现 `MajorityChecker` 类:

- `MajorityChecker(int[] arr)` 会用给定的数组 `arr` 对 `MajorityChecker` 初始化。
- `int query(int left, int right, int threshold)` 返回子数组中的元素 `arr[left...right]` 至少出现 `threshold` 次数，如果不存在这样的元素则返回 `-1`。

---

- 示例 1：

```txt
输入:
["MajorityChecker", "query", "query", "query"]
[[[1, 1, 2, 2, 1, 1]], [0, 5, 4], [0, 3, 3], [2, 3, 2]]
输出：
[null, 1, -1, 2]

解释：
MajorityChecker majorityChecker = new MajorityChecker([1,1,2,2,1,1]);
majorityChecker.query(0,5,4); // 返回 1
majorityChecker.query(0,3,3); // 返回 -1
majorityChecker.query(2,3,2); // 返回 2
```

---

提示：

- `1 <= arr.length <= 2 * 10^4`
- `1 <= arr[i] <= 2 * 10^4`
- `0 <= left <= right < arr.length`
- `threshold <= right - left + 1`
- `2 * threshold > right - left + 1`
- 调用 `query` 的次数最多为 `10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
