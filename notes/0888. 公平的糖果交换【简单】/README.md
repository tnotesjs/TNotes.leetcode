# [0888. 公平的糖果交换【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0888.%20%E5%85%AC%E5%B9%B3%E7%9A%84%E7%B3%96%E6%9E%9C%E4%BA%A4%E6%8D%A2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/fair-candy-swap/)

爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 `aliceSizes` 和 `bobSizes` ，`aliceSizes[i]` 是爱丽丝拥有的第 `i` 盒糖果中的糖果数量，`bobSizes[j]` 是鲍勃拥有的第 `j` 盒糖果中的糖果数量。

两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。

返回一个整数数组 `answer`，其中 `answer[0]` 是爱丽丝必须交换的糖果盒中的糖果的数目，`answer[1]` 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 **任何一个** 。题目测试用例保证存在与输入对应的答案。

---

- **示例 1：**

```txt
输入：aliceSizes = [1,1], bobSizes = [2,2]
输出：[1,2]
```

- **示例 2：**

```txt
输入：aliceSizes = [1,2], bobSizes = [2,3]
输出：[1,2]
```

- **示例 3：**

```txt
输入：aliceSizes = [2], bobSizes = [1,3]
输出：[2,3]
```

- **示例 4：**

```txt
输入：aliceSizes = [1,2,5], bobSizes = [2,4]
输出：[5,4]
```

---

**提示：**

- `1 <= aliceSizes.length, bobSizes.length <= 10^4`
- `1 <= aliceSizes[i], bobSizes[j] <= 10^5`
- 爱丽丝和鲍勃的糖果总数量不同。
- 题目数据保证对于给定的输入至少存在一个有效答案。

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
