# [0506. 相对名次【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0506.%20%E7%9B%B8%E5%AF%B9%E5%90%8D%E6%AC%A1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 排序索引](#2--s1---排序索引)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/relative-ranks/)

给你一个长度为 `n` 的整数数组 `score` ，其中 `score[i]` 是第 `i` 位运动员在比赛中的得分。所有得分都 互不相同。

运动员将根据得分 决定名次 ，其中名次第 `1` 的运动员得分最高，名次第 `2` 的运动员得分第 `2` 高，依此类推。运动员的名次决定了他们的获奖情况：

- 名次第 `1` 的运动员获金牌 `"Gold Medal"` 。
- 名次第 `2` 的运动员获银牌 `"Silver Medal"` 。
- 名次第 `3` 的运动员获铜牌 `"Bronze Medal"` 。
- 从名次第 `4` 到第 `n` 的运动员，只能获得他们的名次编号（即，名次第 `x` 的运动员获得编号 `"x"`）。

使用长度为 `n` 的数组 `answer` 返回获奖，其中 `answer[i]` 是第 `i` 位运动员的获奖情况。

---

- 示例 1：

```txt
输入：score = [5,4,3,2,1]
输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]
解释：名次为 [1st, 2nd, 3rd, 4th, 5th] 。
```

- 示例 2：

```txt
输入：score = [10,3,8,9,4]
输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]
解释：名次为 [1st, 5th, 3rd, 2nd, 4th] 。
```

---

提示：

- `n == score.length`
- `1 <= n <= 10^4`
- `0 <= score[i] <= 10^6`
- `score` 中的所有值 互不相同

## 2. 🎯 s.1 - 排序索引

::: code-group

<<< ./solutions/1/1.js {15} [js]

:::

- 时间复杂度：$O(n \times \log n)$，主要消耗在排序操作上
- 空间复杂度：$O(n)$，需要额外的索引数组和结果数组
- 解题思路：
  1. 排序索引：创建索引数组并按照分数降序排序
  2. 分配名次：根据排序后的索引分配名次
  3. 处理特殊名次：前三名分配奖牌名称，其余分配数字名次
- 核心：索引数组 `indices`
  - `indices.sort((a, b) => score[b] - score[a])`
  - 创建索引数组，将索引数组排序，根据索引数组得到结果数组。
- 执行过程示例：

::: code-group

```txt {7} [示例 1]
输入：score = [5,4,3,2,1]
输出：["Gold Medal","Silver Medal","Bronze Medal","4","5"]

1. 创建索引数组: indices = [0,1,2,3,4]
2. 按分数降序排序索引:
   - score[0]=5, score[1]=4, score[2]=3, score[3]=2, score[4]=1
   - 排序后: indices = [0,1,2,3,4]
3. 分配名次:
   - indices[0]=0: 第1名 -> result[0] = "Gold Medal"
   - indices[1]=1: 第2名 -> result[1] = "Silver Medal"
   - indices[2]=2: 第3名 -> result[2] = "Bronze Medal"
   - indices[3]=3: 第4名 -> result[3] = "4"
   - indices[4]=4: 第5名 -> result[4] = "5"
4. 返回结果: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
```

```txt {8} [示例 2]
输入：score = [10,3,8,9,4]
输出：["Gold Medal","5","Bronze Medal","Silver Medal","4"]

1. 创建索引数组: indices = [0,1,2,3,4]
2. 按分数降序排序索引:
   - score[0]=10, score[1]=3, score[2]=8, score[3]=9, score[4]=4
   - 降序: 10(索引0), 9(索引3), 8(索引2), 4(索引4), 3(索引1)
   - 排序后: indices = [0,3,2,4,1]
3. 分配名次:
   - indices[0]=0: 第1名 -> result[0] = "Gold Medal"
   - indices[1]=3: 第2名 -> result[3] = "Silver Medal"
   - indices[2]=2: 第3名 -> result[2] = "Bronze Medal"
   - indices[3]=4: 第4名 -> result[4] = "4"
   - indices[4]=1: 第5名 -> result[1] = "5"
4. 返回结果: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
```

:::
