class Solution:
    def checkArray(self, nums: list[int], k: int) -> bool:
        n = len(nums)
        diff = [0] * (n + 1)
        cur = 0
        for i in range(n):
            cur += diff[i]
            val = nums[i] + cur
            if val < 0:
                return False
            if val == 0:
                continue
            if i + k > n:
                return False
            cur -= val
            diff[i + k] += val
        return True
