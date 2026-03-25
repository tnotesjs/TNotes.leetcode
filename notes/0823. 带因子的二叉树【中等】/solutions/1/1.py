class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        MOD = 10**9 + 7
        arr.sort()
        dp = {}
        res = 0
        for x in arr:
            dp[x] = 1
            for a in arr:
                if a * a > x: break
                if x % a == 0 and x // a in dp:
                    b = x // a
                    cnt = dp[a] * dp[b] % MOD
                    if a != b: cnt = cnt * 2 % MOD
                    dp[x] = (dp[x] + cnt) % MOD
            res = (res + dp[x]) % MOD
        return res
