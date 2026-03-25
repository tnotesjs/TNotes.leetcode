class Solution:
    def findPeakGrid(self, mat: list[list[int]]) -> list[int]:
        lo, hi = 0, len(mat) - 1
        while lo < hi:
            mid = (lo + hi) // 2
            max_col = mat[mid].index(max(mat[mid]))
            if mat[mid][max_col] < mat[mid + 1][max_col]:
                lo = mid + 1
            else:
                hi = mid
        return [lo, mat[lo].index(max(mat[lo]))]
