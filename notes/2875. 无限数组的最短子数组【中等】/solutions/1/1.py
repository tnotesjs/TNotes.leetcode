class Solution:
    def minSizeSubarray(self, nums: list[int], target: int) -> int:
        n = len(nums)
        total_sum = sum(nums)
        full_cycles = target // total_sum
        remainder = target % total_sum
        if remainder == 0:
            return full_cycles * n
        min_len = float('inf')
        s = 0
        left = 0
        for right in range(2 * n):
            s += nums[right % n]
            while s > remainder:
                s -= nums[left % n]
                left += 1
            if s == remainder:
                min_len = min(min_len, right - left + 1)
        return -1 if min_len == float('inf') else full_cycles * n + min_len
