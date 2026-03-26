class Solution:
    def minimumPartition(self, s: str, k: int) -> int:
        count, cur = 1, 0
        for c in s:
            d = int(c)
            if d > k:
                return -1
            cur = cur * 10 + d
            if cur > k:
                count += 1
                cur = d
        return count
