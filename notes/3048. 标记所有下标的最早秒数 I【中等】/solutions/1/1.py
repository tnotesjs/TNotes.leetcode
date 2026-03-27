class Solution:
    def earliestSecondToMarkIndices(self, nums: list[int], changeIndices: list[int]) -> int:
        n, m = len(nums), len(changeIndices)
        def check(t):
            last_occur = {}
            for s in range(t):
                last_occur[changeIndices[s]] = s
            if len(last_occur) < n:
                return False
            events = sorted((last_occur[i+1], nums[i]) for i in range(n))
            free_slots = 0
            idx = 0
            for s in range(t):
                if idx < n and events[idx][0] == s:
                    if free_slots < events[idx][1]:
                        return False
                    free_slots -= events[idx][1]
                    idx += 1
                else:
                    free_slots += 1
            return idx == n
        lo, hi, ans = 1, m, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if check(mid):
                ans = mid
                hi = mid - 1
            else:
                lo = mid + 1
        return ans
