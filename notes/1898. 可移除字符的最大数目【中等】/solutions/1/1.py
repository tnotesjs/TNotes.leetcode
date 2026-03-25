class Solution:
    def maximumRemovals(self, s: str, p: str, removable: list[int]) -> int:
        def check(k):
            removed = set(removable[:k])
            j = 0
            for i in range(len(s)):
                if j == len(p):
                    break
                if i not in removed and s[i] == p[j]:
                    j += 1
            return j == len(p)

        lo, hi = 0, len(removable)
        while lo < hi:
            mid = (lo + hi + 1) // 2
            if check(mid):
                lo = mid
            else:
                hi = mid - 1
        return lo
