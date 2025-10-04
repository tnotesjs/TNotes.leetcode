# [0812. 最大三角形面积【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0812.%20%E6%9C%80%E5%A4%A7%E4%B8%89%E8%A7%92%E5%BD%A2%E9%9D%A2%E7%A7%AF%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力枚举 + 向量叉积](#2--s1---暴力枚举--向量叉积)
- [3. 🎯 s.2 - 暴力枚举 + 海伦（Heron）公式](#3--s2---暴力枚举--海伦heron公式)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-triangle-area/)

---

- 给你一个由 **X-Y** 平面上的点组成的数组 `points` ，其中 `points[i] = [xi, yi]` 。
- 从其中取任意三个不同的点组成三角形，返回能组成的最大三角形的面积。
- 与真实值误差在 `10^-5` 内的答案将会视为正确答案。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-16-08-06-15.png)

```txt
输入：points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
输出：2.00000
解释：输入中的 5 个点如上图所示，红色的三角形面积最大。
```

---

- **示例 2：**

```txt
输入：points = [[1,0],[0,0],[0,1]]
输出：0.50000
```

---

**提示：**

- `3 <= points.length <= 50`
- `-50 <= xi, yi <= 50`
- 给出的所有点 **互不相同**

## 2. 🎯 s.1 - 暴力枚举 + 向量叉积

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n^3)$，其中 n 是点的数量，需要枚举所有可能的三点组合
- 空间复杂度：$O(1)$，只使用了常数个额外变量

## 3. 🎯 s.2 - 暴力枚举 + 海伦（Heron）公式

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n^3)$，需要枚举所有可能的三点组合
- 空间复杂度：$O(1)$，只使用了常数个额外变量

---

- 注意：最后返回结果需要在开根号前保护精度

```js
// 写法 1
return Math.sqrt(s * (s - a) * (s - b) * (s - c))

// 写法 2
const val = s * (s - a) * (s - b) * (s - c)
return Math.sqrt(Math.max(0, val))
```

- 写法 1 提交后会报错：
  - ![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-10-02-11-54-38.png)
  - 错误原因很典型 —— **Heron（海伦）公式在浮点计算下可能会因为四个因子乘积出现微小的负数，导致 `Math.sqrt` 得到 `NaN`**。
  - 换句话说 `s*(s-a)*(s-b)*(s-c)` 在数学上应该 ≥ 0，但在浮点运算中可能变成 `-1e-15` 之类的值，从而 `Math.sqrt` 返回 `NaN`。
