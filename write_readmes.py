#!/usr/bin/env python3
"""Batch update all README.md files for problems 2536-2564."""
import os, glob, re

BASE = os.path.dirname(os.path.abspath(__file__))
NOTES = os.path.join(BASE, "notes")

def find_dir(num):
    pattern = os.path.join(NOTES, f"{num}.*")
    dirs = glob.glob(pattern)
    return dirs[0] if dirs else None

readme_updates = {}

# Format: (algorithm_name, complexity_time, complexity_space, algo_steps)

readme_updates[2536] = {
"name": "二维差分数组",
"time": r"$O(n^2 + Q)$，其中 Q 是查询次数，n 是矩阵大小",
"space": r"$O(n^2)$，差分数组的空间",
"steps": [
    "初始化一个 $(n+1) \\times (n+1)$ 的差分数组",
    "对每个查询 `[r1, c1, r2, c2]`，在差分数组的四个角标记增减量",
    "对差分数组求二维前缀和，还原出最终矩阵",
],
}

readme_updates[2537] = {
"name": "滑动窗口",
"time": r"$O(n)$，其中 n 是数组长度",
"space": r"$O(n)$，哈希表存储元素计数",
"steps": [
    "维护滑动窗口，用哈希表统计窗口内每个元素的出现次数",
    "右指针扩展时，新增元素的贡献为其已有计数（新增的配对数）",
    "当配对数 $\\ge k$ 时，右指针及之后的所有位置都可以作为右端点，累加 `n - right` 到答案",
    "收缩左指针，减去移除元素带来的配对数",
],
}

readme_updates[2538] = {
"name": "树形 DP",
"time": r"$O(n)$，其中 n 是节点数",
"space": r"$O(n)$，邻接表和递归栈的空间",
"steps": [
    "对树进行 DFS，每个节点返回两个值：带叶子端点的最长路径价值和、不带叶子端点的最长路径价值和",
    "对于每个节点 u，合并子树信息时更新全局答案：`ans = max(ans, wl[u] + wt[v], wt[u] + wl[v])`",
    "其中 wl 表示路径包含叶子端点（即完整路径），wt 表示路径不包含叶子端点（相当于去掉一个端点的价值）",
    "最终答案即为最大开销（最大路径和减去一个端点的价值）",
],
}

readme_updates[2541] = {
"name": "贪心",
"time": r"$O(n)$，其中 n 是数组长度",
"space": r"$O(1)$，只使用了常数级别的额外空间",
"steps": [
    "特判 `k = 0`：此时只有 `nums1 == nums2` 才可行",
    "遍历数组，计算每个位置的差值 `diff = nums2[i] - nums1[i]`",
    "若 `diff` 不是 `k` 的倍数，返回 -1",
    "累加正差值的操作次数，同时检查总差值之和是否为 0（操作必须配对）",
],
}

readme_updates[2542] = {
"name": "排序 + 最小堆",
"time": r"$O(n \log n)$，排序和堆操作",
"space": r"$O(n)$，存储排序索引和堆",
"steps": [
    "将下标按 `nums2` 降序排序，保证遍历时 `nums2[i]` 单调递减",
    "维护一个大小为 k 的最小堆，存储当前选中的 `nums1` 值",
    "遍历排序后的下标，将 `nums1[i]` 加入堆中并累加到 sum",
    "若堆大小超过 k，弹出最小值并从 sum 中减去",
    "当堆大小恰好为 k 时，用 `sum * nums2[i]` 更新答案",
],
}

readme_updates[2543] = {
"name": "GCD",
"time": r"$O(\log(\min(x, y)))$，GCD 计算的时间",
"space": r"$O(1)$，只使用了常数级别的额外空间",
"steps": [
    "操作 `(x, y-x)` 和 `(x-y, y)` 本质上是辗转相减（GCD 操作的逆过程）",
    "操作 `(2x, y)` 和 `(x, 2y)` 可以任意乘以 2 的幂",
    "从 `(1, 1)` 出发，能到达的点 `(x, y)` 等价于 `gcd(x, y)` 是 2 的幂",
    "判断 `gcd(targetX, targetY)` 是否为 2 的幂：`g & (g - 1) === 0`",
],
}

readme_updates[2545] = {
"name": "排序",
"time": r"$O(m \log m)$，其中 m 是学生数",
"space": r"$O(\log m)$，排序使用的栈空间",
"steps": [
    "按第 k 列的分数降序排序矩阵的行",
],
}

readme_updates[2546] = {
"name": "逻辑判断",
"time": r"$O(n)$，其中 n 是字符串长度",
"space": r"$O(1)$，只使用了常数级别的额外空间",
"steps": [
    "分析操作的本质：`(0,1) → (1,1)`、`(1,0) → (1,1)`、`(1,1) → (1,0)`",
    "只要 s 中有至少一个 '1'，就能通过操作将任意位变为 0 或 1",
    "唯一无法改变的是：全 0 无法产生 1，有 1 无法消除所有 1",
    "因此答案取决于 s 和 target 是否「同时含有 1」或「同时全为 0」",
],
}

readme_updates[2547] = {
"name": "动态规划",
"time": r"$O(n^2)$，其中 n 是数组长度",
"space": r"$O(n)$，DP 数组和计数数组的空间",
"steps": [
    "定义 `dp[i]` 为将 `nums[0..i-1]` 拆分的最小代价",
    "枚举最后一个子数组的起始位置 j，从 `i-1` 向前扫描",
    "维护计数数组 cnt，实时计算 trimmedLength（出现次数 ≥ 2 的元素的总个数）",
    "转移方程：`dp[i] = min(dp[j] + k + trimLen)`",
],
}

readme_updates[2550] = {
"name": "快速幂",
"time": r"$O(\log n)$，快速幂的时间复杂度",
"space": r"$O(1)$，只使用了常数级别的额外空间",
"steps": [
    "每只猴子有两种选择（顺时针或逆时针），总方案数为 $2^n$",
    "不碰撞的方案只有两种：全部顺时针或全部逆时针",
    "答案为 $(2^n - 2) \\mod (10^9 + 7)$，使用快速幂计算",
],
}

readme_updates[2551] = {
"name": "排序相邻和",
"time": r"$O(n \log n)$，其中 n 是数组长度",
"space": r"$O(n)$，存储相邻对的和",
"steps": [
    "将数组分成 k 段时，代价 = 每段首尾元素之和的总和",
    "等价于 `weights[0] + weights[n-1]`（固定）加上 k-1 个分割点处相邻元素的和",
    "计算所有 `weights[i] + weights[i+1]` 并排序",
    "最大分数取最大的 k-1 个相邻和，最小分数取最小的 k-1 个",
    "答案为两者之差",
],
}

readme_updates[2552] = {
"name": "枚举 + 前缀计数",
"time": r"$O(n^2)$，其中 n 是数组长度",
"space": r"$O(n)$，辅助数组 f 的空间",
"steps": [
    "需要统计满足 `i < j < k < l` 且 `nums[i] < nums[k] < nums[j] < nums[l]` 的四元组数",
    "定义 `f[j]` = 满足 `i < j < k` 且 `nums[i] < nums[k] < nums[j]` 的 (i, k) 对数",
    "从左到右枚举 k，维护 cntLess 表示 j 之前小于 `nums[k]` 的元素个数",
    "若 `nums[j] < nums[k]`：k 作为 l 角色，`ans += f[j]`；同时 `cntLess++`",
    "若 `nums[j] > nums[k]`：(j, k) 作为中间对，`f[j] += cntLess`",
],
}

readme_updates[2554] = {
"name": "贪心 + 哈希集合",
"time": r"$O(n + m \log m)$，其中 n 是范围大小，m 是 banned 数组长度",
"space": r"$O(m)$，哈希集合存储 banned 数组",
"steps": [
    "将 banned 数组放入哈希集合",
    "从 1 到 n 遍历，跳过 banned 中的整数",
    "每次选择当前最小的合法整数，累加到 sum",
    "当 sum 超过 maxSum 时停止，返回已选择的个数",
],
}

readme_updates[2555] = {
"name": "滑动窗口 + DP",
"time": r"$O(n)$，其中 n 是奖品数组长度",
"space": r"$O(n)$，DP 数组的空间",
"steps": [
    "用滑动窗口维护第二条线段能覆盖的奖品数",
    "定义 `dp[i]` 表示前 i 个位置中，一条线段最多能获得的奖品数",
    "对于当前窗口 `[left, right]`，第二条线段覆盖 `right - left + 1` 个奖品",
    "第一条线段的最优选择为 `dp[left]`（左侧前缀的最大值）",
    "答案为 `max(cnt + dp[left])` 的最大值",
],
}

readme_updates[2556] = {
"name": "两次 DFS",
"time": r"$O(m \\times n)$，其中 m 和 n 是矩阵的行列数",
"space": r"$O(m \\times n)$，递归栈的空间",
"steps": [
    "第一次 DFS 从 `(0,0)` 到 `(m-1,n-1)` 找到一条路径，并将路径上的中间格子置为 0",
    "恢复起点和终点的值为 1",
    "第二次 DFS 检查是否仍存在从 `(0,0)` 到 `(m-1,n-1)` 的路径",
    "若第二次 DFS 找不到路径，说明翻转第一条路径上的某个格子即可断开连通性",
],
}

readme_updates[2559] = {
"name": "前缀和",
"time": r"$O(n + q)$，其中 n 是 words 长度，q 是查询次数",
"space": r"$O(n)$，前缀和数组的空间",
"steps": [
    "预处理：判断每个字符串是否以元音开头且以元音结尾",
    "构建前缀和数组 `prefix[i]`，表示前 i 个字符串中满足条件的个数",
    "对于每个查询 `[l, r]`，答案为 `prefix[r+1] - prefix[l]`",
],
}

readme_updates[2560] = {
"name": "二分查找 + 贪心",
"time": r"$O(n \log C)$，其中 n 是数组长度，C 是值域范围",
"space": r"$O(1)$，只使用了常数级别的额外空间",
"steps": [
    "二分查找窃取能力 mid，检查在能力为 mid 的限制下能否窃取 ≥ k 间房屋",
    "贪心验证：遍历数组，若当前房屋值 ≤ mid 且前一间未被窃取，则窃取当前房屋",
    "若窃取数 ≥ k，则 mid 可行，收缩右边界；否则扩大左边界",
],
}

readme_updates[2561] = {
"name": "贪心 + 计数",
"time": r"$O(n \log n)$，其中 n 是数组长度",
"space": r"$O(n)$，哈希表和交换数组的空间",
"steps": [
    "用哈希表统计每种水果在两个篮子中的数量差",
    "若某种水果总数为奇数，无法使两篮相等，返回 -1",
    "收集所有需要交换的水果（每种水果的差值的一半），排序",
    "将排序后的列表前一半与后一半配对，每对的交换成本为 `min(较小值, 2 × 全局最小值)`",
],
}

readme_updates[2563] = {
"name": "排序 + 双指针",
"time": r"$O(n \log n)$，排序的时间复杂度",
"space": r"$O(\log n)$，排序使用的栈空间",
"steps": [
    "将数组排序后，问题转化为统计满足 `lower ≤ nums[i] + nums[j] ≤ upper` 的对数",
    "利用双指针分别计算 `nums[i] + nums[j] < upper + 1` 的对数和 `< lower` 的对数",
    "两者之差即为公平数对的数目",
],
}

readme_updates[2564] = {
"name": "哈希表预处理",
"time": r"$O(30n + q)$，其中 n 是字符串长度，q 是查询次数",
"space": r"$O(30n)$，哈希表存储所有子串的十进制值",
"steps": [
    "预处理字符串 s 的所有长度不超过 30 的子串（因为值不超过 $10^9 < 2^{30}$）",
    "将每个子串的十进制值映射到其最早出现的最短区间 `[left, right]`",
    "遇到前导零时提前终止（val = 0 后无需继续扩展）",
    "对每个查询 `[first, second]`，计算目标值 `first ^ second`，从哈希表中查询结果",
],
}

# ===== Apply updates =====
for num, info in readme_updates.items():
    d = find_dir(num)
    if d is None:
        print(f"ERROR: directory not found for {num}")
        continue
    readme_path = os.path.join(d, "README.md")
    with open(readme_path, "r") as f:
        content = f.read()

    # Find the section to replace: ## 2. 🎯 s.1 - ... and everything after
    pattern = r'## 2\. 🎯 s\.1 - .*'
    match = re.search(pattern, content)
    if not match:
        print(f"ERROR: section not found in {num}")
        continue

    # Build new section
    steps_text = "\n".join(f"- {step}" for step in info["steps"])
    new_section = f"""## 2. 🎯 s.1 - {info["name"]}

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：{info["time"]}
- 空间复杂度：{info["space"]}

算法思路：

{steps_text}
"""

    # Replace from the match position to end of file
    new_content = content[:match.start()] + new_section
    with open(readme_path, "w") as f:
        f.write(new_content)
    print(f"OK: {num} README.md")

print("All README files updated!")
