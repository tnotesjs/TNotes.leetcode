class Solution:
    def beautifulSubarrays(self, nums: list[int]) -> int:
        from collections import defaultdict
        cnt = defaultdict(int)
        cnt[0] = 1
        xor = 0
        ans = 0
        for v in nums:
            xor ^= v
            ans += cnt[xor]
            cnt[xor] += 1
        return ans
