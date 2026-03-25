class Solution:
    def minSessions(self, tasks: list[int], sessionTime: int) -> int:
        n = len(tasks)
        total = 1 << n
        ss = [0] * total
        for mask in range(1, total):
            bit = mask & (-mask)
            idx = bit.bit_length() - 1
            ss[mask] = ss[mask ^ bit] + tasks[idx]
        dp = [n] * total
        dp[0] = 0
        for mask in range(1, total):
            sub = mask
            while sub:
                if ss[sub] <= sessionTime:
                    dp[mask] = min(dp[mask], dp[mask ^ sub] + 1)
                sub = (sub - 1) & mask
        return dp[total - 1]
