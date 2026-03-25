class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: list[list[int]]) -> int:
        rows: dict[int, int] = {}
        for row, col in reservedSeats:
            rows[row] = rows.get(row, 0) | (1 << col)

        L = 0b111100       # seats 2-5
        M = 0b11110000     # seats 4-7
        R = 0b1111000000   # seats 6-9

        res = (n - len(rows)) * 2
        for mask in rows.values():
            if not (mask & L) and not (mask & R):
                res += 2
            elif not (mask & L) or not (mask & M) or not (mask & R):
                res += 1
        return res
