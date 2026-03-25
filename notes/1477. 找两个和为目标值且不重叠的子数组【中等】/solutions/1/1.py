class Solution:
    def minSumOfLengths(self, arr: list[int], target: int) -> int:
        n = len(arr)
        best = [float('inf')] * n
        res = float('inf')
        s = 0
        left = 0
        for right in range(n):
            s += arr[right]
            while s > target:
                s -= arr[left]
                left += 1
            if s == target:
                length = right - left + 1
                if left > 0 and best[left - 1] < float('inf'):
                    res = min(res, length + best[left - 1])
                best[right] = min(best[right - 1] if right > 0 else float('inf'), length)
            else:
                best[right] = best[right - 1] if right > 0 else float('inf')
        return -1 if res == float('inf') else res
