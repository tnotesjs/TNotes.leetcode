# [2797. 带有占位符的部分函数【简单】🔒](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2797.%20%E5%B8%A6%E6%9C%89%E5%8D%A0%E4%BD%8D%E7%AC%A6%E7%9A%84%E9%83%A8%E5%88%86%E5%87%BD%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91%F0%9F%94%92)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/partial-function-with-placeholders)

给定函数 `fn` 和数组 `args`，返回一个函数 `partialFn`。

`args` 中的占位符 `"_"` 需要用 `restArgs` 中索引从 `0` 开始的值替换。 `restArgs` 中剩余的值则添加到 `args` 的末尾。

`partialFn` 应该返回 `fn` 的结果。`fn` 应该使用修改后的 `args` 的元素作为单独的参数调用。

示例 1：

- 输入：`fn = (...args) => args, args = [2,4,6], restArgs = [8,10]`
- 输出：`[2,4,6,8,10]`
- 解释：

```js
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // [2,4,6,8,10]
```

args 中没有占位符 "_"，因此 restArgs 只是添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。_

示例 2：

- 输入：`fn = (...args) => args, args = [1,2,"_",4,"_",6], restArgs = [3,5]`
- 输出：`[1,2,3,4,5,6]`
- 解释：

```js
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // [1,2,3,4,5,6]
```

占位符 "\_" 被 restArgs 中的值替换。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。

示例 3：

- 输入：fn = (a, b, c) => b + a - c, args = ["_", 5], restArgs = [5, 20]
- 输出：-10
- 解释：

```js
const partialFn = partial(fn, args)
const result = partialFn(...restArgs)
console.log(result) // -10
```

占位符 "\_" 被替换为 5，并将 20 添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回 -10（5 + 5 - 20）。

提示：

- `fn` 是一个函数
- `args` 和 `restArgs` 都是有效的 JSON 数组
- `1 <= args.length <= 5 * 10^4`
- `1 <= restArgs.length <= 5 * 10^4`
- `0 <= number of placeholders <= restArgs.length`

## 2. 🎯 s.1

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function (fn, args) {
  return function (...restArgs) {
    // 参数处理
    const arr = [...args]
    for (let i = 0; i < restArgs.length; i++) {
      const targetIndex = arr.indexOf('_')
      targetIndex === -1
        ? arr.push(restArgs[i])
        : (arr[targetIndex] = restArgs[i])
    }

    return fn(...arr)
  }
}
```

- 时间复杂度：$O(n^2)$

假设输入参数的长度为 `n`，则在遍历 `restArgs` 时，需要执行 `n` 次循环。在循环内部，对数组进行操作 `arr.indexOf('_')` 的时间复杂度为 `O(n)`，因此总的时间复杂度为 `O(n^2)`。

- 空间复杂度：$O(n)$

在参数处理过程中，需要创建一个长度为 `n` 的数组 `arr`，因此空间复杂度为 `O(n)`。

该解法的时间复杂度和空间复杂度都与输入参数的长度有关。
