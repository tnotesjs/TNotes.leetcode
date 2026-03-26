from math import gcd

class Solution:
    def subarrayGCD(self, nums: list[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            g = 0
            for j in range(i, len(nums)):
                g = gcd(g, nums[j])
                if g == k:
                    count += 1
                if g < k:
                    break
        return count
