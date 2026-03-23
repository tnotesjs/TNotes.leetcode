# [0018. 四数之和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0018.%20%E5%9B%9B%E6%95%B0%E4%B9%8B%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序 + 双重枚举 + 双指针](#2--s1---排序--双重枚举--双指针)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/4sum/)

给你一个由 `n` 个整数组成的数组 `nums`，和一个目标值 `target`。请你找出并返回满足下述全部条件且不重复的四元组 `[nums[a], nums[b], nums[c], nums[d]]`（若两个四元组元素一一对应，则认为两个四元组重复）：

- `0 <= a, b, c, d < n`
- `a`、`b`、`c` 和 `d` 互不相同
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

你可以按任意顺序返回答案。

---

示例 1：

```txt
输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

示例 2：

```txt
输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
```

---

提示：

- `1 <= nums.length <= 200`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`

## 2. 🎯 s.1 - 排序 + 双重枚举 + 双指针

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^3)$，排序 $O(n \log n)$，外两层枚举 $O(n^2)$，内层双指针 $O(n)$，整体 $O(n^3)$ 主导
- 空间复杂度：$O(\log n)$，排序递归栈空间（不计输出数组）

算法思路：

- 先对数组升序排序，使相同元素相邻，便于去重
- 外两层分别枚举第一个数 `nums[i]` 和第二个数 `nums[j]`，问题转化为在 `j` 右侧找两数之和等于 `target - nums[i] - nums[j]`
- 内层用左右双指针收缩，四数之和小于目标则 `left++`，大于目标则 `right--`，等于则记录并跳过相邻重复元素
- C 版本用 `long long` 防止四数相加溢出（数有效内容可达 $\pm 4 \times 10^9$）
