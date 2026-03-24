class Solution:
    def maxChunksToSorted(self, arr: List[int]) -> int:
        res = mx = 0
        for i, v in enumerate(arr):
            mx = max(mx, v)
            if mx == i:
                res += 1
        return res
