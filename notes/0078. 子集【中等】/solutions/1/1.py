class Solution:
	def subsets(self, nums: List[int]) -> List[List[int]]:
		ans: List[List[int]] = [[]]

		for num in nums:
			temps = [subset[:] for subset in ans]
			for subset in temps:
				subset.append(num)
			ans.extend(temps)

		return ans
