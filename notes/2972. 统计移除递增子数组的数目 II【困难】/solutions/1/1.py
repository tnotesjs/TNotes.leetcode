class Solution:
    def incremovableSubarrayCount(self, nums: list[int]) -> int:
        n = len(nums)
        i = 0
        while i + 1 < n and nums[i] < nums[i + 1]:
            i += 1
        if i == n - 1:
            return n * (n + 1) // 2
        j = n - 1
        while j > 0 and nums[j - 1] < nums[j]:
            j -= 1
        ans = n - j + 1
        r = j
        for l in range(i + 1):
            while r < n and nums[r] <= nums[l]:
                r += 1
            ans += n - r + 1
        return ans
