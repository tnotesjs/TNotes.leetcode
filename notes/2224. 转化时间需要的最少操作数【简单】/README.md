# [2224. 转化时间需要的最少操作数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2224.%20%E8%BD%AC%E5%8C%96%E6%97%B6%E9%97%B4%E9%9C%80%E8%A6%81%E7%9A%84%E6%9C%80%E5%B0%91%E6%93%8D%E4%BD%9C%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-operations-to-convert-time/)

给你两个字符串 `current` 和 `correct` ，表示两个 **24 小时制时间** 。

**24 小时制时间** 按 `"HH:MM"` 进行格式化，其中 `HH` 在 `00` 和 `23` 之间，而 `MM` 在 `00` 和 `59` 之间。最早的 24 小时制时间为 `00:00` ，最晚的是 `23:59` 。

在一步操作中，你可以将 `current` 这个时间增加 `1`、`5`、`15` 或 `60` 分钟。你可以执行这一操作 **任意** 次数。

返回将 `current` 转化为 `correct` 需要的 **最少操作数** 。

---

- **示例 1：**

```txt
输入：current = "02:30", correct = "04:35"
输出：3
解释：
可以按下述 3 步操作将 current 转换为 correct ：
- 为 current 加 60 分钟，current 变为 "03:30" 。
- 为 current 加 60 分钟，current 变为 "04:30" 。
- 为 current 加 5 分钟，current 变为 "04:35" 。
可以证明，无法用少于 3 步操作将 current 转化为 correct 。
```

- **示例 2：**

```txt
输入：current = "11:00", correct = "11:01"
输出：1
解释：只需要为 current 加一分钟，所以最小操作数是 1 。
```

---

**提示：**

- `current` 和 `correct` 都符合 `"HH:MM"` 格式
- `current <= correct`

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
