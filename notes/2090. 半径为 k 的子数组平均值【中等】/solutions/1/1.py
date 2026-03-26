class Solution:
    def getAverages(self, nums: list[int], k: int) -> list[int]:
        n = len(nums)
        ans = [-1] * n
        window = 2 * k + 1
        if window > n:
            return ans
        s = sum(nums[:window])
        ans[k] = s // window
        for i in range(k + 1, n - k):
            s += nums[i + k] - nums[i - k - 1]
            ans[i] = s // window
        return ans
