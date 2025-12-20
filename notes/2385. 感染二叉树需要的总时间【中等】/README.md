# [2385. 感染二叉树需要的总时间【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2385.%20%E6%84%9F%E6%9F%93%E4%BA%8C%E5%8F%89%E6%A0%91%E9%9C%80%E8%A6%81%E7%9A%84%E6%80%BB%E6%97%B6%E9%97%B4%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/amount-of-time-for-binary-tree-to-be-infected/)

给你一棵二叉树的根节点 `root` ，二叉树中节点的值 互不相同 。另给你一个整数 `start` 。在第 `0` 分钟，感染 将会从值为 `start` 的节点开始爆发。

每分钟，如果节点满足以下全部条件，就会被感染：

- 节点此前还没有感染。
- 节点与一个已感染节点相邻。

返回感染整棵树需要的分钟数*。*

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-51-23.png)

```txt
输入：root = [1,5,3,null,4,10,6,9,2], start = 3
输出：4
解释：节点按以下过程被感染：
- 第 0 分钟：节点 3
- 第 1 分钟：节点 1、10、6
- 第 2 分钟：节点5
- 第 3 分钟：节点 4
- 第 4 分钟：节点 9 和 2
感染整棵树需要 4 分钟，所以返回 4 。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-19-51-30.png)

```txt
输入：root = [1], start = 1
输出：0
解释：第 0 分钟，树中唯一一个节点处于感染状态，返回 0 。
```

---

提示：

- 树中节点的数目在范围 `[1, 10^5]` 内
- `1 <= Node.val <= 10^5`
- 每个节点的值 互不相同
- 树中必定存在值为 `start` 的节点

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
