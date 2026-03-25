class Solution:
    def maxArea(self, h: int, w: int, horizontalCuts: list[int], verticalCuts: list[int]) -> int:
        MOD = 10 ** 9 + 7
        horizontalCuts.sort()
        verticalCuts.sort()
        hc = [0] + horizontalCuts + [h]
        vc = [0] + verticalCuts + [w]
        max_h = max(hc[i] - hc[i - 1] for i in range(1, len(hc)))
        max_w = max(vc[i] - vc[i - 1] for i in range(1, len(vc)))
        return max_h * max_w % MOD
