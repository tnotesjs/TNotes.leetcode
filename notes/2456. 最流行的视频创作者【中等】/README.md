# [2456. 最流行的视频创作者【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2456.%20%E6%9C%80%E6%B5%81%E8%A1%8C%E7%9A%84%E8%A7%86%E9%A2%91%E5%88%9B%E4%BD%9C%E8%80%85%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/most-popular-video-creator/)

给你两个字符串数组 `creators` 和 `ids` ，和一个整数数组 `views` ，所有数组的长度都是 `n`。平台上第 `i` 个视频者是 `creator[i]` ，视频分配的 id 是 `ids[i]` ，且播放量为 `views[i]`。

视频创作者的 流行度 是该创作者的 所有 视频的播放量的 总和。请找出流行度 最高 创作者以及该创作者播放量 最大 的视频的 id。

- 如果存在多个创作者流行度都最高，则需要找出所有符合条件的创作者。
- 如果某个创作者存在多个播放量最高的视频，则只需要找出字典序最小的 `id`。

返回一个二维字符串数组 `answer` ，其中 `answer[i] = [creatori, idi]` 表示 `creatori` 的流行度 最高 且其最流行的视频 id 是 `idi` ，可以按任何顺序返回该结果*。*

---

示例 1：

```txt
输入：creators = ["alice","bob","alice","chris"], ids = ["one","two","three","four"], views = [5,10,5,4]
输出：[["alice","one"],["bob","two"]]
解释：
alice 的流行度是 5 + 5 = 10。
bob 的流行度是 10。
chris 的流行度是 4。
alice 和 bob 是流行度最高的创作者。
bob 播放量最高的视频 id 为 "two"。
alice 播放量最高的视频 id 是 "one" 和 "three"。由于 "one" 的字典序比 "three" 更小，所以结果中返回的 id 是 "one"。
```

示例 2：

```txt
输入：creators = ["alice","alice","alice"], ids = ["a","b","c"], views = [1,2,2]
输出：[["alice","b"]]
解释：
id 为 "b" 和 "c" 的视频都满足播放量最高的条件。
由于 "b" 的字典序比 "c" 更小，所以结果中返回的 id 是 "b"。
```

---

提示：

- `n == creators.length == ids.length == views.length`
- `1 <= n <= 10^5`
- `1 <= creators[i].length, ids[i].length <= 5`
- `creators[i]` 和 `ids[i]` 仅由小写英文字母组成
- `0 <= views[i] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
