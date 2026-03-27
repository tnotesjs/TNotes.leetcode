class Solution:
    def countMatchingSubarrays(self, nums: list[int], pattern: list[int]) -> int:
        n, m = len(nums), len(pattern)
        count = 0
        for i in range(n - m):
            match = True
            for k in range(m):
                diff = nums[i + k + 1] - nums[i + k]
                p = 1 if diff > 0 else (-1 if diff < 0 else 0)
                if p != pattern[k]:
                    match = False
                    break
            if match:
                count += 1
        return count
