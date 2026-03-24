class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        prefix = {0: -1}
        count = res = 0
        for i, num in enumerate(nums):
            count += 1 if num == 1 else -1
            if count in prefix:
                res = max(res, i - prefix[count])
            else:
                prefix[count] = i
        return res
