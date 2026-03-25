class Solution:
    def maxNonOverlapping(self, nums: list[int], target: int) -> int:
        seen = {0}
        prefix_sum = 0
        count = 0
        for x in nums:
            prefix_sum += x
            if prefix_sum - target in seen:
                count += 1
                seen = {prefix_sum}
            else:
                seen.add(prefix_sum)
        return count
