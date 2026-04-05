class Solution:
	def totalNQueens(self, n: int) -> int:
		limit = (1 << n) - 1
		answer = 0

		def dfs(row: int, cols: int, diag1: int, diag2: int) -> None:
			nonlocal answer
			if row == n:
				answer += 1
				return

			available = limit & ~(cols | diag1 | diag2)
			while available:
				bit = available & -available
				available ^= bit
				dfs(row + 1, cols | bit, ((diag1 | bit) << 1) & limit, (diag2 | bit) >> 1)

		dfs(0, 0, 0, 0)
		return answer
