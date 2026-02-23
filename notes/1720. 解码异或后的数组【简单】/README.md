# [1720. 解码异或后的数组【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1720.%20%E8%A7%A3%E7%A0%81%E5%BC%82%E6%88%96%E5%90%8E%E7%9A%84%E6%95%B0%E7%BB%84%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 前缀异或还原](#2--s1---前缀异或还原)
  - [2.1. 核心公式推导](#21-核心公式推导)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/decode-xored-array/)

未知整数数组 `arr` 由 `n` 个非负整数组成。

经编码后变为长度为 `n - 1` 的另一个整数数组 `encoded`，其中 `encoded[i] = arr[i] XOR arr[i + 1]`。例如，`arr = [1,0,2,1]` 经编码后得到 `encoded = [1,2,3]`。

给你编码后的数组 `encoded` 和原数组 `arr` 的第一个元素 `first`（`arr[0]`）。

请解码返回原数组 `arr`。可以证明答案存在并且是唯一的。

---

示例 1：

```txt
输入：encoded = [1,2,3], first = 1
输出：[1,0,2,1]
```

解释：若 `arr = [1,0,2,1]`，那么 `first = 1` 且 `encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]`

---

示例 2：

```txt
输入：encoded = [6,2,7,3], first = 4
输出：[4,2,0,7,4]
```

---

提示：

- `2 <= n <= 10^4`
- `encoded.length == n - 1`
- `0 <= encoded[i] <= 10^5`
- `0 <= first <= 10^5`

## 2. 🎯 s.1 - 前缀异或还原

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，其中 N 是数组 encoded 的长度
- 空间复杂度：$O(N)$，需要创建长度为 N+1 的结果数组（不计入返回值的空间）

算法思路：

- 创建长度为 `N+1` 的结果数组 `arr`，并将 `arr[0]` 初始化为 `first`
- 利用异或性质：由 `encoded[i] = arr[i] XOR arr[i+1]` 推导出 `arr[i+1] = encoded[i] XOR arr[i]`
- 遍历 `encoded` 数组，依次计算并填充 `arr[i+1]`：`arr[i+1] = encoded[i] ^ arr[i]`
- 返回完整的解码数组 `arr`

### 2.1. 核心公式推导

已知条件：

$$
\text{encoded}[i] = \text{arr}[i] \oplus \text{arr}[i+1]
$$

这里 $\oplus$ 表示按位异或 (XOR)。

已知异或的几个基本性质：

1. 交换律：$a \oplus b = b \oplus a$
2. 结合律：$(a \oplus b) \oplus c = a \oplus (b \oplus c)$
3. 恒等律：$a \oplus 0 = a$
4. 归零律：$a \oplus a = 0$
5. 可逆性：$a \oplus b = c \implies b = a \oplus c$（即两边同时异或 $a$）。

推导目标：

从

$$
\text{encoded}[i] = \text{arr}[i] \oplus \text{arr}[i+1]
$$

推出

$$
\text{arr}[i+1] = \text{encoded}[i] \oplus \text{arr}[i]
$$

推导过程：

等式两边同时异或 $\text{arr}[i]$：

$$
\text{encoded}[i] \oplus \text{arr}[i] = (\text{arr}[i] \oplus \text{arr}[i+1]) \oplus \text{arr}[i]
$$

利用结合律：

$$
(\text{arr}[i] \oplus \text{arr}[i+1]) \oplus \text{arr}[i] = \text{arr}[i] \oplus \text{arr}[i+1] \oplus \text{arr}[i]
$$

交换律（为了结合方便）：

$$
= \text{arr}[i] \oplus \text{arr}[i] \oplus \text{arr}[i+1]
$$

利用归零律 $\text{arr}[i] \oplus \text{arr}[i] = 0$：

$$
= 0 \oplus \text{arr}[i+1]
$$

利用恒等律 $0 \oplus a = a$：

$$
= \text{arr}[i+1]
$$

于是得到结论：

$$
\boxed{\text{arr}[i+1] = \text{encoded}[i] \oplus \text{arr}[i]}
$$
