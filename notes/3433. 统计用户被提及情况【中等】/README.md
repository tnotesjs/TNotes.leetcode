# [3433. 统计用户被提及情况【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3433.%20%E7%BB%9F%E8%AE%A1%E7%94%A8%E6%88%B7%E8%A2%AB%E6%8F%90%E5%8F%8A%E6%83%85%E5%86%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-mentions-per-user/)

给你一个整数 `numberOfUsers` 表示用户总数，另有一个大小为 `n x 3` 的数组 `events` 。

每个 `events[i]` 都属于下述两种类型之一：

1. **消息事件（Message Event）：**`["MESSAGE", "timestampi", "mentions_stringi"]`
   - 事件表示在 `timestampi` 时，一组用户被消息提及。
   - `mentions_stringi` 字符串包含下述标识符之一：
     - `id<number>`：其中 `<number>` 是一个区间 `[0,numberOfUsers - 1]` 内的整数。可以用单个空格分隔 **多个** id ，并且 id 可能重复。此外，这种形式可以提及离线用户。
     - `ALL`：提及 **所有** 用户。
     - `HERE`：提及所有 **在线** 用户。
2. **离线事件（Offline Event）：**`["OFFLINE", "timestampi", "idi"]`
   - 事件表示用户 `idi` 在 `timestampi` 时变为离线状态 **60 个单位时间**。用户会在 `timestampi + 60` 时自动再次上线。

返回数组 `mentions` ，其中 `mentions[i]` 表示 id 为 `i` 的用户在所有 `MESSAGE` 事件中被提及的次数。

最初所有用户都处于在线状态，并且如果某个用户离线或者重新上线，其对应的状态变更将会在所有相同时间发生的消息事件之前进行处理和同步。

**注意** 在单条消息中，同一个用户可能会被提及多次。每次提及都需要被 **分别** 统计。

---

- **示例 1：**

**输入：** numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","71","HERE"]]

**输出：** [2,2]

**解释：**

最初，所有用户都在线。

时间戳 10 ，`id1` 和 `id0` 被提及，`mentions = [1,1]`

时间戳 11 ，`id0` **离线** 。

时间戳 71 ，`id0` 再次 **上线** 并且 `"HERE"` 被提及，`mentions = [2,2]`

---

- **示例 2：**

**输入：** numberOfUsers = 2, events = [["MESSAGE","10","id1 id0"],["OFFLINE","11","0"],["MESSAGE","12","ALL"]]

**输出：** [2,2]

**解释：**

最初，所有用户都在线。

时间戳 10 ，`id1` 和 `id0` 被提及，`mentions = [1,1]`

时间戳 11 ，`id0` **离线** 。

时间戳 12 ，`"ALL"` 被提及。这种方式将会包括所有离线用户，所以 `id0` 和 `id1` 都被提及，`mentions = [2,2]`

---

- **示例 3：**

**输入：** numberOfUsers = 2, events = [["OFFLINE","10","0"],["MESSAGE","12","HERE"]]

**输出：** [0,1]

**解释：**

最初，所有用户都在线。

时间戳 10 ，`id0` **离线** **。**

时间戳 12 ，`"HERE"` 被提及。由于 `id0` 仍处于离线状态，其将不会被提及，`mentions = [0,1]`

---

**提示：**

- `1 <= numberOfUsers <= 100`
- `1 <= events.length <= 100`
- `events[i].length == 3`
- `events[i][0]` 的值为 `MESSAGE` 或 `OFFLINE` 。
- `1 <= int(events[i][1]) <= 10^5`
- 在任意 `"MESSAGE"` 事件中，以 `id<number>` 形式提及的用户数目介于 `1` 和 `100` 之间。
- `0 <= <number> <= numberOfUsers - 1`
- 题目保证 `OFFLINE` 引用的用户 id 在事件发生时处于 **在线** 状态。

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
