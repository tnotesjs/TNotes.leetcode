# [2057. 值相等的最小索引【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2057.%20%E5%80%BC%E7%9B%B8%E7%AD%89%E7%9A%84%E6%9C%80%E5%B0%8F%E7%B4%A2%E5%BC%95%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/smallest-index-with-equal-value/)

给你一个下标从 0 开始的整数数组 `nums` ，返回 `nums` 中满足 `i mod 10 == nums[i]` 的最小下标 `i` ；如果不存在这样的下标，返回 `-1` 。

`x mod y` 表示 `x` 除以 `y` 的 **余数** 。

---

- **示例 1：**

```txt
输入：nums = [0,1,2]
输出：0
解释：
i=0: 0 mod 10 = 0 == nums[0].
i=1: 1 mod 10 = 1 == nums[1].
i=2: 2 mod 10 = 2 == nums[2].
所有下标都满足 i mod 10 == nums[i] ，所以返回最小下标 0
```

- **示例 2：**

```txt
输入：nums = [4,3,2,1]
输出：2
解释：
i=0: 0 mod 10 = 0 != nums[0].
i=1: 1 mod 10 = 1 != nums[1].
i=2: 2 mod 10 = 2 == nums[2].
i=3: 3 mod 10 = 3 != nums[3].
2 唯一一个满足 i mod 10 == nums[i] 的下标
```

- **示例 3：**

```txt
输入：nums = [1,2,3,4,5,6,7,8,9,0]
输出：-1
解释：不存在满足 i mod 10 == nums[i] 的下标
```

- **示例 4：**

```txt
输入：nums = [2,1,3,5,2]
输出：1
解释：1 是唯一一个满足 i mod 10 == nums[i] 的下标
```

---

**提示：**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 9`

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
