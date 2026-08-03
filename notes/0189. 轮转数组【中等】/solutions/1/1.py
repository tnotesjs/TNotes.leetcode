class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        def reverse(left: int, right: int) -> None:
            while left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1

        n = len(nums)
        k %= n
        reverse(0, n - 1)  # 整体反转
        reverse(0, k - 1)  # 前 k 个再反转
        reverse(k, n - 1)  # 后半再反转
