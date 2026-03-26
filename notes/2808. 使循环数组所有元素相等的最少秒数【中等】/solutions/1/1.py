class Solution:
    def minimumSeconds(self, nums: list[int]) -> int:
        from collections import defaultdict
        pos = defaultdict(list)
        n = len(nums)
        for i, v in enumerate(nums):
            pos[v].append(i)
        ans = n
        for indices in pos.values():
            max_gap = indices[0] + n - indices[-1]
            for i in range(1, len(indices)):
                max_gap = max(max_gap, indices[i] - indices[i - 1])
            ans = min(ans, max_gap // 2)
        return ans
