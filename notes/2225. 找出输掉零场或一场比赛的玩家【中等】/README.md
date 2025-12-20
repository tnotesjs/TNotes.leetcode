# [2225. 找出输掉零场或一场比赛的玩家【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2225.%20%E6%89%BE%E5%87%BA%E8%BE%93%E6%8E%89%E9%9B%B6%E5%9C%BA%E6%88%96%E4%B8%80%E5%9C%BA%E6%AF%94%E8%B5%9B%E7%9A%84%E7%8E%A9%E5%AE%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-players-with-zero-or-one-losses/)

给你一个整数数组 `matches` 其中 `matches[i] = [winneri, loseri]` 表示在一场比赛中 `winneri` 击败了 `loseri` 。

返回一个长度为 2 的列表 `answer` ：

- `answer[0]` 是所有 没有 输掉任何比赛的玩家列表。
- `answer[1]` 是所有恰好输掉 一场 比赛的玩家列表。

两个列表中的值都应该按 递增 顺序返回。

注意：

- 只考虑那些参与 至少一场 比赛的玩家。
- 生成的测试用例保证 不存在 两场比赛结果 相同 。

---

- 示例 1：

```txt
输入：matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
输出：[[1,2,10],[4,5,7,8]]
解释：
玩家 1、2 和 10 都没有输掉任何比赛。
玩家 4、5、7 和 8 每个都输掉一场比赛。
玩家 3、6 和 9 每个都输掉两场比赛。
因此，answer[0] = [1,2,10] 和 answer[1] = [4,5,7,8] 。
```

- 示例 2：

```txt
输入：matches = [[2,3],[1,3],[5,4],[6,4]]
输出：[[1,2,5,6],[]]
解释：
玩家 1、2、5 和 6 都没有输掉任何比赛。
玩家 3 和 4 每个都输掉两场比赛。
因此，answer[0] = [1,2,5,6] 和 answer[1] = [] 。
```

---

提示：

- `1 <= matches.length <= 10^5`
- `matches[i].length == 2`
- `1 <= winneri, loseri <= 10^5`
- `winneri != loseri`
- 所有 `matches[i]` 互不相同

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
