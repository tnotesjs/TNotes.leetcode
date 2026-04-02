class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2 != 0:
            return False
        target = total // 2
        bits = 1  # bit 0 置 1，表示和 0 可达
        for num in nums:
            bits |= bits << num
        return bool((bits >> target) & 1)
