class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        def helper(left: int, right: int) -> int:
            # base case：只有一个元素
            if left == right:
                return nums[left]

            mid = (left + right) // 2

            # 情况一：最大子数组在左半部分
            left_max = helper(left, mid)

            # 情况二：最大子数组在右半部分
            right_max = helper(mid + 1, right)

            # 情况三：最大子数组跨越中点
            # <- 从中点向左扩展，求最大和
            left_sum = -float("inf")
            total = 0
            for i in range(mid, left - 1, -1):
                total += nums[i]
                left_sum = max(left_sum, total)

            # -> 从中点右边向右扩展，求最大和
            right_sum = -float("inf")
            total = 0
            for i in range(mid + 1, right + 1):
                total += nums[i]
                right_sum = max(right_sum, total)

            cross_max = left_sum + right_sum

            # 三种情况取最大值
            return max(left_max, right_max, cross_max)

        return helper(0, len(nums) - 1)
