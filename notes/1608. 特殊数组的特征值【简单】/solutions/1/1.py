class Solution:
    def specialArray(self, nums: List[int]) -> int:
        # 升序排序
        nums.sort()
        n = len(nums)

        for i in range(n):
            x = n - i
            prev = float("-inf") if i == 0 else nums[i - 1]
            if nums[i] >= x and prev < x:
                return x

        return -1
