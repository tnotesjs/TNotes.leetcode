class Solution:
    def numOfSubarrays(self, arr: list[int], k: int, threshold: int) -> int:
        target = k * threshold
        s = count = 0
        for i in range(len(arr)):
            s += arr[i]
            if i >= k:
                s -= arr[i - k]
            if i >= k - 1 and s >= target:
                count += 1
        return count
