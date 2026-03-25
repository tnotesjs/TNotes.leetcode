class Solution:
    def maxCompatibilitySum(self, students: list[list[int]], mentors: list[list[int]]) -> int:
        m = len(students)
        n = 1 << m
        dp = [-1] * n
        dp[0] = 0
        for mask in range(n):
            if dp[mask] == -1:
                continue
            i = bin(mask).count('1')
            if i >= m:
                continue
            for j in range(m):
                if mask & (1 << j):
                    continue
                sc = sum(s == t for s, t in zip(students[i], mentors[j]))
                nxt = mask | (1 << j)
                dp[nxt] = max(dp[nxt], dp[mask] + sc)
        return dp[n - 1]
