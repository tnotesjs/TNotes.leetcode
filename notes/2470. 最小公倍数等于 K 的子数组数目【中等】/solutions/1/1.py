from math import gcd

class Solution:
    def subarrayLCM(self, nums: list[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            l = 1
            for j in range(i, len(nums)):
                l = l * nums[j] // gcd(l, nums[j])
                if l == k:
                    count += 1
                if l > k:
                    break
        return count
