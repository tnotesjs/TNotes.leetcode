# [0006. Z 字形变换【中等】](https://github.com/Tdahuyou/TNotes.leetcode/tree/main/notes/0006.%20Z%20%E5%AD%97%E5%BD%A2%E5%8F%98%E6%8D%A2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 Solutions.1 - 利用二维矩阵模拟](#2--solutions1---利用二维矩阵模拟)
- [3. 🎯 Solutions.2 - 压缩矩阵空间](#3--solutions2---压缩矩阵空间)
- [4. 🎯 Solutions.3 - 直接构造](#4--solutions3---直接构造)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/zigzag-conversion/)

将一个给定字符串 `s` 根据给定的行数 `numRows` ，以从上往下、从左到右进行  Z 字形排列。

比如输入字符串为 `"PAYPALISHIRING"`  行数为 `3` 时，排列如下：

P A H N A P L S I I G Y I R

之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：`"PAHNAPLSIIGYIR"`。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);

---

- **示例 1：**

```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"**示例 2：**输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

- **示例 3：**

```
输入：s = "A", numRows = 1
输出："A"
```

---

**提示：**

- `1 <= s.length <= 1000`
- `s` 由英文字母（小写和大写）、`','` 和 `'.'` 组成
- `1 <= numRows <= 1000`

:::

## 2. 🎯 Solutions.1 - 利用二维矩阵模拟

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length,
    r = numRows
  if (r === 1 || r >= n) {
    return s
  }
  const t = r * 2 - 2
  const c = Math.floor((n + t - 1) / t) * (r - 1)
  const mat = new Array(r).fill(0).map(() => new Array(c).fill(0))
  for (let i = 0, x = 0, y = 0; i < n; ++i) {
    mat[x][y] = s[i]
    if (i % t < r - 1) {
      ++x // 向下移动
    } else {
      --x
      ++y // 向右上移动
    }
  }
  const ans = []
  for (const row of mat) {
    for (const ch of row) {
      if (ch !== 0) {
        ans.push(ch)
      }
    }
  }
  return ans.join('')
}
```

## 3. 🎯 Solutions.2 - 压缩矩阵空间

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length,
    r = numRows
  if (r === 1 || r >= n) {
    return s
  }
  const mat = new Array(r).fill(0)
  for (let i = 0; i < r; ++i) {
    mat[i] = []
  }
  for (let i = 0, x = 0, t = r * 2 - 2; i < n; ++i) {
    mat[x].push(s[i])
    if (i % t < r - 1) {
      ++x
    } else {
      --x
    }
  }
  const ans = []
  for (const row of mat) {
    ans.push(row.join(''))
  }
  return ans.join('')
}
```

## 4. 🎯 Solutions.3 - 直接构造

```js
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length,
    r = numRows
  if (r === 1 || r >= n) {
    return s
  }
  const t = r * 2 - 2
  const ans = []
  for (let i = 0; i < r; i++) {
    // 枚举矩阵的行
    for (let j = 0; j < n - i; j += t) {
      // 枚举每个周期的起始下标
      ans.push(s[j + i]) // 当前周期的第一个字符
      if (0 < i && i < r - 1 && j + t - i < n) {
        ans.push(s[j + t - i]) // 当前周期的第二个字符
      }
    }
  }
  return ans.join('')
}
```
