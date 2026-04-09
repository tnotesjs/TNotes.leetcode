class Solution:
	def minCut(self, s: str) -> int:
		n = len(s)
		cuts = list(range(n))

		def expand(left: int, right: int) -> None:
			while left >= 0 and right < n and s[left] == s[right]:
				new_cut = 0 if left == 0 else cuts[left - 1] + 1
				if new_cut < cuts[right]:
					cuts[right] = new_cut
				left -= 1
				right += 1

		for center in range(n):
			expand(center, center)
			expand(center, center + 1)

		return cuts[-1]
