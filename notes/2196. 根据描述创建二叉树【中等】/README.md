# [2196. 根据描述创建二叉树【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2196.%20%E6%A0%B9%E6%8D%AE%E6%8F%8F%E8%BF%B0%E5%88%9B%E5%BB%BA%E4%BA%8C%E5%8F%89%E6%A0%91%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/create-binary-tree-from-s/)

给你一个二维整数数组 `descriptions` ，其中 `descriptions[i] = [parenti, childi, isLefti]` 表示 `parenti` 是 `childi` 在 **二叉树** 中的 **父节点**，二叉树中各节点的值 **互不相同** 。此外：

- 如果 `isLefti == 1` ，那么 `childi` 就是 `parenti` 的左子节点。
- 如果 `isLefti == 0` ，那么 `childi` 就是 `parenti` 的右子节点。

请你根据 `descriptions` 的描述来构造二叉树并返回其 **根节点** 。

测试用例会保证可以构造出 **有效** 的二叉树。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-10-23-24.png)

```txt
输入：descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
输出：[50,20,80,15,17,19]
解释：根节点是值为 50 的节点，因为它没有父节点。
结果二叉树如上图所示。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-10-23-29.png)

```txt
输入：descriptions = [[1,2,1],[2,3,0],[3,4,1]]
输出：[1,2,null,null,3,4]
解释：根节点是值为 1 的节点，因为它没有父节点。
结果二叉树如上图所示。
```

---

**提示：**

- `1 <= descriptions.length <= 10^4`
- `descriptions[i].length == 3`
- `1 <= parenti, childi <= 10^5`
- `0 <= isLefti <= 1`
- `descriptions` 所描述的二叉树是一棵有效二叉树

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
