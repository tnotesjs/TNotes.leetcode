# [1640. 能否连接形成数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1640.%20%E8%83%BD%E5%90%A6%E8%BF%9E%E6%8E%A5%E5%BD%A2%E6%88%90%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 映射拼接](#2--s1---映射拼接)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-array-formation-through-concatenation/)

给你一个整数数组 `arr`，数组中的每个整数 互不相同。另有一个由整数数组构成的数组 `pieces`，其中的整数也 互不相同。请你以 任意顺序 连接 `pieces` 中的数组以形成 `arr`。但是，不允许 对每个数组 `pieces[i]` 中的整数重新排序。

如果可以连接 `pieces` 中的数组形成 `arr`，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：arr = [15,88], pieces = [[88],[15]]
输出：true

解释：
依次连接 [15] 和 [88]
```

示例 2：

```txt
输入：arr = [49,18,16], pieces = [[16,18,49]]
输出：false

解释：
即便数字相符，也不能重新排列 pieces[0]
```

示例 3：

```txt
输入：arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
输出：true

解释：
依次连接 [91]、[4,64] 和 [78]
```

---

提示：

- `1 <= pieces.length <= arr.length <= 100`
- `sum(pieces[i].length) == arr.length`
- `1 <= pieces[i].length <= arr.length`
- `1 <= arr[i], pieces[i][j] <= 100`
- `arr` 中的整数互不相同
- `pieces` 中的整数互不相同（也就是说，如果将 `pieces` 扁平化成一维数组，数组中的所有整数互不相同）

## 2. 🎯 s.1 - 映射拼接

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是数组 arr 的长度，构建映射需要 O(M)（M 是 pieces 数量），遍历 arr 需要 O(N)
- 空间复杂度：$O(M)$，其中 M 是 pieces 的数量，哈希表最多存储 M 个片段

算法思路：

- 创建哈希表 `map`，将每个片段的首元素映射到对应的片段数组
- 初始化指针 `i` 为 0，从 `arr` 的开头开始遍历
- 每次循环：
  - 取当前元素 `arr[i]` 作为片段的起始元素
  - 如果 `map` 中不存在该起始元素，说明无法匹配，返回 `false`
  - 获取对应的片段 `segment`，逐个比对片段中的元素与 `arr` 中的连续元素
  - 如果任意位置不匹配，返回 `false`
  - 匹配成功后，指针 `i` 跳过整个片段的长度
- 如果所有元素都成功匹配，返回 `true`
