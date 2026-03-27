class Solution:
    def maximumSubarraySum(self, nums: list[int], k: int) -> int:
        prefix = [0]
        for x in nums:
            prefix.append(prefix[-1] + x)
        min_prefix = {}
        ans = float('-inf')
        for j, v in enumerate(nums):
            for target in (v - k, v + k):
                if target in min_prefix:
                    ans = max(ans, prefix[j + 1] - min_prefix[target])
            if v not in min_prefix or prefix[j] < min_prefix[v]:
                min_prefix[v] = prefix[j]
        return ans if ans != float('-inf') else 0
