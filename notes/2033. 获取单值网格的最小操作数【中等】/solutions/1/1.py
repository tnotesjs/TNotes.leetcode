class Solution:
    def minOperations(self, grid: list[list[int]], x: int) -> int:
        arr = sorted(v for row in grid for v in row)
        if any(v % x != arr[0] % x for v in arr):
            return -1
        median = arr[len(arr) // 2]
        return sum(abs(v - median) // x for v in arr)
