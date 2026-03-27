class Solution:
    def canSortArray(self, nums: list[int]) -> bool:
        prev_max = 0
        cur_min = cur_max = nums[0]
        cur_bits = nums[0].bit_count()

        for i in range(1, len(nums)):
            bits = nums[i].bit_count()
            if bits == cur_bits:
                cur_min = min(cur_min, nums[i])
                cur_max = max(cur_max, nums[i])
            else:
                if prev_max > cur_min:
                    return False
                prev_max = cur_max
                cur_min = cur_max = nums[i]
                cur_bits = bits

        return prev_max <= cur_min
