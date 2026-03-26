class Solution:
    def maxConsecutive(self, bottom: int, top: int, special: list[int]) -> int:
        special.sort()
        res = max(special[0] - bottom, top - special[-1])
        for i in range(1, len(special)):
            res = max(res, special[i] - special[i - 1] - 1)
        return res
