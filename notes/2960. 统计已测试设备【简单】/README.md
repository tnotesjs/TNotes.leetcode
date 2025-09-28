# [2960. 统计已测试设备【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2960.%20%E7%BB%9F%E8%AE%A1%E5%B7%B2%E6%B5%8B%E8%AF%95%E8%AE%BE%E5%A4%87%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-tested-devices-after-test-operations/)

给你一个长度为 `n` 、下标从 **0** 开始的整数数组 `batteryPercentages` ，表示 `n` 个设备的电池百分比。

你的任务是按照顺序测试每个设备 `i`，执行以下测试操作：

- 如果 `batteryPercentages[i]` **大于** `0`：
  - **增加** 已测试设备的计数。
  - 将下标 `j` 在 `[i + 1, n - 1]` 的所有设备的电池百分比减少 `1`，确保它们的电池百分比 **不会低于** `0` ，即 `batteryPercentages[j] = max(0, batteryPercentages[j] - 1)`。
  - 移动到下一个设备。
- 否则，移动到下一个设备而不执行任何测试。

返回一个整数，表示按顺序执行测试操作后 **已测试设备** 的数量。

---

- **示例 1：**

```txt
输入：batteryPercentages = [1,1,2,1,3]
输出：3
解释：按顺序从设备 0 开始执行测试操作：
在设备 0 上，batteryPercentages[0] > 0 ，现在有 1 个已测试设备，batteryPercentages 变为 [1,0,1,0,2] 。
在设备 1 上，batteryPercentages[1] == 0 ，移动到下一个设备而不进行测试。
在设备 2 上，batteryPercentages[2] > 0 ，现在有 2 个已测试设备，batteryPercentages 变为 [1,0,1,0,1] 。
在设备 3 上，batteryPercentages[3] == 0 ，移动到下一个设备而不进行测试。
在设备 4 上，batteryPercentages[4] > 0 ，现在有 3 个已测试设备，batteryPercentages 保持不变。
因此，答案是 3 。
```

- **示例 2：**

```txt
输入：batteryPercentages = [0,1,2]
输出：2
解释：按顺序从设备 0 开始执行测试操作：
在设备 0 上，batteryPercentages[0] == 0 ，移动到下一个设备而不进行测试。
在设备 1 上，batteryPercentages[1] > 0 ，现在有 1 个已测试设备，batteryPercentages 变为 [0,1,1] 。
在设备 2 上，batteryPercentages[2] > 0 ，现在有 2 个已测试设备，batteryPercentages 保持不变。
因此，答案是 2 。
```

---

**提示：**

- `1 <= n == batteryPercentages.length <= 100`
- `0 <= batteryPercentages[i] <= 100`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
