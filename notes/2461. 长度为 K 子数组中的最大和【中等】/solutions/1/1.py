class Solution:
    def maximumSubarraySum(self, nums: list[int], k: int) -> int:
        from collections import defaultdict
        freq = defaultdict(int)
        s = 0
        ans = 0
        for i, x in enumerate(nums):
            freq[x] += 1
            s += x
            if i >= k:
                left = nums[i - k]
                freq[left] -= 1
                if freq[left] == 0:
                    del freq[left]
                s -= left
            if i >= k - 1 and len(freq) == k:
                ans = max(ans, s)
        return ans
