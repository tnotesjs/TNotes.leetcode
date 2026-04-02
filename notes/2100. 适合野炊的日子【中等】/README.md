# [2100. 适合野炊的日子【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2100.%20%E9%80%82%E5%90%88%E9%87%8E%E7%82%8A%E7%9A%84%E6%97%A5%E5%AD%90%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前缀数组](#2--s1---前缀数组)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-good-days-to-rob-the-bank/)

你和朋友们准备去野炊。给你一个下标从 0 开始的整数数组 `security`，其中 `security[i]` 是第 `i` 天的建议出行指数。日子从 `0` 开始编号。同时给你一个整数 `time`。

如果第 `i` 天满足以下所有条件，我们称它为一个适合野炊的日子：

- 第 `i` 天前和后都分别至少有 `time` 天。
- 第 `i` 天前连续 `time` 天建议出行指数都是非递增的。
- 第 `i` 天后连续 `time` 天建议出行指数都是非递减的。

更正式的，第 `i` 天是一个适合野炊的日子当且仅当：`security[i - time] >= security[i - time + 1] >= ... >= security[i] <= ... <= security[i + time - 1] <= security[i + time]`.

请你返回一个数组，包含 所有 适合野炊的日子（下标从 0 开始）。返回的日子可以 任意 顺序排列。

---

示例 1：

```txt
输入：security = [5,3,3,3,5,6,2], time = 2
输出：[2,3]
解释：
第 2 天，我们有 security[0] >= security[1] >= security[2] <= security[3] <= security[4]。
第 3 天，我们有 security[1] >= security[2] >= security[3] <= security[4] <= security[5]。
没有其他日子符合这个条件，所以日子 2 和 3 是适合野炊的日子。
```

示例 2：

```txt
输入：security = [1,1,1,1,1], time = 0
输出：[0,1,2,3,4]
解释：
因为 time 等于 0，所以每一天都是适合野炊的日子，所以返回每一天。
```

示例 3：

```txt
输入：security = [1,2,3,4,5,6], time = 2
输出：[]
解释：
没有任何一天的前 2 天建议出行指数是非递增的。
所以没有适合野炊的日子，返回空数组。
```

---

提示：

- `1 <= security.length <= 10^5`
- `0 <= security[i], time <= 10^5`

## 2. 🎯 s.1 - 前缀数组

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是 security 数组长度
- 空间复杂度：$O(n)$，用于存储 dec 和 inc 辅助数组

算法思路：

- 预处理 dec[i]：以 i 结尾的连续非递增天数；inc[i]：以 i 开头的连续非递减天数
- 遍历每个位置，若 dec[i] ≥ time 且 inc[i] ≥ time，则该日适合野炊
- 只需检查 [time, n - time) 范围内的位置
