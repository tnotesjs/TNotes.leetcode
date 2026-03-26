class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        surplus, deficit = [], []
        for i in range(3):
            for j in range(3):
                if grid[i][j] > 1:
                    surplus.extend([(i, j)] * (grid[i][j] - 1))
                elif grid[i][j] == 0:
                    deficit.append((i, j))
        if not deficit:
            return 0
        ans = float('inf')
        for perm in permutations(deficit):
            cost = sum(abs(s[0]-d[0]) + abs(s[1]-d[1]) for s, d in zip(surplus, perm))
            ans = min(ans, cost)
        return ans
