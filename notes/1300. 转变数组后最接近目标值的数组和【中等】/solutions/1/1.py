class Solution:
    def findBestValue(self, arr: list[int], target: int) -> int:
        arr.sort()
        n = len(arr)
        prefix = [0] * (n + 1)
        for i in range(n):
            prefix[i + 1] = prefix[i] + arr[i]
        ans = 0
        min_diff = target
        for value in range(arr[-1] + 1):
            idx = bisect_left(arr, value)
            s = prefix[idx] + (n - idx) * value
            diff = abs(s - target)
            if diff < min_diff:
                min_diff = diff
                ans = value
        return ans
