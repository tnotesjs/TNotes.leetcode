class Solution:
    def sumDistance(self, nums: list[int], s: str, d: int) -> int:
        MOD = 10 ** 9 + 7
        n = len(nums)
        pos = sorted(nums[i] + (d if s[i] == 'R' else -d) for i in range(n))
        res = prefix = 0
        for i in range(n):
            res = (res + i * pos[i] - prefix) % MOD
            prefix += pos[i]
        return res % MOD
