class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = 0
        cur_end = 0  # 当前跳跃轮次能到达的最远下标
        farthest = 0  # 遍历中能到达的最远下标

        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == cur_end:  # 到达当前轮次边界，必须跳一次
                jumps += 1
                cur_end = farthest

        return jumps
