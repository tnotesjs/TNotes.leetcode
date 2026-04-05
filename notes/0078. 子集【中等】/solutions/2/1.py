class Solution:
	def subsets(self, nums: List[int]) -> List[List[int]]:
		path: List[int] = []
		ans: List[List[int]] = []

		def dfs(depth: int) -> None:
			if depth == len(nums):
				ans.append(path[:])
				return

			path.append(nums[depth])
			dfs(depth + 1)
			path.pop()
			dfs(depth + 1)

		dfs(0)
		return ans
