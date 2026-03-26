class Solution:
    def goodSubsetofBinaryMatrix(self, grid: list[list[int]]) -> list[int]:
        mask_to_row: dict[int, int] = {}
        for i, row in enumerate(grid):
            mask = sum(v << j for j, v in enumerate(row))
            if mask == 0:
                return [i]
            if mask not in mask_to_row:
                mask_to_row[mask] = i
        for m1, r1 in mask_to_row.items():
            for m2, r2 in mask_to_row.items():
                if r1 < r2 and (m1 & m2) == 0:
                    return [r1, r2]
        return []
