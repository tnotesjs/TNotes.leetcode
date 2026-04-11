class Solution:
	def uniquePathsIII(self, grid: List[List[int]]) -> int:
		m, n = len(grid), len(grid[0])
		start_x = 0
		start_y = 0
		empty_count = 0

		for i in range(m):
			for j in range(n):
				if grid[i][j] == 0:
					empty_count += 1
				elif grid[i][j] == 1:
					start_x = i
					start_y = j

		directions = ((0, 1), (0, -1), (1, 0), (-1, 0))

		def dfs(x: int, y: int, remaining: int) -> int:
			if grid[x][y] == 2:
				return 1 if remaining == 0 else 0

			temp = grid[x][y]
			grid[x][y] = -1
			total = 0

			for dx, dy in directions:
				next_x = x + dx
				next_y = y + dy

				if 0 <= next_x < m and 0 <= next_y < n and grid[next_x][next_y] != -1:
					next_remaining = remaining - 1 if grid[next_x][next_y] == 0 else remaining
					total += dfs(next_x, next_y, next_remaining)

			grid[x][y] = temp
			return total

		return dfs(start_x, start_y, empty_count)
