class Solution:
    def maxSumTwoNoOverlap(self, nums: list[int], firstLen: int, secondLen: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + nums[i]

        def solve(l1: int, l2: int) -> int:
            max_first = res = 0
            for i in range(l1 + l2, n + 1):
                max_first = max(max_first, prefix[i - l2] - prefix[i - l1 - l2])
                res = max(res, max_first + prefix[i] - prefix[i - l2])
            return res

        return max(solve(firstLen, secondLen), solve(secondLen, firstLen))
