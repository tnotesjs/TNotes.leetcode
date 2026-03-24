class Solution:
    def findSubsequences(self, nums: List[int]) -> List[List[int]]:
        res = []
        def dfs(start, path):
            if len(path) >= 2:
                res.append(path[:])
            used = set()
            for i in range(start, len(nums)):
                if nums[i] in used:
                    continue
                if path and nums[i] < path[-1]:
                    continue
                used.add(nums[i])
                path.append(nums[i])
                dfs(i + 1, path)
                path.pop()
        dfs(0, [])
        return res
