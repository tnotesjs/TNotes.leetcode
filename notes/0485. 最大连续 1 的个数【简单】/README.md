# [0485. 最大连续 1 的个数【简单】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0485.%20%E6%9C%80%E5%A4%A7%E8%BF%9E%E7%BB%AD%201%20%E7%9A%84%E4%B8%AA%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 📒 性能比较](#2--性能比较)
- [3. 🎯 Solutions.1 - 暴力解法 - 遍历](#3--solutions1---暴力解法---遍历)
- [4. 🎯 Solutions.2 - 暴力解法 - 字符串切片](#4--solutions2---暴力解法---字符串切片)
- [5. 🎯 Solutions.3 - 暴力解法 - 正则](#5--solutions3---暴力解法---正则)

<!-- endregion:toc -->

- [leetcode](https://leetcode.cn/problems/max-consecutive-ones/)

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn)

给定一个二进制数组 `nums` ， 计算其中最大连续 `1` 的个数。

**示例 1：**

```
输入：nums = [1,1,0,1,1,1]
输出：3
解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
```

**示例 2:**

```
输入：nums = [1,0,1,1,0,1]
输出：2
```

**提示：**

- `1 <= nums.length <= 10^5`
- `nums[i]`  不是  `0`  就是  `1`.

## 2. 📒 性能比较

- 在本节介绍的提接中，通过【暴力解法 - 遍历】的方式来求解是性能最好的。

## 3. 🎯 Solutions.1 - 暴力解法 - 遍历

```js
var findMaxConsecutiveOnes = function (nums) {
  let maxLen = 0 // 记录最终的结果
  let len = 0 // 记录当前的长度
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      len++
    } else {
      maxLen = maxLen > len ? maxLen : len
      len = 0
    }
  }
  maxLen = maxLen > len ? maxLen : len
  return maxLen
}
```

- 遍历数组 nums：
  - 如果当前项是 1，那么将 len 自增。
  - 如果当前项不是 1，那么将 len 的值与最终结果进行比较，将较大的值赋值给 maxLen。同时将 len 清零，意味着当前连续的 1 已经结束，下次需要重新开始计算。
- 注意：循环结束时，需要再判断一次 len 和 maxLen。

## 4. 🎯 Solutions.2 - 暴力解法 - 字符串切片

- 实现思路：
  - 将数组转为字符串后，按照 0 对字符串进行分割，获取到分割后的新数组 `["11", "111"]`，再从中找出最长的字符串的长度。
  - 写法可以直接简化到一行，但性能很拉胯。

```js
var findMaxConsecutiveOnes = function (nums) {
  const newNums = nums
    .join('')
    .split('0')
    .filter((item) => item.length > 0) // ["11", "111"]
  let maxLen = 0
  for (let i = 0; i < newNums.length; i++) {
    let len = newNums[i].length
    maxLen = maxLen > len ? maxLen : len
  }
  return maxLen
}
```

```js
var findMaxConsecutiveOnes = function (nums) {
  const newNums = nums
    .join('')
    .split('0')
    .filter((item) => item.length > 0) // ["11", "111"]
  if (newNums.length === 0) return 0
  return Math.max(...newNums.map((item) => item.length))
}
```

```js
var findMaxConsecutiveOnes = function (nums) {
  return Math.max(
    ...nums
      .join('')
      .split(/0+/)
      .map((item) => item.length)
  )
}
```

## 5. 🎯 Solutions.3 - 暴力解法 - 正则

```js
var findMaxConsecutiveOnes = function (nums) {
  // => [1, 1, 0, 1, 1, 1]
  nums.push(0) // 往 nums 的结尾推一个 0，以便后续做正则匹配，实现切片。
  const str = nums.join(''),
    reg = /(1+)(?=0+)/g
  const arr = str.match(reg) // => ['11', '111']
  return arr ? Math.max(...arr.map((item) => item.length)) : 0
}
```

- 转为字符串，结合正则表达式中的“正向预查”来实现。
