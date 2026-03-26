class Solution:
    def placeWordInCrossword(self, board: list[list[str]], word: str) -> bool:
        m, n, k = len(board), len(board[0]), len(word)
        def check(seg):
            return all(c == ' ' or c == w for c, w in zip(seg, word))
        # 横向
        for i in range(m):
            j = 0
            while j < n:
                start = j
                while j < n and board[i][j] != '#':
                    j += 1
                if j - start == k:
                    seg = [board[i][x] for x in range(start, j)]
                    if check(seg) or check(seg[::-1]):
                        return True
                j += 1
        # 纵向
        for j in range(n):
            i = 0
            while i < m:
                start = i
                while i < m and board[i][j] != '#':
                    i += 1
                if i - start == k:
                    seg = [board[x][j] for x in range(start, i)]
                    if check(seg) or check(seg[::-1]):
                        return True
                i += 1
        return False
