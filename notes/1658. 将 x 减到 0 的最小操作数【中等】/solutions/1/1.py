class Solution:
    def minOperations(self, nums: list[int], x: int) -> int:
        target = sum(nums) - x
        if target < 0:
            return -1
        if target == 0:
            return len(nums)
        left = 0
        cur = 0
        max_len = -1
        for right in range(len(nums)):
            cur += nums[right]
            while cur > target:
                cur -= nums[left]
                left += 1
            if cur == target:
                max_len = max(max_len, right - left + 1)
        return -1 if max_len == -1 else len(nums) - max_len
