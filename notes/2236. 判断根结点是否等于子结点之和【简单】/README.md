# [2236. 判断根结点是否等于子结点之和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2236.%20%E5%88%A4%E6%96%AD%E6%A0%B9%E7%BB%93%E7%82%B9%E6%98%AF%E5%90%A6%E7%AD%89%E4%BA%8E%E5%AD%90%E7%BB%93%E7%82%B9%E4%B9%8B%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/root-equals-sum-of-children/)

给你一个 **二叉树** 的根结点 `root`，该二叉树由恰好 `3` 个结点组成：根结点、左子结点和右子结点。

如果根结点值等于两个子结点值之和，返回 `true` ，否则返回 `false` 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-32-59.png)

```txt
输入：root = [10,4,6]
输出：true
解释：根结点、左子结点和右子结点的值分别是 10 、4 和 6 。
由于 10 等于 4 + 6 ，因此返回 true 。
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-11-33-15.png)

```txt
输入：root = [5,3,1]
输出：false
解释：根结点、左子结点和右子结点的值分别是 5 、3 和 1 。
由于 5 不等于 3 + 1 ，因此返回 false 。
```

---

**提示：**

- 树只包含根结点、左子结点和右子结点
- `-100 <= Node.val <= 100`

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
