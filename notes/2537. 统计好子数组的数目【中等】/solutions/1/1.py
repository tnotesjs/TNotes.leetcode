class Solution:
    def countGood(self, nums: list[int], k: int) -> int:
        from collections import defaultdict
        cnt = defaultdict(int)
        pairs = 0
        ans = 0
        left = 0
        for right, x in enumerate(nums):
            pairs += cnt[x]
            cnt[x] += 1
            while pairs >= k:
                ans += len(nums) - right
                cnt[nums[left]] -= 1
                pairs -= cnt[nums[left]]
                left += 1
        return ans
