class Solution:
    def maximumSum(self, nums: list[int]) -> int:
        best: dict[int, int] = {}
        res = -1
        for num in nums:
            s = sum(int(c) for c in str(num))
            if s in best:
                res = max(res, best[s] + num)
                best[s] = max(best[s], num)
            else:
                best[s] = num
        return res
