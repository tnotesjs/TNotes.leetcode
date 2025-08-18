# [2619. 数组原型对象的最后一个元素【简单】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/2619.%20%E6%95%B0%E7%BB%84%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1](#2--solutions1)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/array-prototype-last/)

请你编写一段代码实现一个数组方法，使任何数组都可以调用 `array.last()` 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回  `-1` 。

你可以假设数组是 `JSON.parse` 的输出结果。

**示例 1 ：**

- 输入：nums = [null, {}, 3]
- 输出：3
- 解释：调用 nums.last() 后返回最后一个元素： 3。

**示例 2 ：**

- 输入：nums = []
- 输出：-1
- 解释：因为此数组没有元素，所以应该返回 -1。

**提示：**

- `arr` 是一个有效的 JSON 数组
- `0 <= arr.length <= 1000`

:::

## 2. 🎯 Solutions.1

```javascript
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1]
}

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
```
