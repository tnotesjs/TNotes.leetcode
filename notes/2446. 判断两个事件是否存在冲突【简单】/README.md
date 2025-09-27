# [2446. 判断两个事件是否存在冲突【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2446.%20%E5%88%A4%E6%96%AD%E4%B8%A4%E4%B8%AA%E4%BA%8B%E4%BB%B6%E6%98%AF%E5%90%A6%E5%AD%98%E5%9C%A8%E5%86%B2%E7%AA%81%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-if-two-events-have-conflict/)

给你两个字符串数组 `event1` 和  `event2` ，表示发生在同一天的两个闭区间时间段事件，其中：

- `event1 = [startTime1, endTime1]` 且
- `event2 = [startTime2, endTime2]`

事件的时间为有效的 24 小时制且按  `HH:MM`  格式给出。

当两个事件存在某个非空的交集时（即，某些时刻是两个事件都包含的），则认为出现 **冲突** 。

如果两个事件之间存在冲突，返回  `true` ；否则，返回  `false` 。

---

- **示例 1：**

```txt
输入：event1 = ["01:15","02:00"], event2 = ["02:00","03:00"]
输出：true
解释：两个事件在 2:00 出现交集。
```

- **示例 2：**

```txt
输入：event1 = ["01:00","02:00"], event2 = ["01:20","03:00"]
输出：true
解释：两个事件的交集从 01:20 开始，到 02:00 结束。
```

- **示例 3：**

```txt
输入：event1 = ["10:00","11:00"], event2 = ["14:00","15:00"]
输出：false
解释：两个事件不存在交集。
```

---

**提示：**

- `event1.length == event2.length == 2`
- `event1[i].length == event2[i].length == 5`
- `startTime1 <= endTime1`
- `startTime2 <= endTime2`
- 所有事件的时间都按照  `HH:MM`  格式给出

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
