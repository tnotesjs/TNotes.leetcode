# [3169. 无需开会的工作日【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3169.%20%E6%97%A0%E9%9C%80%E5%BC%80%E4%BC%9A%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%97%A5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-days-without-meetings/)

给你一个正整数 `days`，表示员工可工作的总天数（从第 1 天开始）。另给你一个二维数组 `meetings`，长度为 `n`，其中 `meetings[i] = [start_i, end_i]` 表示第 `i` 次会议的开始和结束天数（包含首尾）。

返回员工可工作且没有安排会议的天数。

---

**注意：** 会议时间可能会有重叠。

---

- **示例 1：**

**输入：** days = 10, meetings = [[5,7],[1,3],[9,10]]

**输出：** 2

**解释：**

第 4 天和第 8 天没有安排会议。

---

- **示例 2：**

**输入：** days = 5, meetings = [[2,4],[1,3]]

**输出：** 1

**解释：**

第 5 天没有安排会议。

---

- **示例 3：**

**输入：** days = 6, meetings = [[1,6]]

**输出：** 0

**解释：**

所有工作日都安排了会议。

---

**提示：**

- `1 <= days <= 10^9`
- `1 <= meetings.length <= 10^5`
- `meetings[i].length == 2`
- `1 <= meetings[i][0] <= meetings[i][1] <= days`

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
