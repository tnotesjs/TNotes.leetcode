# [1261. 在受污染的二叉树中查找元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1261.%20%E5%9C%A8%E5%8F%97%E6%B1%A1%E6%9F%93%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E6%9F%A5%E6%89%BE%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-elements-in-a-contaminated-binary-tree/)

给出一个满足下述规则的二叉树：

1. `root.val == 0`
2. 对于任意 `treeNode`：
   1. 如果 `treeNode.val` 为 `x` 且 `treeNode.left != null`，那么 `treeNode.left.val == 2 * x + 1`
   2. 如果 `treeNode.val` 为 `x` 且 `treeNode.right != null`，那么 `treeNode.right.val == 2 * x + 2`

现在这个二叉树受到「污染」，所有的 `treeNode.val` 都变成了 `-1`。

请你先还原二叉树，然后实现 `FindElements` 类：

- `FindElements(TreeNode* root)` 用受污染的二叉树初始化对象，你需要先把它还原。
- `bool find(int target)` 判断目标值 `target` 是否存在于还原后的二叉树中并返回结果。

---

- 示例 1：

```txt
输入：
["FindElements","find","find"]
[[[-1,null,-1]],[1],[2]]
输出：
[null,false,true]
解释：
FindElements findElements = new FindElements([-1,null,-1]);
findElements.find(1); // return False
findElements.find(2); // return True
```

- 示例 2：

```txt
输入：
["FindElements","find","find","find"]
[[[-1,-1,-1,-1,-1]],[1],[3],[5]]
输出：
[null,true,true,false]
解释：
FindElements findElements = new FindElements([-1,-1,-1,-1,-1]);
findElements.find(1); // return True
findElements.find(3); // return True
findElements.find(5); // return False
```

- 示例 3：

```txt
输入：
["FindElements","find","find","find","find"]
[[[-1,null,-1,-1,null,-1]],[2],[3],[4],[5]]
输出：
[null,true,false,false,true]
解释：
FindElements findElements = new FindElements([-1,null,-1,-1,null,-1]);
findElements.find(2); // return True
findElements.find(3); // return False
findElements.find(4); // return False
findElements.find(5); // return True
```

---

提示：

- `TreeNode.val == -1`
- 二叉树的高度不超过 `20`
- 节点的总数在 `[1, 10^4]` 之间
- 调用 `find()` 的总次数在 `[1, 10^4]` 之间
- `0 <= target <= 10^6`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
