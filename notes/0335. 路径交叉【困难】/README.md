# [0335. 路径交叉【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0335.%20%E8%B7%AF%E5%BE%84%E4%BA%A4%E5%8F%89%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/self-crossing/)

给你一个整数数组 `distance`。

从 X-Y 平面上的点 `(0,0)` 开始，先向北移动 `distance[0]` 米，然后向西移动 `distance[1]` 米，向南移动 `distance[2]` 米，向东移动 `distance[3]` 米，持续移动。也就是说，每次移动后你的方位会发生逆时针变化。

判断你所经过的路径是否相交。如果相交，返回 `true` ；否则，返回 `false`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-07-32.png)

```txt
输入：distance = [2,1,1,2]
输出：true
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-07-37.png)

```txt
输入：distance = [1,2,3,4]
输出：false
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-11-12-07-42.png)

```txt
输入：distance = [1,1,1,1]
输出：true
```

---

提示：

- `1 <= distance.length <= 10^5`
- `1 <= distance[i] <= 10^5`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
