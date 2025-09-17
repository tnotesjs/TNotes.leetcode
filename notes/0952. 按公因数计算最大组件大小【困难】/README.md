# [0952. 按公因数计算最大组件大小【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0952.%20%E6%8C%89%E5%85%AC%E5%9B%A0%E6%95%B0%E8%AE%A1%E7%AE%97%E6%9C%80%E5%A4%A7%E7%BB%84%E4%BB%B6%E5%A4%A7%E5%B0%8F%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-component-size-by-common-factor/)

给定一个由不同正整数的组成的非空数组 `nums` ，考虑下面的图：

- 有 `nums.length` 个节点，按从 `nums[0]` 到 `nums[nums.length - 1]` 标记；
- 只有当 `nums[i]` 和 `nums[j]` 共用一个大于 1 的公因数时，`nums[i]` 和 `nums[j]`之间才有一条边。

返回 _图中最大连通组件的大小_ 。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-19-55.png)

```txt
输入：nums = [4,6,15,35]
输出：4
```

- **示例 2：**

![图 2](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-20-22.png)

```txt
输入：nums = [20,50,9,63]
输出：2
```

- **示例 3：**

![图 3](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-21-20-31.png)

```txt
输入：nums = [2,3,6,7,4,12,21,39]
输出：8
```

---

**提示：**

- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i] <= 10^5`
- `nums` 中所有值都 **不同**

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
