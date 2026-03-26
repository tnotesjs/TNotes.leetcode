class Solution:
    def maximizeSquareHoleArea(self, n: int, m: int, hBars: list[int], vBars: list[int]) -> int:
        def max_gap(bars: list[int]) -> int:
            bars.sort()
            max_len = cur = 1
            for i in range(1, len(bars)):
                cur = cur + 1 if bars[i] == bars[i - 1] + 1 else 1
                max_len = max(max_len, cur)
            return max_len + 1

        side = min(max_gap(hBars), max_gap(vBars))
        return side * side
