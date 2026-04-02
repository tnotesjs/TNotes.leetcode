# [2526. 找到数据流中的连续整数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2526.%20%E6%89%BE%E5%88%B0%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E8%BF%9E%E7%BB%AD%E6%95%B4%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 计数器](#2--s1---计数器)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-consecutive-integers-from-a-data-stream/)

给你一个整数数据流，请你实现一个数据结构，检查数据流中最后 `k` 个整数是否 等于 给定值 `value`。

请你实现 DataStream 类：

- `DataStream(int value, int k)` 用两个整数 `value` 和 `k` 初始化一个空的整数数据流。
- `boolean consec(int num)` 将 `num` 添加到整数数据流。如果后 `k` 个整数都等于 `value`，返回 `true`，否则返回 `false`。如果少于 `k` 个整数，条件不满足，所以也返回 `false`。

---

示例 1：

```txt
输入：
["DataStream", "consec", "consec", "consec", "consec"]
[[4, 3], [4], [4], [4], [3]]
输出：
[null, false, false, true, false]

解释：
DataStream dataStream = new DataStream(4, 3); // value = 4, k = 3
dataStream.consec(4); // 数据流中只有 1 个整数，所以返回 False。
dataStream.consec(4); // 数据流中只有 2 个整数
                      // 由于 2 小于 k，返回 False。
dataStream.consec(4); // 数据流最后 3 个整数都等于 value， 所以返回 True。
dataStream.consec(3); // 最后 k 个整数分别是 [4,4,3]。
                      // 由于 3 不等于 value，返回 False。
```

---

提示：

- `1 <= value, num <= 10^9`
- `1 <= k <= 10^5`
- 至多调用 `consec` 次数为 `10^5` 次。

## 2. 🎯 s.1 - 计数器

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：每次 `consec` 调用 $O(1)$
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 维护一个计数器 `count`，记录当前连续等于 `value` 的整数个数
- 当 `num === value` 时 `count++`，否则重置为 0
- 返回 `count >= k`
