class Solution:
    def minimalKSum(self, nums: list[int], k: int) -> int:
        nums = sorted(set(nums))
        s = k * (k + 1) // 2
        top = k
        for num in nums:
            if num <= top:
                top += 1
                s += top - num
        return s
