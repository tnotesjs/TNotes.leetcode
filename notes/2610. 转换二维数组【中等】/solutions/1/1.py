class Solution:
    def findMatrix(self, nums: list[int]) -> list[list[int]]:
        cnt: dict[int, int] = {}
        ans: list[list[int]] = []
        for x in nums:
            c = cnt.get(x, 0)
            if c >= len(ans):
                ans.append([])
            ans[c].append(x)
            cnt[x] = c + 1
        return ans
