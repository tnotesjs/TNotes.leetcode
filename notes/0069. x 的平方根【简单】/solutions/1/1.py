class Solution:
    def mySqrt(self, x: int) -> int:
        if x == 0:
            return 0

        left, right, result = 1, x, 0
        while left <= right:
            mid = (left + right) // 2
            if mid <= x // mid:
                result = mid
                left = mid + 1
            else:
                right = mid - 1
        return result
