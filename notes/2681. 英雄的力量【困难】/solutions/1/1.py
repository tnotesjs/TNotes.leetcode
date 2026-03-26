class Solution:
    def sumOfPower(self, nums: list[int]) -> int:
        MOD = 10**9 + 7
        nums.sort()
        ans = 0
        prefix = 0
        for v in nums:
            coeff = (prefix + v) % MOD
            ans = (ans + v * v % MOD * coeff) % MOD
            prefix = (2 * prefix + v) % MOD
        return ans
