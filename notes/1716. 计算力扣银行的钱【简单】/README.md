# [1716. 计算力扣银行的钱【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1716.%20%E8%AE%A1%E7%AE%97%E5%8A%9B%E6%89%A3%E9%93%B6%E8%A1%8C%E7%9A%84%E9%92%B1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 等差分周求和](#2--s1---等差分周求和)
  - [2.1. 公式 1 推导过程](#21-公式-1-推导过程)
  - [2.2. 公式 2 推导过程](#22-公式-2-推导过程)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/calculate-money-in-leetcode-bank/)

Hercy 想要为购买第一辆车存钱。他每天都往力扣银行里存钱。

最开始，他在周一的时候存入 `1` 块钱。从周二到周日，他每天都比前一天多存入 `1` 块钱。在接下来每一个周一，他都会比前一个周一多存入 `1` 块钱。

给你 `n`，请你返回在第 `n` 天结束的时候他在力扣银行总共存了多少块钱。

---

示例 1：

```txt
输入：n = 4
输出：10
```

解释：第 4 天后，总额为 `1 + 2 + 3 + 4 = 10`。

---

示例 2：

```txt
输入：n = 10
输出：37
```

解释：

- 第 10 天后，总额为 `(1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37`。
- 注意到第二个星期一，Hercy 存入 2 块钱。

---

示例 3：

```txt
输入：n = 20
输出：96
```

解释：第 20 天后，总额为 `(1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96`。

---

提示：

- `1 <= n <= 1000`

## 2. 🎯 s.1 - 等差分周求和

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$，直接使用数学公式计算
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 将 n 天分解为完整周数 `weeks` 和剩余天数 `rem`
- 计算完整周的存款总和：
  - 第 i 周（0-indexed）的存款为：$(1+i) + (2+i) + ... + (7+i) = 28 + 7i$
  - 所有完整周的和为等差数列：$\sum_{i=0}^{weeks-1}(28 + 7i) = \frac{7 \cdot weeks \cdot (weeks + 7)}{2}$（公式 1）
- 计算剩余天数的存款：
  - 剩余天数从 $(1 + weeks)$ 开始的等差数列，共 rem 项
  - 和为：$\frac{rem \cdot (2 \cdot weeks + rem + 1)}{2}$（公式 2）
- 返回两部分之和

### 2.1. 公式 1 推导过程

$$
\sum_{i=0}^{weeks-1}(28 + 7i) = \frac{7 \cdot weeks \cdot (weeks + 7)}{2}
$$

写出求和表达式：

$$
S = \sum_{i=0}^{n-1} (28 + 7i), \quad \text{其中 } n = \text{weeks}
$$

$$
S = \sum_{i=0}^{n-1} 28 \;+\; \sum_{i=0}^{n-1} 7i
$$

第一部分：

$$
\sum_{i=0}^{n-1} 28 = 28n
$$

第二部分：

$$
\sum_{i=0}^{n-1} 7i = 7 \sum_{i=0}^{n-1} i
$$

$$
\sum_{i=0}^{n-1} i = \frac{n(n-1)}{2}
$$

因此：

$$
7 \cdot \frac{n(n-1)}{2} = \frac{7n(n-1)}{2}
$$

两部分相加：

$$
S = 28n + \frac{7n(n-1)}{2}
$$

将 \(28n\) 写成分母为 2 的形式：

$$
28n = \frac{56n}{2}
$$

于是：

$$
S = \frac{56n}{2} + \frac{7n(n-1)}{2}
$$

$$
S = \frac{56n + 7n^2 - 7n}{2}
$$

$$
S = \frac{7n^2 + 49n}{2}
$$

提公因式：

$$
S = \frac{7n(n + 7)}{2}
$$

代回 $n = \text{weeks}$：

$$
\sum_{i=0}^{\text{weeks}-1} (28 + 7i) = \frac{7 \cdot \text{weeks} \cdot (\text{weeks} + 7)}{2}
$$

推导完毕。

### 2.2. 公式 2 推导过程

$$
\frac{rem \cdot (2 \cdot weeks + rem + 1)}{2}
$$

剩余天数从第 $(1 + weeks)$ 天开始（新的一周的第一天存 $1 + weeks$ 元），每天递增 1，共 $rem$ 天，构成如下等差数列：

$$
(1 + weeks),\ (2 + weeks),\ \ldots,\ (rem + weeks)
$$

首项为 $a_1 = 1 + weeks$，末项为 $a_{rem} = rem + weeks$，项数为 $rem$。

等差数列求和公式：

$$
S = \frac{rem \cdot (a_1 + a_{rem})}{2}
$$

代入首末两项：

$$
S = \frac{rem \cdot \bigl((1 + weeks) + (rem + weeks)\bigr)}{2}
$$

$$
S = \frac{rem \cdot (2 \cdot weeks + rem + 1)}{2}
$$

推导完毕。
