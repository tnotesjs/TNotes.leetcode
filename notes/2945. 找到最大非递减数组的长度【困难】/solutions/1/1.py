from collections import deque


class Solution:
    def findMaximumLength(self, nums: list[int]) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]

        dp = [0] * (n + 1)
        last = [0] * (n + 1)
        f = [0] * (n + 1)

        dq = deque([0])
        best_j = -1

        for i in range(1, n + 1):
            while dq and f[dq[0]] <= prefix[i]:
                j = dq.popleft()
                if best_j == -1 or dp[j] > dp[best_j] or (dp[j] == dp[best_j] and prefix[j] > prefix[best_j]):
                    best_j = j
            if best_j != -1:
                dp[i] = dp[best_j] + 1
                last[i] = prefix[i] - prefix[best_j]
            else:
                dp[i] = 1
                last[i] = prefix[i]
            f[i] = prefix[i] + last[i]
            while dq and f[dq[-1]] >= f[i] and (
                dp[dq[-1]] < dp[i] or (dp[dq[-1]] == dp[i] and prefix[dq[-1]] <= prefix[i])
            ):
                dq.pop()
            dq.append(i)

        return dp[n]
