class Solution:
    def minOperations(self, nums: list[int], queries: list[int]) -> list[int]:
        from bisect import bisect_left
        nums.sort()
        n = len(nums)
        pre = [0] * (n + 1)
        for i in range(n):
            pre[i + 1] = pre[i] + nums[i]
        ans = []
        for q in queries:
            j = bisect_left(nums, q)
            left = q * j - pre[j]
            right = pre[n] - pre[j] - q * (n - j)
            ans.append(left + right)
        return ans
