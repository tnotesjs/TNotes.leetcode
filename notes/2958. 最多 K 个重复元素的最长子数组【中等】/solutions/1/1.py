from collections import defaultdict


class Solution:
    def maxSubarrayLength(self, nums: list[int], k: int) -> int:
        freq = defaultdict(int)
        left = max_len = 0
        for right, x in enumerate(nums):
            freq[x] += 1
            while freq[x] > k:
                freq[nums[left]] -= 1
                left += 1
            max_len = max(max_len, right - left + 1)
        return max_len
