# [1348. 推文计数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1348.%20%E6%8E%A8%E6%96%87%E8%AE%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/tweet-counts-per-frequency/)

一家社交媒体公司正试图通过分析特定时间段内出现的推文数量来监控其网站上的活动。这些时间段可以根据特定的频率（ 每分钟 、每小时 或 每一天 ）划分为更小的 时间段 。

例如，周期 `[10,10000]` （以 秒 为单位）将被划分为以下频率的 时间块 :

- 每 分钟 (60 秒 块)： `[10,69]`, `[70,129]`, `[130,189]`, `...`, `[9970,10000]`
- 每 小时 (3600 秒 块)：`[10,3609]`, `[3610,7209]`, `[7210,10000]`
- 每 天 (86400 秒 块)： `[10,10000]`

注意，最后一个块可能比指定频率的块大小更短，并且总是以时间段的结束时间结束(在上面的示例中为 `10000` )。

设计和实现一个 API 来帮助公司进行分析。

实现 `TweetCounts` 类:

- `TweetCounts()` 初始化 `TweetCounts` 对象。
- 存储记录时间的 `tweetName` (以秒为单位)。
- `List<integer> getTweetCountsPerFrequency(String freq, String tweetName, int startTime, int endTime)` 返回一个整数列表，表示给定时间 `[startTime, endTime]` （单位秒）和频率频率中，每个 时间块 中带有 `tweetName` 的 `tweet` 的数量。
  - `freq` 是 `“minute”` 、 `“hour”` 或 `“day”` 中的一个，分别表示 每分钟 、 每小时 或 每一天 的频率。

示例：

```txt
输入：
[
  "TweetCounts",
  "recordTweet",
  "recordTweet",
  "recordTweet",
  "getTweetCountsPerFrequency",
  "getTweetCountsPerFrequency",
  "recordTweet",
  "getTweetCountsPerFrequency"
]

[
  [],
  ["tweet3", 0],
  ["tweet3", 60],
  ["tweet3", 10],
  ["minute", "tweet3", 0, 59],
  ["minute", "tweet3", 0, 60],
  ["tweet3", 120],
  ["hour", "tweet3", 0, 210]
]


输出：
[null,null,null,null,[2],[2,1],null,[4]]

解释：
TweetCounts tweetCounts = new TweetCounts();
tweetCounts.recordTweet("tweet3", 0);
tweetCounts.recordTweet("tweet3", 60);
tweetCounts.recordTweet("tweet3", 10);                             // "tweet3" 发布推文的时间分别是 0, 10 和 60 。
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 59); // 返回 [2]。统计频率是每分钟（60 秒），因此只有一个有效时间间隔 [0,60> - > 2 条推文。
tweetCounts.getTweetCountsPerFrequency("minute", "tweet3", 0, 60); // 返回 [2,1]。统计频率是每分钟（60 秒），因此有两个有效时间间隔 1) [0,60> - > 2 条推文，和 2) [60,61> - > 1 条推文。
tweetCounts.recordTweet("tweet3", 120);                            // "tweet3" 发布推文的时间分别是 0, 10, 60 和 120 。
tweetCounts.getTweetCountsPerFrequency("hour", "tweet3", 0, 210);  // 返回 [4]。统计频率是每小时（3600 秒），因此只有一个有效时间间隔 [0,211> - > 4 条推文。
```

---

提示：

- `0 <= time, startTime, endTime <= 10^9`
- `0 <= endTime - startTime <= 10^4`
- `recordTweet` 和 `getTweetCountsPerFrequency`，最多有 `10^4` 次操作。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
