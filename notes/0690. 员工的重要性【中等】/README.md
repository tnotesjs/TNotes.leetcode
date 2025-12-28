# [0690. 员工的重要性【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0690.%20%E5%91%98%E5%B7%A5%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/employee-importance/)

你有一个保存员工信息的数据结构，它包含了员工唯一的 id ，重要度和直系下属的 id。

给定一个员工数组 `employees`，其中：

- `employees[i].id` 是第 `i` 个员工的 ID。
- `employees[i].importance` 是第 `i` 个员工的重要度。
- `employees[i].subordinates` 是第 `i` 名员工的直接下属的 ID 列表。

给定一个整数 `id` 表示一个员工的 ID，返回这个员工和他所有下属的重要度的 总和。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-33-21.png)

```txt
输入：employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1
输出：11
解释：
员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3。因此员工 1 的总重要度是 5 + 3 + 3 = 11。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-12-33-27.png)

```txt
输入：employees = [[1,2,[5]],[5,-3,[]]], id = 5
输出：-3
解释：员工 5 的重要度为 -3 并且没有直接下属。
因此，员工 5 的总重要度为 -3。
```

---

提示：

- `1 <= employees.length <= 2000`
- `1 <= employees[i].id <= 2000`
- 所有的 `employees[i].id` 互不相同。
- `-100 <= employees[i].importance <= 100`
- 一名员工最多有一名直接领导，并可能有多名下属。
- `employees[i].subordinates` 中的 ID 都有效。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
