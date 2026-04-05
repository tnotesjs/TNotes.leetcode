class Solution:
	def permute(self, nums: List[int]) -> List[List[int]]:
		ans: List[List[int]] = []
		path: List[int] = []
		used = [False] * len(nums)

		def backtrack() -> None:
			if len(path) == len(nums):
				ans.append(path[:])
				return

			for i, num in enumerate(nums):
				if used[i]:
					continue

				path.append(num)
				used[i] = True
				backtrack()
				path.pop()
				used[i] = False

		backtrack()
		return ans
