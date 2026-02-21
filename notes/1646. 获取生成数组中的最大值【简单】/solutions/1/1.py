class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        if n == 0:
            return 0
        if n == 1:
            return 1

        nums = [0] * (n + 1)
        nums[1] = 1
        ans = 1

        i = 1
        while 2 * i <= n:
            even = 2 * i
            odd = 2 * i + 1
            nums[even] = nums[i]
            ans = max(ans, nums[even])
            if odd <= n:
                nums[odd] = nums[i] + nums[i + 1]
                ans = max(ans, nums[odd])
            i += 1

        return ans
