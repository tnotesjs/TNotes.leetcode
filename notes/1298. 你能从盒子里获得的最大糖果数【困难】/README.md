# [1298. 你能从盒子里获得的最大糖果数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1298.%20%E4%BD%A0%E8%83%BD%E4%BB%8E%E7%9B%92%E5%AD%90%E9%87%8C%E8%8E%B7%E5%BE%97%E7%9A%84%E6%9C%80%E5%A4%A7%E7%B3%96%E6%9E%9C%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-candies-you-can-get-from-boxes/)

给你 `n` 个盒子，每个盒子的格式为 `[status, candies, keys, containedBoxes]` ，其中：

- 状态字 `status[i]`：整数，如果 `box[i]` 是开的，那么是 **1** ，否则是 **0** 。
- 糖果数 `candies[i]`: 整数，表示 `box[i]` 中糖果的数目。
- 钥匙 `keys[i]`：数组，表示你打开 `box[i]` 后，可以得到一些盒子的钥匙，每个元素分别为该钥匙对应盒子的下标。
- 内含的盒子 `containedBoxes[i]`：整数，表示放在 `box[i]` 里的盒子所对应的下标。

给你一个整数数组 `initialBoxes`，包含你最初拥有的盒子。你可以拿走每个 **已打开盒子** 里的所有糖果，并且可以使用其中的钥匙去开启新的盒子，并且可以使用在其中发现的其他盒子。

请你按照上述规则，返回可以获得糖果的 **最大数目** 。

---

- **示例 1：**

```txt
输入：
status = [1,0,1,0],
candies = [7,5,4,100],
keys = [[],[],[1],[]],
containedBoxes = [[1,2],[3],[],[]],
initialBoxes = [0]

输出：16

解释：
一开始你有盒子 0 。你将获得它里面的 7 个糖果和盒子 1 和 2。
盒子 1 目前状态是关闭的，而且你还没有对应它的钥匙。
所以你将会打开盒子 2 ，并得到里面的 4 个糖果和盒子 1 的钥匙。
在盒子 1 中，你会获得 5 个糖果和盒子 3 ，但是你没法获得盒子 3 的钥匙所以盒子 3 会保持关闭状态。
你总共可以获得的糖果数目 = 7 + 4 + 5 = 16 个。
```

- **示例 2：**

```txt
输入：
status = [1,0,0,0,0,0],
candies = [1,1,1,1,1,1],
keys = [[1,2,3,4,5],[],[],[],[],[]],
containedBoxes = [[1,2,3,4,5],[],[],[],[],[]],
initialBoxes = [0]

输出：6

解释：
你一开始拥有盒子 0 。打开它你可以找到盒子 1,2,3,4,5 和它们对应的钥匙。
打开这些盒子，你将获得所有盒子的糖果，所以总糖果数为 6 个。
```

- **示例 3：**

```txt
输入：
status = [1,1,1],
candies = [100,1,100],
keys = [[],[0,2],[]],
containedBoxes = [[],[],[]],
initialBoxes = [1]

输出：1

```

- **示例 4：**

```txt
输入：
status = [1],
candies = [100],
keys = [[]],
containedBoxes = [[]],
initialBoxes = []

输出：0

```

- **示例 5：**

```txt
输入：
status = [1,1,1],
candies = [2,3,2],
keys = [[],[],[]],
containedBoxes = [[],[],[]],
initialBoxes = [2,1,0]

输出：7
```

---

**提示：**

- `1 <= status.length <= 1000`
- `status.length == candies.length == keys.length == containedBoxes.length == n`
- `status[i]` 要么是 `0` 要么是 `1` 。
- `1 <= candies[i] <= 1000`
- `0 <= keys[i].length <= status.length`
- `0 <= keys[i][j] < status.length`
- `keys[i]` 中的值都是互不相同的。
- `0 <= containedBoxes[i].length <= status.length`
- `0 <= containedBoxes[i][j] < status.length`
- `containedBoxes[i]` 中的值都是互不相同的。
- 每个盒子最多被一个盒子包含。
- `0 <= initialBoxes.length <= status.length`
- `0 <= initialBoxes[i] < status.length`

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
