class Solution:
    def findSmallestInteger(self, nums: list[int], value: int) -> int:
        cnt: dict[int, int] = {}
        for x in nums:
            r = x % value
            cnt[r] = cnt.get(r, 0) + 1
        mex = 0
        while True:
            r = mex % value
            if cnt.get(r, 0) == 0:
                return mex
            cnt[r] -= 1
            mex += 1
