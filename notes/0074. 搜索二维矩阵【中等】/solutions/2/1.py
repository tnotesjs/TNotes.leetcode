class Solution:
    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])

        # 第一次二分：找到 target 可能所在的行
        top, bottom = 0, m - 1
        row = -1
        while top <= bottom:
            mid = (top + bottom) // 2
            if matrix[mid][0] <= target <= matrix[mid][n - 1]:
                row = mid
                break
            elif target > matrix[mid][n - 1]:
                top = mid + 1
            else:
                bottom = mid - 1

        if row == -1:
            return False

        # 第二次二分：在该行内查找 target
        left, right = 0, n - 1
        while left <= right:
            mid = (left + right) // 2
            if matrix[row][mid] == target:
                return True
            elif matrix[row][mid] < target:
                left = mid + 1
            else:
                right = mid - 1

        return False
