# [2276. 统计区间中的整数数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2276.%20%E7%BB%9F%E8%AE%A1%E5%8C%BA%E9%97%B4%E4%B8%AD%E7%9A%84%E6%95%B4%E6%95%B0%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-integers-in-intervals/)

给你区间的 **空** 集，请你设计并实现满足要求的数据结构：

- **新增：**添加一个区间到这个区间集合中。
- **统计：**计算出现在 **至少一个** 区间中的整数个数。

实现 `CountIntervals` 类：

- `CountIntervals()` 使用区间的空集初始化对象
- `void add(int left, int right)` 添加区间 `[left, right]` 到区间集合之中。
- `int count()` 返回出现在 **至少一个** 区间中的整数个数。

---

**注意：** 区间 `[left, right]` 表示满足 `left <= x <= right` 的所有整数 `x` 。

---

- **示例 1：**

```txt
输入
["CountIntervals", "add", "add", "count", "add", "count"]
[[], [2, 3], [7, 10], [], [5, 8], []]
输出
[null, null, null, 6, null, 8]

解释
CountIntervals countIntervals = new CountIntervals(); // 用一个区间空集初始化对象
countIntervals.add(2, 3);  // 将 [2, 3] 添加到区间集合中
countIntervals.add(7, 10); // 将 [7, 10] 添加到区间集合中
countIntervals.count();    // 返回 6
                           // 整数 2 和 3 出现在区间 [2, 3] 中
                           // 整数 7、8、9、10 出现在区间 [7, 10] 中
countIntervals.add(5, 8);  // 将 [5, 8] 添加到区间集合中
countIntervals.count();    // 返回 8
                           // 整数 2 和 3 出现在区间 [2, 3] 中
                           // 整数 5 和 6 出现在区间 [5, 8] 中
                           // 整数 7 和 8 出现在区间 [5, 8] 和区间 [7, 10] 中
                           // 整数 9 和 10 出现在区间 [7, 10] 中
```

---

**提示：**

- `1 <= left <= right <= 10^9`
- 最多调用 `add` 和 `count` 方法 **总计** `10^5` 次
- 调用 `count` 方法至少一次

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
