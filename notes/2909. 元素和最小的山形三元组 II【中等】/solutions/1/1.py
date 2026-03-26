class Solution:
    def minimumSum(self, nums: list[int]) -> int:
        n = len(nums)
        right_min = [0] * n
        right_min[-1] = nums[-1]
        for i in range(n - 2, -1, -1):
            right_min[i] = min(right_min[i + 1], nums[i])

        res = -1
        left_min = nums[0]
        for j in range(1, n - 1):
            if left_min < nums[j] and right_min[j + 1] < nums[j]:
                s = left_min + nums[j] + right_min[j + 1]
                if res == -1 or s < res:
                    res = s
            left_min = min(left_min, nums[j])
        return res
