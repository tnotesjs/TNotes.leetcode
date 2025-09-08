# [0303. 区域和检索 - 数组不可变【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0303.%20%E5%8C%BA%E5%9F%9F%E5%92%8C%E6%A3%80%E7%B4%A2%20-%20%E6%95%B0%E7%BB%84%E4%B8%8D%E5%8F%AF%E5%8F%98%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 前缀和数组](#2--s1---前缀和数组)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/range-sum-query-immutable/)

给定一个整数数组  `nums`，处理以下类型的多个查询:

1.  计算索引  `left`  和  `right` （包含 `left` 和 `right`）之间的 `nums` 元素的 **和** ，其中  `left <= right`

实现 `NumArray` 类：

- `NumArray(int[] nums)` 使用数组 `nums` 初始化对象
- `int sumRange(int i, int j)` 返回数组 `nums`  中索引  `left`  和  `right`  之间的元素的 **总和** ，包含  `left`  和  `right`  两点（也就是  `nums[left] + nums[left + 1] + ... + nums[right]` )

---

- **示例 1：**

```
输入：
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
输出：
[null, 1, -1, -3]

解释：
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return 1 ((-2) + 0 + 3)
numArray.sumRange(2, 5); // return -1 (3 + (-5) + 2 + (-1))
numArray.sumRange(0, 5); // return -3 ((-2) + 0 + 3 + (-5) + 2 + (-1))
```

---

**提示：**

- `1 <= nums.length <= 10^4`
- `-10^5 <= nums[i] <= 10^5`
- `0 <= i <= j < nums.length`
- 最多调用 `10^4` 次 `sumRange` 方法

:::

## 2. 🎯 s.1 - 前缀和数组

::: code-group

<<< ./solutions/1/1.js [js]

:::
