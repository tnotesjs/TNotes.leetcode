class Solution:
    def wiggleSort(self, nums: List[int]) -> None:
        sorted_nums = sorted(nums)
        n = len(nums)
        left, right = (n - 1) // 2, n - 1
        for i in range(n):
            if i % 2 == 0:
                nums[i] = sorted_nums[left]
                left -= 1
            else:
                nums[i] = sorted_nums[right]
                right -= 1
