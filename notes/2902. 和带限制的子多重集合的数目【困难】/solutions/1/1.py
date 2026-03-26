class Solution:
    def countSubMultisets(self, nums: list[int], l: int, r: int) -> int:
        MOD = 10**9 + 7
        from collections import Counter
        cnt = Counter(nums)
        total = sum(nums)
        if total < l:
            return 0
        r = min(r, total)

        zeros = cnt.pop(0, 0)

        dp = [0] * (r + 1)
        dp[0] = 1

        for v, c in cnt.items():
            new_dp = [0] * (r + 1)
            for rem in range(v):
                window_sum = 0
                count = 0
                j = rem
                while j <= r:
                    window_sum = (window_sum + dp[j]) % MOD
                    count += 1
                    if count > c + 1:
                        window_sum = (window_sum - dp[j - (c + 1) * v]) % MOD
                    new_dp[j] = window_sum
                    j += v
            dp = new_dp

        ans = sum(dp[l:r + 1]) % MOD
        ans = ans * (zeros + 1) % MOD
        return ans
