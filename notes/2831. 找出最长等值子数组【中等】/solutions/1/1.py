class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        groups = defaultdict(list)
        for i, v in enumerate(nums):
            groups[v].append(i)
        ans = 0
        for indices in groups.values():
            l = 0
            for r in range(len(indices)):
                while indices[r] - indices[l] + 1 - (r - l + 1) > k:
                    l += 1
                ans = max(ans, r - l + 1)
        return ans
