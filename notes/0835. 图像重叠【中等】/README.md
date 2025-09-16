# [0835. 图像重叠【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0835.%20%E5%9B%BE%E5%83%8F%E9%87%8D%E5%8F%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/image-overlap/)

给你两个图像 `img1` 和 `img2` ，两个图像的大小都是 `n x n` ，用大小相同的二进制正方形矩阵表示。二进制矩阵仅由若干 `0` 和若干 `1` 组成。

**转换** 其中一个图像，将所有的 `1` 向左，右，上，或下滑动任何数量的单位；然后把它放在另一个图像的上面。该转换的 **重叠** 是指两个图像 **都** 具有 `1` 的位置的数目。

请注意，转换 **不包括** 向任何方向旋转。越过矩阵边界的 `1` 都将被清除。

最大可能的重叠数量是多少？

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-18-58.png)

```txt
输入：img1 = [
  [1, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
],
img2 = [
  [0, 0, 0],
  [0, 1, 1],
  [0, 0, 1]
]

输出：3
```

- 解释：

  - 将 img1 向右移动 1 个单位，再向下移动 1 个单位。
  - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-19-11.png)
  - 两个图像都具有 1 的位置的数目是 3（用红色标识）。
  - ![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-19-20.png)

---

- **示例 2：**

```txt
输入：img1 = [[1]], img2 = [[1]]
输出：1
```

- **示例 3：**

```txt
输入：img1 = [[0]], img2 = [[0]]
输出：0
```

---

**提示：**

- `n == img1.length == img1[i].length`
- `n == img2.length == img2[i].length`
- `1 <= n <= 30`
- `img1[i][j]` 为 `0` 或 `1`
- `img2[i][j]` 为 `0` 或 `1`

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
