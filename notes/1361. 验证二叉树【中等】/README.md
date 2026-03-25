# [1361. 验证二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1361.%20%E9%AA%8C%E8%AF%81%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/validate-binary-tree-nodes/)

二叉树上有 `n` 个节点，按从 `0` 到 `n - 1` 编号，其中节点 `i` 的两个子节点分别是 `leftChild[i]` 和 `rightChild[i]`。

只有 所有 节点能够形成且 只 形成 一颗 有效的二叉树时，返回 `true`；否则返回 `false`。

如果节点 `i` 没有左子节点，那么 `leftChild[i]` 就等于 `-1`。右子节点也符合该规则。

注意：节点没有值，本问题中仅仅使用节点编号。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-49-47.png)

```txt
输入：n = 4, leftChild = [1,-1,3,-1], rightChild = [2,-1,-1,-1]
输出：true
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-50-07.png)

```txt
输入：n = 4, leftChild = [1,-1,3,-1], rightChild = [2,3,-1,-1]
输出：false
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-20-18-50-14.png)

```txt
输入：n = 2, leftChild = [1,0], rightChild = [-1,-1]
输出：false
```

---

提示：

- `n == leftChild.length == rightChild.length`
- `1 <= n <= 10^4`
- `-1 <= leftChild[i], rightChild[i] <= n - 1`

## 2. 🎯 s.1 - 入度 + BFS

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是节点数
- 空间复杂度：$O(n)$，BFS 队列和 visited 集合的空间

算法思路：

- 统计每个节点的入度，合法二叉树恰好有一个入度为 0 的根节点
- 从根节点 BFS 遍历，检查是否能访问所有 n 个节点
- 若入度 > 1 或根不唿一或访问数 ≠ n，则不合法
