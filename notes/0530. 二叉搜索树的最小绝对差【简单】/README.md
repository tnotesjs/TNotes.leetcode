# [0530. 二叉搜索树的最小绝对差【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0530.%20%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E6%9C%80%E5%B0%8F%E7%BB%9D%E5%AF%B9%E5%B7%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 中序遍历计算相邻成员之间的差值](#2--s1---中序遍历计算相邻成员之间的差值)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)

给你一个二叉搜索树的根节点 `root` ，返回 **树中任意两不同节点值之间的最小差值** 。

差值是一个正数，其数值等于两值之差的绝对值。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-41-13.png)

```txt
输入：root = [4,2,6,1,3]
输出：1
```

- **示例 2：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-12-16-41-17.png)

```txt
输入：root = [1,0,48,null,null,12,49]
输出：1
```

---

**提示：**

- 树中节点的数目范围是 `[2, 10^4]`
- `0 <= Node.val <= 10^5`

::: warning 注意

- 本题与 [783. 二叉搜索树节点最小距离][1] 相同

:::

## 2. 🎯 s.1 - 中序遍历计算相邻成员之间的差值

::: code-group

<<< ./solutions/1/1.js [js]

:::

- **时间复杂度**：$O(n)$，其中 $n$ 是二叉搜索树的节点数，需要遍历每个节点一次
- **空间复杂度**：$O(h)$，其中 $h$ 是二叉搜索树的高度，递归调用栈的深度。平均情况下为 $O(\log n)$，最坏情况下为 $O(n)$
- 解题思路：
  1. **中序遍历**：
     - 利用 BST 的性质，中序遍历得到有序序列
     - 在遍历过程中直接 **计算相邻元素的差值**
  2. **差值计算**：
     - 使用 prev 记录前一个访问节点的值
     - 当前节点值与前一个节点值的差就是可能的最小差值之一
     - 因为序列有序，所以相邻元素的差值最小
  3. **维护最小差值**：
     - 使用 minDiff 记录当前找到的最小差值
     - 每次计算新差值时更新 minDiff

## 3. 🔗 引用

- [783. 二叉搜索树节点最小距离][1]

[1]: https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
