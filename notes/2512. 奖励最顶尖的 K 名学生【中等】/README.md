# [2512. 奖励最顶尖的 K 名学生【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2512.%20%E5%A5%96%E5%8A%B1%E6%9C%80%E9%A1%B6%E5%B0%96%E7%9A%84%20K%20%E5%90%8D%E5%AD%A6%E7%94%9F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reward-top-k-students/)

给你两个字符串数组 `positive_feedback` 和 `negative_feedback`，分别包含表示正面的和负面的词汇。不会 有单词同时是正面的和负面的。

一开始，每位学生分数为 `0`。每个正面的单词会给学生的分数 加 `3` 分，每个负面的词会给学生的分数 减 `1` 分。

给你 `n` 个学生的评语，用一个下标从 0 开始的字符串数组 `report` 和一个下标从 0 开始的整数数组 `student_id` 表示，其中 `student_id[i]` 表示这名学生的 ID，这名学生的评语是 `report[i]`。每名学生的 ID 互不相同。

给你一个整数 `k`，请你返回按照得分 从高到低 最顶尖的 `k` 名学生。如果有多名学生分数相同，ID 越小排名越前。

---

示例 1：

```txt
输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is studious","the student is smart"], student_id = [1,2], k = 2
输出：[1,2]
解释：
两名学生都有 1 个正面词汇，都得到 3 分，学生 1 的 ID 更小所以排名更前。
```

示例 2：

```txt
输入：positive_feedback = ["smart","brilliant","studious"], negative_feedback = ["not"], report = ["this student is not studious","the student is smart"], student_id = [1,2], k = 2
输出：[2,1]
解释：
- ID 为 1 的学生有 1 个正面词汇和 1 个负面词汇，所以得分为 3-1=2 分。
- ID 为 2 的学生有 1 个正面词汇，得分为 3 分。
学生 2 分数更高，所以返回 [2,1]。
```

---

提示：

- `1 <= positive_feedback.length, negative_feedback.length <= 10^4`
- `1 <= positive_feedback[i].length, negative_feedback[j].length <= 100`
- `positive_feedback[i]` 和 `negative_feedback[j]` 都只包含小写英文字母。
- `positive_feedback` 和 `negative_feedback` 中不会有相同单词。
- `n == report.length == student_id.length`
- `1 <= n <= 10^4`
- `report[i]` 只包含小写英文字母和空格 `' '`。
- `report[i]` 中连续单词之间有单个空格隔开。
- `1 <= report[i].length <= 100`
- `1 <= student_id[i] <= 10^9`
- `student_id[i]` 的值 互不相同。
- `1 <= k <= n`

## 2. 🎯 s.1 - 哈希集合 + 排序

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \cdot L + n \log n)$，其中 $n$ 是学生数，$L$ 是评语平均长度
- 空间复杂度：$O(P + N + n)$，其中 $P$、$N$ 分别是正面、负面词汇数

算法思路：

- 将正面和负面词汇分别放入哈希集合
- 对每个学生的评语拆分单词，查询正负词汇集合计算得分
- 按得分降序，得分相同按 ID 升序排序，取前 $k$ 个
