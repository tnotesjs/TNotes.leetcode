class Solution:
    def maximizeSquareArea(self, m: int, n: int, hFences: list[int], vFences: list[int]) -> int:
        MOD = 10 ** 9 + 7
        def get_gaps(fences: list[int], boundary: int) -> set[int]:
            pts = sorted([1] + fences + [boundary])
            return {pts[j] - pts[i] for i in range(len(pts)) for j in range(i + 1, len(pts))}
        common = get_gaps(hFences, m) & get_gaps(vFences, n)
        if not common:
            return -1
        return max(common) ** 2 % MOD
