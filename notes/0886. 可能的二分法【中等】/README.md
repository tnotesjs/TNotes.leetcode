# [0886. 可能的二分法【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0886.%20%E5%8F%AF%E8%83%BD%E7%9A%84%E4%BA%8C%E5%88%86%E6%B3%95%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/possible-bipartition/)

给定一组  `n`  人（编号为  `1, 2, ..., n`），  我们想把每个人分进**任意**大小的两组。每个人都可能不喜欢其他人，那么他们不应该属于同一组。

给定整数 `n`  和数组 `dislikes` ，其中  `dislikes[i] = [ai, bi]` ，表示不允许将编号为 `ai`  和   `bi`的人归入同一组。当可以用这种方法将所有人分进两组时，返回 `true`；否则返回 `false`。

---

- **示例 1：**

```txt
输入：n = 4, dislikes = [[1,2],[1,3],[2,4]]
输出：true
解释：group1 [1,4], group2 [2,3]
```

- **示例 2：**

```txt
输入：n = 3, dislikes = [[1,2],[1,3],[2,3]]
输出：false
```

- **示例 3：**

```txt
输入：n = 5, dislikes = [[1,2],[2,3],[3,4],[4,5],[1,5]]
输出：false
```

---

**提示：**

- `1 <= n <= 2000`
- `0 <= dislikes.length <= 10^4`
- `dislikes[i].length == 2`
- `1 <= dislikes[i][j] <= n`
- `ai < bi`
- `dislikes`  中每一组都 **不同**

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
