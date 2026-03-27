class Solution:
    def maxOperations(self, nums: list[int]) -> int:
        from functools import lru_cache
        n = len(nums)
        ans = 0
        for target in {nums[0] + nums[1], nums[0] + nums[-1], nums[-2] + nums[-1]}:
            @lru_cache(maxsize=None)
            def dfs(l, r):
                if l >= r:
                    return 0
                res = 0
                if nums[l] + nums[l + 1] == target:
                    res = max(res, 1 + dfs(l + 2, r))
                if nums[l] + nums[r] == target:
                    res = max(res, 1 + dfs(l + 1, r - 1))
                if nums[r - 1] + nums[r] == target:
                    res = max(res, 1 + dfs(l, r - 2))
                return res
            ans = max(ans, dfs(0, n - 1))
            dfs.cache_clear()
        return ans
