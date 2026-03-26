class Solution:
    def beautifulSubsets(self, nums: list[int], k: int) -> int:
        nums.sort()
        cnt: dict[int, int] = {}
        ans = 0

        def dfs(i: int) -> None:
            nonlocal ans
            if i == len(nums):
                ans += 1
                return
            dfs(i + 1)  # 不选
            if cnt.get(nums[i] - k, 0) == 0:
                cnt[nums[i]] = cnt.get(nums[i], 0) + 1
                dfs(i + 1)  # 选
                cnt[nums[i]] -= 1

        dfs(0)
        return ans - 1
