class Solution:
	def combine(self, n: int, k: int) -> List[List[int]]:
		ans: List[List[int]] = []
		path: List[int] = []

		def backtrack(start: int) -> None:
			if len(path) == k:
				ans.append(path[:])
				return

			for num in range(start, n - (k - len(path)) + 2):
				path.append(num)
				backtrack(num + 1)
				path.pop()

		backtrack(1)
		return ans
