class Solution:
    def countCompleteSubarrays(self, nums: list[int]) -> int:
        total = len(set(nums))
        ans = left = 0
        cnt = {}
        for right, v in enumerate(nums):
            cnt[v] = cnt.get(v, 0) + 1
            while len(cnt) == total:
                ans += len(nums) - right
                cnt[nums[left]] -= 1
                if cnt[nums[left]] == 0:
                    del cnt[nums[left]]
                left += 1
        return ans
