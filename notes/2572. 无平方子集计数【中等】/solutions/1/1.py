class Solution:
    def squareFreeSubsets(self, nums: list[int]) -> int:
        MOD = 10**9 + 7
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        mask = {}
        for v in range(1, 31):
            m, x, valid = 0, v, True
            for i, p in enumerate(primes):
                cnt = 0
                while x % p == 0:
                    x //= p
                    cnt += 1
                if cnt > 1:
                    valid = False
                    break
                if cnt == 1:
                    m |= 1 << i
            if valid:
                mask[v] = m
        from collections import Counter
        freq = Counter(nums)
        dp = [0] * 1024
        dp[0] = 1
        for v in range(2, 31):
            if freq[v] == 0 or v not in mask:
                continue
            m = mask[v]
            for s in range(1023, -1, -1):
                if (s & m) == 0 and dp[s]:
                    dp[s | m] = (dp[s | m] + dp[s] * freq[v]) % MOD
        ans = sum(dp) % MOD
        ans = (ans * pow(2, freq[1], MOD) - 1) % MOD
        return ans
