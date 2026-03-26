class Solution:
    def countBlackBlocks(self, m: int, n: int, coordinates: list[list[int]]) -> list[int]:
        from collections import Counter
        cnt = Counter()
        for x, y in coordinates:
            for dx in range(2):
                for dy in range(2):
                    r, c = x - dx, y - dy
                    if 0 <= r < m - 1 and 0 <= c < n - 1:
                        cnt[(r, c)] += 1
        res = [0] * 5
        for v in cnt.values():
            res[v] += 1
        res[0] = (m - 1) * (n - 1) - sum(res[1:])
        return res
