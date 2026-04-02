# [0039. 组合总和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0039.%20%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯 + 排序剪枝](#2--s1---回溯--排序剪枝)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/combination-sum/)

给你一个无重复元素的整数数组 `candidates` 和一个目标整数 `target`，找出 `candidates` 中可以使数字和为目标数 `target` 的所有不同组合，并以列表形式返回。你可以按任意顺序返回这些组合。

`candidates` 中的同一个数字可以无限制重复被选取。如果至少一个数字的被选数量不同，则两种组合是不同的。

对于给定的输入，保证和为 `target` 的不同组合数少于 `150` 个。

---

示例 1：

```txt
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
```

解释：

- 2 和 3 可以形成一组候选，2 + 2 + 3 = 7。注意 2 可以使用多次。
- 7 也是一个候选， 7 = 7。
- 仅有这两种组合。

---

示例 2：

```txt
输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
```

---

示例 3：

```txt
输入: candidates = [2], target = 1
输出: []
```

---

提示：

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- `candidates` 的所有元素互不相同
- `1 <= target <= 40`

## 2. 🎯 s.1 - 回溯 + 排序剪枝

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \cdot 2^{\frac{T}{m}})$，其中 $T$ 是目标和，$m$ 是候选数组最小元素，$n$ 是每个结果复制的开销
- 空间复杂度：$O(\frac{T}{m})$，递归栈深度最多为 $\frac{T}{m}$（不计输出结果）

算法思路：

- 先对 `candidates` 升序排序，使枚举有序，便于剪枝
- `backtrack(start, remain, path)`：从下标 `start` 开始枚举，每次选取 `candidates[i]` 后，下一层仍从 `i` 开始（允许重复选取）
- `remain == 0` 时收集当前路径到结果；若 `candidates[i] > remain` 则 `break`（后续元素更大，无需继续）
