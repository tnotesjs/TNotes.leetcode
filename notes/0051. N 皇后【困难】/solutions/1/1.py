class Solution:
	def solveNQueens(self, n: int) -> List[List[str]]:
		res: List[List[str]] = []
		queens = [0] * n
		limit = (1 << n) - 1

		def build_board() -> List[str]:
			return ['.' * col + 'Q' + '.' * (n - col - 1) for col in queens]

		def dfs(row: int, cols: int, diag1: int, diag2: int) -> None:
			if row == n:
				res.append(build_board())
				return

			available = limit & ~(cols | diag1 | diag2)
			while available:
				bit = available & -available
				available ^= bit
				queens[row] = bit.bit_length() - 1
				dfs(row + 1, cols | bit, ((diag1 | bit) << 1) & limit, (diag2 | bit) >> 1)

		dfs(0, 0, 0, 0)
		return res
