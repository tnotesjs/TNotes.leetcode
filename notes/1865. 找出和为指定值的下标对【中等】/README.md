# [1865. 找出和为指定值的下标对【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1865.%20%E6%89%BE%E5%87%BA%E5%92%8C%E4%B8%BA%E6%8C%87%E5%AE%9A%E5%80%BC%E7%9A%84%E4%B8%8B%E6%A0%87%E5%AF%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/finding-pairs-with-a-certain-sum/)

给你两个整数数组 `nums1` 和 `nums2`，请你实现一个支持下述两类查询的数据结构：

1. 累加，将一个正整数加到 `nums2` 中指定下标对应元素上。
2. 计数，统计满足 `nums1[i] + nums2[j]` 等于指定值的下标对 `(i, j)` 数目（`0 <= i < nums1.length` 且 `0 <= j < nums2.length`）。

实现 `FindSumPairs` 类：

- `FindSumPairs(int[] nums1, int[] nums2)` 使用整数数组 `nums1` 和 `nums2` 初始化 `FindSumPairs` 对象。
- `void add(int index, int val)` 将 `val` 加到 `nums2[index]` 上，即，执行 `nums2[index] += val`。
- `int count(int tot)` 返回满足 `nums1[i] + nums2[j] == tot` 的下标对 `(i, j)` 数目。

示例：

```txt
输入：
["FindSumPairs", "count", "add", "count", "count", "add", "add", "count"]
[[[1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]], [7], [3, 2], [8], [4], [0, 1], [1, 1], [7]]
输出：
[null, 8, null, 2, 1, null, null, 11]

解释：
FindSumPairs findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4]);
findSumPairs.count(7);  // 返回 8 ; 下标对 (2,2), (3,2), (4,2), (2,4), (3,4), (4,4) 满足 2 + 5 = 7，下标对 (5,1), (5,5) 满足 3 + 4 = 7
findSumPairs.add(3, 2); // 此时 nums2 = [1,4,5,4,5,4]
findSumPairs.count(8);  // 返回 2 ；下标对 (5,2), (5,4) 满足 3 + 5 = 8
findSumPairs.count(4);  // 返回 1 ；下标对 (5,0) 满足 3 + 1 = 4
findSumPairs.add(0, 1); // 此时 nums2 = [2,4,5,4,5,4]
findSumPairs.add(1, 1); // 此时 nums2 = [2,5,5,4,5,4]
findSumPairs.count(7);  // 返回 11 ；下标对 (2,1), (2,2), (2,4), (3,1), (3,2), (3,4), (4,1), (4,2), (4,4) 满足 2 + 5 = 7，下标对 (5,3), (5,5) 满足 3 + 4 = 7
```

---

提示：

- `1 <= nums1.length <= 1000`
- `1 <= nums2.length <= 10^5`
- `1 <= nums1[i] <= 10^9`
- `1 <= nums2[i] <= 10^5`
- `0 <= index < nums2.length`
- `1 <= val <= 10^5`
- `1 <= tot <= 10^9`
- 最多调用 `add` 和 `count` 函数各 `1000` 次

## 2. 🎯 s.1 - 设计类 + 哈希表

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：初始化 $O(n_1 + n_2)$，count 为 $O(n_1 + n_2)$
- 空间复杂度：$O(n_1 + n_2)$，哈希表的空间

算法思路：

- 用哈希表分别统计两个数组中每个值的出现次数
- count(tot) 时遍历第一个数组的哈希表，查询第二个数组中 `tot - val` 的数量
- 两者数量相乘并累加即为满足条件的下标对数
