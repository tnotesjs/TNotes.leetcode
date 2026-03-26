class Solution:
    def maximumWhiteTiles(self, tiles: list[list[int]], carpetLen: int) -> int:
        tiles.sort()
        n = len(tiles)
        res = cover = j = 0
        for i in range(n):
            while j < n and tiles[j][1] < tiles[i][0] + carpetLen:
                cover += tiles[j][1] - tiles[j][0] + 1
                j += 1
            if j < n:
                partial = max(0, tiles[i][0] + carpetLen - tiles[j][0])
                res = max(res, cover + partial)
            else:
                res = max(res, cover)
            cover -= tiles[i][1] - tiles[i][0] + 1
        return res
