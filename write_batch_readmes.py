#!/usr/bin/env python3
"""Batch update README.md solution sections for LeetCode problems."""
import os, glob, re

def find_dir(num):
    matches = glob.glob(f'notes/{num}.*')
    return matches[0] if matches else None

readme_updates = {}

# ===== 2565 =====
readme_updates[2565] = '''## 2. 🎯 s.1 - 前后缀分解

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N + M)$，其中 N 和 M 分别是字符串 s 和 t 的长度
- 空间复杂度：$O(N)$，用于存储后缀匹配数组

算法思路：

- 预处理后缀数组 `suf[i]`，表示 `s[i..n-1]` 能匹配 `t[suf[i]..m-1]` 这段后缀子序列
- 从右向左遍历 s，贪心匹配 t 的后缀部分
- 然后从左向右遍历 s，维护从左匹配 t 的前缀长度 j，每次成功匹配后，尝试用 `suf[i+1] - j` 更新答案
- 最终答案即为需要删除的 t 中间部分的最小长度
'''

# ===== 2567 =====
readme_updates[2567] = '''## 2. 🎯 s.1 - 排序 + 贪心

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\log N)$，排序的时间复杂度
- 空间复杂度：$O(\\log N)$，排序的栈空间

算法思路：

- 排序后，修改 2 个元素可以使最小得分为 0（将它们改为已有的值即可产生重复）
- 最大得分取决于剩余元素的范围，考虑三种方案：去掉最小的两个、去掉最大的两个、各去掉一个
- 取三种方案的最小值即为答案
'''

# ===== 2568 =====
readme_updates[2568] = '''## 2. 🎯 s.1 - 枚举 2 的幂

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N + \\log C)$，其中 C 是数组元素的最大值
- 空间复杂度：$O(N)$，哈希集合的空间

算法思路：

- 关键观察：通过 OR 运算能组合出的值，必须包含所有需要的 2 的幂作为"基础砖块"
- 如果数组中包含 1, 2, 4, ..., $2^k$，那么 $1$ 到 $2^{k+1}-1$ 的所有值都可表达
- 因此只需找到最小的不在数组中的 2 的幂即可
'''

# ===== 2569 =====
readme_updates[2569] = '''## 2. 🎯 s.1 - 线段树 + 懒标记

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O((N + Q) \\log N)$，其中 N 是数组长度，Q 是查询数量
- 空间复杂度：$O(N)$，线段树的空间

算法思路：

- 用线段树维护 nums1 的区间翻转操作和区间 1 的个数
- 对于操作 1，在线段树上执行区间翻转（lazy propagation）
- 对于操作 2，nums2 的总和增加 `p * count(nums1 中 1 的个数)`，只需维护 nums2 的总和即可
- 对于操作 3，直接返回当前 nums2 的总和
'''

# ===== 2571 =====
readme_updates[2571] = '''## 2. 🎯 s.1 - 贪心 + 位运算

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\\log N)$，每次操作至少消除一个连续 1 bit 段
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 观察二进制表示，每次操作加或减一个 2 的幂
- 贪心策略：取最低位的 1（lowbit），若其上方紧邻的 bit 也是 1（连续 1），则加 lowbit 合并进位；否则减 lowbit 消除孤立位
- 重复直到 n 变为 0，操作次数即为答案
'''

# ===== 2572 =====
readme_updates[2572] = '''## 2. 🎯 s.1 - 状态压缩 DP

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\cdot 2^{10})$，其中 N 是 1~30 中有效值的数量，$2^{10}$ 是 10 个质因子的状态数
- 空间复杂度：$O(2^{10})$，DP 数组的空间

算法思路：

- 30 以内的质数只有 10 个：2, 3, 5, 7, 11, 13, 17, 19, 23, 29，用 10 位 bitmask 表示质因子集合
- 对每个值 1~30 预处理其质因子 mask，含有平方因子的值（如 4, 8, 9...）直接跳过
- 用 `dp[mask]` 表示乘积的质因子集合恰好为 mask 的子集数
- 对值 1 特殊处理：每个 1 可选可不选，乘以 $2^{count(1)}$
'''

# ===== 2573 =====
readme_updates[2573] = '''## 2. 🎯 s.1 - 贪心构造 + 验证

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N^2)$，构造和验证各需 $O(N^2)$
- 空间复杂度：$O(N^2)$，用于存储验证矩阵

算法思路：

- 贪心构造：从左到右遍历，对每个未赋值的位置分配当前最小字符；若 `lcp[i][j] > 0`，则 `s[i]` 和 `s[j]` 必须相同，据此传播赋值
- 若需要超过 26 种字符，返回空串
- 验证：根据构造的字符串反向计算 LCP 矩阵（`chk[i][j] = chk[i+1][j+1] + 1` 当 `s[i] == s[j]`），与给定矩阵比对
'''

# ===== 2575 =====
readme_updates[2575] = '''## 2. 🎯 s.1 - 取模运算

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，遍历字符串一次
- 空间复杂度：$O(N)$，结果数组的空间（不计入则为 $O(1)$）

算法思路：

- 维护前缀数值对 m 的余数 `rem`
- 递推公式：`rem = (rem * 10 + digit) % m`
- 若 `rem == 0`，则当前前缀可被 m 整除，`div[i] = 1`；否则 `div[i] = 0`
'''

# ===== 2576 =====
readme_updates[2576] = '''## 2. 🎯 s.1 - 排序 + 二分答案

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\log N)$，排序 + 二分
- 空间复杂度：$O(\\log N)$，排序的栈空间

算法思路：

- 排序后，贪心地用最小的 k 个元素与最大的 k 个元素配对
- 二分答案 k（配对数），检查是否满足 `2 * nums[i] <= nums[n - k + i]` 对所有 `i < k`
- 最终答案为 `2 * k`（每对标记两个下标）
'''

# ===== 2577 =====
readme_updates[2577] = '''## 2. 🎯 s.1 - Dijkstra

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(MN \\log(MN))$，Dijkstra 算法
- 空间复杂度：$O(MN)$，距离数组和堆的空间

算法思路：

- 特判：若 `grid[0][1] > 1` 且 `grid[1][0] > 1`，则无法离开起点，返回 -1
- 使用 Dijkstra 最短路算法，关键在于计算到达相邻格子的时间
- 若当前时间 t 可直接到达（`t + 1 >= grid[nr][nc]`），则到达时间为 `t + 1`
- 否则需要来回走动"耗时"，到达时间为 `grid[nr][nc]`，若奇偶性不匹配则 +1
- 公式：`w = max(t + 1, grid[nr][nc])`，若 `(w - t)` 为偶数则 `w++`
'''

# ===== 2579 =====
readme_updates[2579] = '''## 2. 🎯 s.1 - 数学公式

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(1)$，直接计算公式
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 每分钟染色的格子形成菱形，第 n 分钟的总格子数形成规律
- $f(1) = 1, f(2) = 5, f(3) = 13, f(4) = 25, ...$
- 通项公式：$f(n) = 2n^2 - 2n + 1$
'''

# ===== 2580 =====
readme_updates[2580] = '''## 2. 🎯 s.1 - 合并区间 + 快速幂

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\log N)$，排序的时间复杂度
- 空间复杂度：$O(\\log N)$，排序的栈空间

算法思路：

- 按区间左端点排序，合并所有重叠的区间，得到 g 个独立的组
- 每个组可以独立地分配到组 1 或组 2，因此方案数为 $2^g \\mod (10^9 + 7)$
'''

# ===== 2581 =====
readme_updates[2581] = '''## 2. 🎯 s.1 - 换根 DP

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N + M)$，其中 N 是节点数，M 是猜测数
- 空间复杂度：$O(N + M)$，邻接表和哈希集合的空间

算法思路：

- 先以节点 0 为根 BFS，统计此时正确的猜测数 cnt
- 将所有猜测 `(u, v)` 存入哈希集合
- 换根 DP：从父节点到子节点换根时，若猜测 `(parent→child)` 存在则 cnt 减 1；若猜测 `(child→parent)` 存在则 cnt 加 1
- 统计所有 `cnt >= k` 的根节点数目
'''

# ===== 2583 =====
readme_updates[2583] = '''## 2. 🎯 s.1 - BFS + 排序

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\log N)$，BFS 遍历所有节点 + 排序层和数组
- 空间复杂度：$O(N)$，队列和层和数组的空间

算法思路：

- BFS 逐层遍历二叉树，计算每层的节点值之和
- 将所有层和收集到数组中，降序排序
- 若层数不足 k 层，返回 -1；否则返回第 k 大的层和
'''

# ===== 2584 =====
readme_updates[2584] = '''## 2. 🎯 s.1 - 质因子分解 + 区间覆盖

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N\\sqrt{V})$，其中 V 是数组元素的最大值，对每个元素做质因数分解
- 空间复杂度：$O(V + N)$，存储每个质因子的最后出现位置

算法思路：

- 对每个 `nums[i]` 做质因数分解，记录每个质因子在数组中最后出现的位置
- 从左到右扫描，维护当前所有已见质因子的最大最后出现位置 `maxEnd`
- 若 `maxEnd == i`，说明左右两部分不共享任何质因子，乘积互质，返回 i
'''

# ===== 2585 =====
readme_updates[2585] = '''## 2. 🎯 s.1 - 有界背包 DP

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\cdot T \\cdot C)$，其中 N 是题目种类数，T 是目标分数，C 是每种题的最大数量
- 空间复杂度：$O(T)$，一维 DP 数组

算法思路：

- 经典有界背包问题：每种题目有数量上限和固定分值
- `dp[j]` 表示恰好得到 j 分的方案数
- 对每种题目，从大到小枚举分数 j，内层枚举选取 1 到 count 道该类题目
- 初始化 `dp[0] = 1`，最终答案为 `dp[target]`
'''

# ===== 2587 =====
readme_updates[2587] = '''## 2. 🎯 s.1 - 贪心排序

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\log N)$，排序的时间复杂度
- 空间复杂度：$O(\\log N)$，排序的栈空间

算法思路：

- 降序排序数组，让大的正数排在前面，负数排在后面
- 这样前缀和尽可能长时间保持为正数
- 依次累加前缀和，统计前缀和为正的个数即为答案
'''

# ===== 2588 =====
readme_updates[2588] = '''## 2. 🎯 s.1 - 前缀异或 + 哈希表

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N)$，遍历数组一次
- 空间复杂度：$O(N)$，哈希表的空间

算法思路：

- 美丽子数组要求所有元素按位操作后变为 0，等价于子数组的 XOR 为 0
- 维护前缀 XOR 值，若 `prefix[l] == prefix[r]`，则子数组 `[l+1, r]` 的 XOR 为 0
- 用哈希表记录每个前缀 XOR 值出现的次数，类似"两数之和"的思路
'''

# ===== 2589 =====
readme_updates[2589] = '''## 2. 🎯 s.1 - 贪心 + 区间调度

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\cdot T + N \\log N)$，其中 T 是最大时间戳（2000），N 是任务数
- 空间复杂度：$O(T)$，布尔数组记录哪些时刻电脑运行

算法思路：

- 按结束时间升序排序所有任务
- 对于每个任务，先统计其区间内已经运行的时刻数
- 若不足 duration，从区间右端开始贪心地选择空闲时刻开机（尽量靠右，以便后续任务复用）
- 最终统计所有开机时刻的总数
'''

# ===== 2592 =====
readme_updates[2592] = '''## 2. 🎯 s.1 - 排序 + 双指针

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \\log N)$，排序的时间复杂度
- 空间复杂度：$O(\\log N)$，排序的栈空间

算法思路：

- 排序后，用双指针贪心匹配：指针 i 指向当前需要被"击败"的元素，指针 j 遍历所有元素
- 当 `nums[j] > nums[i]` 时，成功配对，两个指针都前进；否则只有 j 前进
- 最终 i 的值即为最大伟大值（成功配对的数量）
'''

# ===== Apply updates =====
for num, new_section in readme_updates.items():
    d = find_dir(num)
    if not d:
        print(f'ERROR: dir not found for {num}')
        continue
    readme_path = f'{d}/README.md'
    with open(readme_path, 'r') as f:
        content = f.read()

    # Find "## 2. 🎯 s.1" and replace everything from there to EOF
    pattern = r'## 2\. 🎯 s\.1.*'
    match = re.search(pattern, content, re.DOTALL)
    if match:
        new_content = content[:match.start()] + new_section.strip() + '\n'
        with open(readme_path, 'w') as f:
            f.write(new_content)
        print(f'{num}: README updated')
    else:
        print(f'{num}: WARNING - pattern not found in README')

print('\nAll READMEs updated!')
