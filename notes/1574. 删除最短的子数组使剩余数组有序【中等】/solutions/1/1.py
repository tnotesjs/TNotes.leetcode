class Solution:
    def findLengthOfShortestSubarray(self, arr: list[int]) -> int:
        n = len(arr)
        right = n - 1
        while right > 0 and arr[right - 1] <= arr[right]:
            right -= 1
        if right == 0:
            return 0
        res = right
        for left in range(n):
            if left > 0 and arr[left] < arr[left - 1]:
                break
            while right < n and arr[right] < arr[left]:
                right += 1
            res = min(res, right - left - 1)
        return res
