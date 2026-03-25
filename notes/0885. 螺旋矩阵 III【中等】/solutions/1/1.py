class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        res = [[rStart, cStart]]
        dr, dc = [0, 1, 0, -1], [1, 0, -1, 0]
        d, steps = 0, 1
        r, c = rStart, cStart
        while len(res) < rows * cols:
            for _ in range(2):
                for _ in range(steps):
                    r += dr[d]; c += dc[d]
                    if 0 <= r < rows and 0 <= c < cols:
                        res.append([r, c])
                d = (d + 1) % 4
            steps += 1
        return res
