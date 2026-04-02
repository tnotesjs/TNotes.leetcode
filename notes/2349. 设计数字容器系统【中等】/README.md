# [2349. 设计数字容器系统【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2349.%20%E8%AE%BE%E8%AE%A1%E6%95%B0%E5%AD%97%E5%AE%B9%E5%99%A8%E7%B3%BB%E7%BB%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表 + 最小堆](#2--s1---哈希表--最小堆)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/design-a-number-container-system/)

设计一个数字容器系统，可以实现以下功能：

- 在系统中给定下标处 插入 或者 替换 一个数字。
- 返回 系统中给定数字的最小下标。

请你实现一个 `NumberContainers` 类：

- `NumberContainers()` 初始化数字容器系统。
- `void change(int index, int number)` 在下标 `index` 处填入 `number`。如果该下标 `index` 处已经有数字了，那么用 `number` 替换该数字。
- `int find(int number)` 返回给定数字 `number` 在系统中的最小下标。如果系统中没有 `number`，那么返回 `-1`。

示例：

```txt
输入：
["NumberContainers", "find", "change", "change", "change", "change", "find", "change", "find"]
[[], [10], [2, 10], [1, 10], [3, 10], [5, 10], [10], [1, 20], [10]]
输出：
[null, -1, null, null, null, null, 1, null, 2]

解释：
NumberContainers nc = new NumberContainers();
nc.find(10); // 没有数字 10，所以返回 -1。
nc.change(2, 10); // 容器中下标为 2 处填入数字 10。
nc.change(1, 10); // 容器中下标为 1 处填入数字 10。
nc.change(3, 10); // 容器中下标为 3 处填入数字 10。
nc.change(5, 10); // 容器中下标为 5 处填入数字 10。
nc.find(10); // 数字 10 所在的下标为 1，2，3 和 5。因为最小下标为 1，所以返回 1。
nc.change(1, 20); // 容器中下标为 1 处填入数字 20。注意，下标 1 处之前为 10，现在被替换为 20。
nc.find(10); // 数字 10 所在下标为 2，3 和 5。最小下标为 2，所以返回 2。
```

---

提示：

- `1 <= index, number <= 10^9`
- 调用 `change` 和 `find` 的 总次数 不超过 `10^5` 次。

## 2. 🎯 s.1 - 哈希表 + 最小堆

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：change $O(\log n)$，find 均摊 $O(\log n)$，其中 n 是操作次数
- 空间复杂度：$O(n)$，存储哈希表和堆

算法思路：

- 用 idxToNum 哈希表记录每个索引当前的数字
- 用 numToIdxs 哈希表为每个数字维护一个最小堆存储索引
- change 时直接更新映射并插入堆，find 时用懒删除弹出无效堆顶（索引对应数字已变）
