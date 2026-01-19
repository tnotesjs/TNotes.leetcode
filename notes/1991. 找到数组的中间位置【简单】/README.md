# [1991. 找到数组的中间位置【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1991.%20%E6%89%BE%E5%88%B0%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E9%97%B4%E4%BD%8D%E7%BD%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

::: warning 注意

- 本题与主站 [724. 寻找数组的中心下标][1] 题相同，题解记录在了 `724` 中。

:::

- [leetcode](https://leetcode.cn/problems/find-the-middle-index-in-array)

给你一个下标从 0 开始的整数数组 `nums`，请你找到 最左边 的中间位置 `middleIndex` （也就是所有可能中间位置下标最小的一个）。

中间位置 `middleIndex` 是满足 `nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1]` 的数组下标。

如果 `middleIndex == 0`，左边部分的和定义为 `0`。类似的，如果 `middleIndex == nums.length - 1`，右边部分的和定义为 `0`。

请你返回满足上述条件 最左边 的 `middleIndex`，如果不存在这样的中间位置，请你返回 `-1`。

---

示例 1：

```txt
输入：nums = [2,3,-1,8,4]
输出：3
解释：
下标 3 之前的数字和为：2 + 3 + -1 = 4
下标 3 之后的数字和为：4 = 4
```

示例 2：

```txt
输入：nums = [1,-1,4]
输出：2
解释：
下标 2 之前的数字和为：1 + -1 = 0
下标 2 之后的数字和为：0
```

示例 3：

```txt
输入：nums = [2,5]
输出：-1
解释：
不存在符合要求的 middleIndex。
```

示例 4：

```txt
输入：nums = [1]
输出：0
解释：
下标 0 之前的数字和为：0
下标 0 之后的数字和为：0
```

---

提示：

- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

注意：本题与主站 [724. 寻找数组的中心下标][1] 题相同

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

## 3. 🔗 引用

- [724. 寻找数组的中心下标][1]
  - 相同题目

[1]: https://leetcode-cn.com/problems/find-pivot-index/
