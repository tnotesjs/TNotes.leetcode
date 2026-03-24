# [0057. 插入区间【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0057.%20%E6%8F%92%E5%85%A5%E5%8C%BA%E9%97%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 一次遍历（三阶段合并）](#2--s1---一次遍历三阶段合并)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/insert-interval)

给你一个无重叠的，按照区间起始端点排序的区间列表 `intervals`，其中 `intervals[i] = [starti, endi]` 表示第 `i` 个区间的开始和结束，并且 `intervals` 按照 `starti` 升序排列。同样给定一个区间 `newInterval = [start, end]` 表示另一个区间的开始和结束。

在 `intervals` 中插入区间 `newInterval`，使得 `intervals` 依然按照 `starti` 升序排列，且区间之间不重叠（如果有必要的话，可以合并区间）。

返回插入之后的 `intervals`。

注意你不需要原地修改 `intervals`。你可以创建一个新数组然后返回它。

---

示例 1：

```
输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
```

---

- 示例 2：

```
输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
```

解释：这是因为新的区间 `[4, 8]` 与 `[3 , 5], [6, 7], [8, 10]` 重叠。

---

提示：

- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^5`
- `intervals` 根据 `starti` 按 升序 排列
- `newInterval.length == 2`
- `0 <= start <= end <= 10^5`

## 2. 🎯 s.1 - 一次遍历（三阶段合并）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是区间数组的长度，只需遍历一次
- 空间复杂度：$O(1)$，不计输出数组，只使用常数额外空间

算法思路：

- 将区间分为三组，依次处理：
  1. **左侧不重叠**：所有 `end < newInterval[0]` 的区间，直接加入结果
  2. **重叠合并**：所有 `start <= newInterval[1]` 的区间，与 `newInterval` 合并（取 `min(start)` 和 `max(end)`），合并完成后将 `newInterval` 加入结果
  3. **右侧不重叠**：剩余区间直接加入结果
