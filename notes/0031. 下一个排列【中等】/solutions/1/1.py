class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = n - 2

        # 步骤 1：从右向左找到第一个下降位 nums[i] < nums[i+1]
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1

        if i >= 0:
            # 步骤 2：在 i 右侧找到最小的比 nums[i] 大的数 nums[j]
            j = n - 1
            while nums[j] <= nums[i]:
                j -= 1
            # 交换
            nums[i], nums[j] = nums[j], nums[i]

        # 步骤 3：将 i+1 右侧区域最小化
        nums[i + 1 :] = nums[i + 1 :][::-1]
