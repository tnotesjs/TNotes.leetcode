class Solution:
    def minOrAfterOperations(self, nums: list[int], k: int) -> int:
        n = len(nums)
        ans = 0
        for bit in range(29, -1, -1):
            target = ans | ((1 << bit) - 1)
            ops = 0
            cur = ~0
            for x in nums:
                cur &= x
                if (cur & ~target) == 0:
                    ops += 1
                    cur = ~0
            needed = n - ops
            if needed > k:
                ans |= (1 << bit)
        return ans
