class Solution:
    def maximumScore(self, a: int, b: int, c: int) -> int:
        arr = sorted([a, b, c])
        if arr[0] + arr[1] <= arr[2]:
            return arr[0] + arr[1]
        return (a + b + c) // 2
