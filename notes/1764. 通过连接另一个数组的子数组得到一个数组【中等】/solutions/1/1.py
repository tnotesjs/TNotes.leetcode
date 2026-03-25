class Solution:
    def canChoose(self, groups: list[list[int]], nums: list[int]) -> bool:
        j = 0
        for g in groups:
            found = False
            while j + len(g) <= len(nums):
                if nums[j:j + len(g)] == g:
                    j += len(g)
                    found = True
                    break
                j += 1
            if not found:
                return False
        return True
