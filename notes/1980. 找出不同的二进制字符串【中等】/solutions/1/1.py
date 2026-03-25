class Solution:
    def findDifferentBinaryString(self, nums: list[str]) -> str:
        return ''.join('1' if nums[i][i] == '0' else '0' for i in range(len(nums)))
