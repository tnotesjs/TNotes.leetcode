class Solution:
    def checkArithmeticSubarrays(self, nums: list[int], l: list[int], r: list[int]) -> list[bool]:
        res = []
        for li, ri in zip(l, r):
            sub = sorted(nums[li:ri+1])
            diff = sub[1] - sub[0]
            res.append(all(sub[i] - sub[i-1] == diff for i in range(2, len(sub))))
        return res
