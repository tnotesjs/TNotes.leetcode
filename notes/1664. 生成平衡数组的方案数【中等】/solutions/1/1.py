class Solution:
    def waysToMakeFair(self, nums: list[int]) -> int:
        suf_even = sum(nums[i] for i in range(0, len(nums), 2))
        suf_odd = sum(nums[i] for i in range(1, len(nums), 2))
        pre_even = pre_odd = res = 0
        for i in range(len(nums)):
            if i % 2 == 0:
                suf_even -= nums[i]
            else:
                suf_odd -= nums[i]
            if pre_even + suf_odd == pre_odd + suf_even:
                res += 1
            if i % 2 == 0:
                pre_even += nums[i]
            else:
                pre_odd += nums[i]
        return res
