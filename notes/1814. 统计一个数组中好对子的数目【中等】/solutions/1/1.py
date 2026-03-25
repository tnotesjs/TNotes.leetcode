class Solution:
    def countNicePairs(self, nums: list[int]) -> int:
        MOD = 10 ** 9 + 7
        from collections import defaultdict
        cnt = defaultdict(int)
        ans = 0
        for x in nums:
            key = x - int(str(x)[::-1])
            ans = (ans + cnt[key]) % MOD
            cnt[key] += 1
        return ans
