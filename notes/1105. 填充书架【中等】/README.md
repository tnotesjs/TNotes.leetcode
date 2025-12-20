# [1105. 填充书架【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1105.%20%E5%A1%AB%E5%85%85%E4%B9%A6%E6%9E%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/filling-bookcase-shelves/)

给定一个数组 `books` ，其中 `books[i] = [thicknessi, heighti]` 表示第 `i` 本书的厚度和高度。你也会得到一个整数 `shelfWidth` 。

按顺序 将这些书摆放到总宽度为 `shelfWidth` 的书架上。

先选几本书放在书架上（它们的厚度之和小于等于书架的宽度 `shelfWidth` ），然后再建一层书架。重复这个过程，直到把所有的书都放在书架上。

需要注意的是，在上述过程的每个步骤中，摆放书的顺序与给定图书数组 `books` 顺序相同。

- 例如，如果这里有 5 本书，那么可能的一种摆放情况是：第一和第二本书放在第一层书架上，第三本书放在第二层书架上，第四和第五本书放在最后一层书架上。

每一层所摆放的书的最大高度就是这一层书架的层高，书架整体的高度为各层高之和。

以这种方式布置书架，返回书架整体可能的最小高度。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-16-22-07.png)

```txt
输入：books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
输出：6
解释：
3 层书架的高度和为 1 + 3 + 2 = 6 。
第 2 本书不必放在第一层书架上。
```

- 示例 2：

```txt
输入: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
输出: 4
```

---

提示：

- `1 <= books.length <= 1000`
- `1 <= thicknessi <= shelfWidth <= 1000`
- `1 <= heighti <= 1000`

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
