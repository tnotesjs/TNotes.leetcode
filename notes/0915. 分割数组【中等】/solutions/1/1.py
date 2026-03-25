class Solution:
    def partitionDisjoint(self, nums: list[int]) -> int:
        left_max = cur_max = nums[0]
        partition_idx = 0

        for i in range(1, len(nums)):
            if nums[i] < left_max:
                partition_idx = i
                left_max = cur_max
            else:
                cur_max = max(cur_max, nums[i])

        return partition_idx + 1
