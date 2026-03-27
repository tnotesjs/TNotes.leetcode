class Solution:
    def countOfPairs(self, n: int, x: int, y: int) -> list[int]:
        result = [0] * n
        for i in range(1, n + 1):
            for j in range(i + 1, n + 1):
                direct = j - i
                via_xy = abs(i - x) + 1 + abs(j - y)
                via_yx = abs(i - y) + 1 + abs(j - x)
                dist = min(direct, via_xy, via_yx)
                result[dist - 1] += 2
        return result
