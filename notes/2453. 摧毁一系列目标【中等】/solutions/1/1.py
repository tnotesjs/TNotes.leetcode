class Solution:
    def destroyTargets(self, nums: list[int], space: int) -> int:
        from collections import Counter
        cnt = Counter(x % space for x in nums)
        max_count = max(cnt.values())
        return min(x for x in nums if cnt[x % space] == max_count)
