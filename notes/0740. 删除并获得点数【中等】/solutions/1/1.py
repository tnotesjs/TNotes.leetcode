class Solution:
    def deleteAndEarn(self, nums: List[int]) -> int:
        mx = max(nums)
        total = [0] * (mx + 1)
        for n in nums:
            total[n] += n
        prev, curr = 0, total[0]
        for i in range(1, mx + 1):
            prev, curr = curr, max(curr, prev + total[i])
        return curr
