class Solution:
	def subsets(self, nums: List[int]) -> List[List[int]]:
		ans: List[List[int]] = []
		path: List[int] = []

		def backtrack(start: int) -> None:
			ans.append(path[:])

			for i in range(start, len(nums)):
				path.append(nums[i])
				backtrack(i + 1)
				path.pop()

		backtrack(0)
		return ans
