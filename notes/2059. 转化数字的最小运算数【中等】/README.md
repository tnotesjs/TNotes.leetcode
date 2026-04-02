# [2059. 转化数字的最小运算数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2059.%20%E8%BD%AC%E5%8C%96%E6%95%B0%E5%AD%97%E7%9A%84%E6%9C%80%E5%B0%8F%E8%BF%90%E7%AE%97%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS](#2--s1---bfs)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-operations-to-convert-number/)

给你一个下标从 0 开始的整数数组 `nums`，该数组由 互不相同 的数字组成。另给你两个整数 `start` 和 `goal`。

整数 `x` 的值最开始设为 `start`，你打算执行一些运算使 `x` 转化为 `goal`。你可以对数字 `x` 重复执行下述运算：

如果 `0 <= x <= 1000`，那么，对于数组中的任一下标 `i`（`0 <= i < nums.length`），可以将 `x` 设为下述任一值：

- `x + nums[i]`
- `x - nums[i]`
- `x ^ nums[i]`（按位异或 XOR）

注意，你可以按任意顺序使用每个 `nums[i]` 任意次。使 `x` 越过 `0 <= x <= 1000` 范围的运算同样可以生效，但该该运算执行后将不能执行其他运算。

返回将 `x = start` 转化为 `goal` 的最小操作数；如果无法完成转化，则返回 `-1`。

---

示例 1：

```txt
输入：nums = [2,4,12], start = 2, goal = 12
输出：2
解释：
可以按 2 → 14 → 12 的转化路径进行，只需执行下述 2 次运算：
- 2 + 12 = 14
- 14 - 2 = 12
```

示例 2：

```txt
输入：nums = [3,5,7], start = 0, goal = -4
输出：2
解释：
可以按 0 → 3 → -4 的转化路径进行，只需执行下述 2 次运算：
- 0 + 3 = 3
- 3 - 7 = -4
注意，最后一步运算使 x 超过范围 0 <= x <= 1000，但该运算仍然可以生效。
```

示例 3：

```txt
输入：nums = [2,8,16], start = 0, goal = 1
输出：-1
解释：
无法将 0 转化为 1
```

---

提示：

- `1 <= nums.length <= 1000`
- `-10^9 <= nums[i], goal <= 10^9`
- `0 <= start <= 1000`
- `start != goal`
- `nums` 中的所有整数互不相同

## 2. 🎯 s.1 - BFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1001 \times n)$，其中 n 是 nums 数组长度，状态空间为 [0, 1000]
- 空间复杂度：$O(1001)$，visited 数组大小固定

算法思路：

- 从 start 出发做 BFS，每一步对当前值 x 尝试三种运算：x+num、x-num、x^num
- 如果结果等于 goal 直接返回步数，否则若在 [0, 1000] 范围内且未访问则入队
- 范围外的值不入队但仍可作为 goal 的判定结果
