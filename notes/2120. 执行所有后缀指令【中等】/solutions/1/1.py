class Solution:
    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:
        m = len(s)
        res = []
        dirs = {'U': (-1, 0), 'D': (1, 0), 'L': (0, -1), 'R': (0, 1)}
        for i in range(m):
            r, c = startPos
            count = 0
            for j in range(i, m):
                dr, dc = dirs[s[j]]
                r += dr
                c += dc
                if r < 0 or r >= n or c < 0 or c >= n:
                    break
                count += 1
            res.append(count)
        return res
