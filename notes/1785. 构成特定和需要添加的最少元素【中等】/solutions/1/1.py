import math

class Solution:
    def minElements(self, nums: list[int], limit: int, goal: int) -> int:
        diff = abs(goal - sum(nums))
        return math.ceil(diff / limit)
