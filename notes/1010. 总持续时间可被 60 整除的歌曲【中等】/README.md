# [1010. 总持续时间可被 60 整除的歌曲【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1010.%20%E6%80%BB%E6%8C%81%E7%BB%AD%E6%97%B6%E9%97%B4%E5%8F%AF%E8%A2%AB%2060%20%E6%95%B4%E9%99%A4%E7%9A%84%E6%AD%8C%E6%9B%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/pairs-of-songs-with-total-durations-divisible-by-60/)

在歌曲列表中，第 `i` 首歌曲的持续时间为 `time[i]` 秒。

返回其总持续时间（以秒为单位）可被 `60` 整除的歌曲对的数量。形式上，我们希望下标数字 `i` 和 `j` 满足 `i < j` 且有 `(time[i] + time[j]) % 60 == 0`。

---

- 示例 1：

```txt
输入：time = [30,20,150,100,40]
输出：3
解释：这三对的总持续时间可被 60 整除：
(time[0] = 30, time[2] = 150): 总持续时间 180
(time[1] = 20, time[3] = 100): 总持续时间 120
(time[1] = 20, time[4] = 40): 总持续时间 60
```

- 示例 2：

```txt
输入：time = [60,60,60]
输出：3
解释：所有三对的总持续时间都是 120，可以被 60 整除。
```

---

提示：

- `1 <= time.length <= 6 * 10^4`
- `1 <= time[i] <= 500`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
