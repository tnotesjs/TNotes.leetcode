# [2677. 分块数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2677.%20%E5%88%86%E5%9D%97%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 🔗 links](#1--links)
- [2. 📝 Description](#2--description)
- [3. 🎯 Solutions.1](#3--solutions1)

<!-- endregion:toc -->

- [leetcode](https://leetcode.cn/problems/chunk-array)

- 备注：本题是仿照 Lodash 中的 `_.chunk` 的实现手写一个 `chunk` 函数。

## 1. 🔗 links

- https://lodash.com/docs/4.17.15#chunk - Lodash，Array，`_.chunk`。
- https://github.com/lodash/lodash/blob/4.17.15/lodash.js#L6839 - Github Lodash，Array，`_.chunk` 实现源码。

## 2. 📝 Description

给定一个数组  `arr`  和一个块大小  `size` ，返回一个 **分块**  的数组。

**分块**  的数组包含了  `arr`  中的原始元素，但是每个子数组的长度都是  `size` 。如果  `arr.length`  不能被  `size`  整除，那么最后一个子数组的长度可能小于  `size` 。

你可以假设该数组是  `JSON.parse`  的输出结果。换句话说，它是有效的 JSON。

请你在不使用 lodash 的函数  `_.chunk`  的情况下解决这个问题。

**示例 1：**

- 输入：`arr = [1,2,3,4,5], size = 1`
- 输出：`[[1],[2],[3],[4],[5]]`
- 解释：数组 `arr` 被分割成了每个只有一个元素的子数组。

**示例 2：**

- 输入：`arr = [1,9,6,3,2], size = 3`
- 输出：`[[1,9,6],[3,2]]`
- 解释：数组 `arr` 被分割成了每个有三个元素的子数组。然而，第二个子数组只有两个元素。

**示例 3：**

- 输入：`arr = [8,5,3,2,6], size = 6`
- 输出：`[[8,5,3,2,6]]`
- 解释：`size` 大于 `arr.length` ，因此所有元素都在第一个子数组中。

**示例 4：**

- 输入：`arr = [], size = 1`
- 输出：`[]`
- 解释：没有元素需要分块，因此返回一个空数组。

**提示：**

- `arr`  是一个有效的 JSON 数组
- `2 <= JSON.stringify(arr).length <= 10^5`
- `1 <= size <= arr.length + 1`

## 3. 🎯 Solutions.1

```javascript
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const len = arr.length
  if (len === 0) return []
  if (size >= len) return [[...arr]]
  const ansLen = Math.ceil(len / size)
  const ans = new Array(ansLen)
  for (let i = 0; i < ansLen; i++) {
    ans[i] = arr.slice(i * size, i * size + size)
  }
  return ans
}
```
