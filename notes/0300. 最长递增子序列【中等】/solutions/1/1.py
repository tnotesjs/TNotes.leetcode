class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        tails = []
        for num in nums:
            lo, hi = 0, len(tails)
            while lo < hi:
                mid = (lo + hi) // 2
                if tails[mid] < num:
                    lo = mid + 1
                else:
                    hi = mid
            if lo == len(tails):
                tails.append(num)
            else:
                tails[lo] = num
        return len(tails)
