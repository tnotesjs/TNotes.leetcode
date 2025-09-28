# [2649. 嵌套数组生成器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2649.%20%E5%B5%8C%E5%A5%97%E6%95%B0%E7%BB%84%E7%94%9F%E6%88%90%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/nested-array-generator/)

现给定一个整数的 **多维数组** ，请你返回一个生成器对象，按照 **中序遍历** 的顺序逐个生成整数。

**多维数组** 是一个递归数据结构，包含整数和其他 **多维数组**。

**中序遍历** 是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用 **中序遍历** 。

---

- **示例 1：**

```txt
输入：arr = [[[6]],[1,3],[]]
输出：[6,1,3]
解释：
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
generator.next().done; // true
```

- **示例 2：**

```txt
输入：arr = []
输出：[]
解释：输入的多维数组没有任何参数，所以生成器不需要生成任何值。
```

---

**提示：**

- `0 <= arr.flat().length <= 10^5`
- `0 <= arr.flat()[i] <= 10^5`
- `maxNestingDepth <= 10^5`

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
