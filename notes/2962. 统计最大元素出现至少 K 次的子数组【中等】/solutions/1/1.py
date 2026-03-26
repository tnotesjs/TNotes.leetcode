class Solution:
    def countSubarrays(self, nums: list[int], k: int) -> int:
        mx = max(nums)
        ans = cnt = left = 0
        for x in nums:
            if x == mx:
                cnt += 1
            while cnt >= k:
                if nums[left] == mx:
                    cnt -= 1
                left += 1
            ans += left
        return ans
