class Solution:
    def countFairPairs(self, nums: list[int], lower: int, upper: int) -> int:
        nums.sort()
        n = len(nums)
        def count_less(target: int) -> int:
            cnt = 0
            lo, hi = 0, n - 1
            while lo < hi:
                if nums[lo] + nums[hi] < target:
                    cnt += hi - lo
                    lo += 1
                else:
                    hi -= 1
            return cnt
        return count_less(upper + 1) - count_less(lower)
