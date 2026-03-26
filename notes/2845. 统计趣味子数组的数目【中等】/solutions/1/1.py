class Solution:
    def countInterestingSubarrays(self, nums: List[int], modulo: int, k: int) -> int:
        cnt = defaultdict(int)
        cnt[0] = 1
        prefix = 0
        ans = 0
        for x in nums:
            if x % modulo == k:
                prefix += 1
            mod = prefix % modulo
            ans += cnt[(mod - k) % modulo]
            cnt[mod] += 1
        return ans
