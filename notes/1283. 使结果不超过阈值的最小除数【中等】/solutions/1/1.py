class Solution:
    def smallestDivisor(self, nums: list[int], threshold: int) -> int:
        left, right = 1, max(nums)
        while left < right:
            mid = (left + right) // 2
            if sum((num + mid - 1) // mid for num in nums) <= threshold:
                right = mid
            else:
                left = mid + 1
        return left
