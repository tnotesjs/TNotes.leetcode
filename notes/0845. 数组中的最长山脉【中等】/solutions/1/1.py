class Solution:
    def longestMountain(self, arr: List[int]) -> int:
        n = len(arr)
        res = 0
        i = 1
        while i < n:
            while i < n and arr[i] <= arr[i - 1]:
                i += 1
            up = 0
            while i < n and arr[i] > arr[i - 1]:
                up += 1
                i += 1
            down = 0
            while i < n and arr[i] < arr[i - 1]:
                down += 1
                i += 1
            if up > 0 and down > 0:
                res = max(res, up + down + 1)
        return res
