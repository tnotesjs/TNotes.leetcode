class Solution:
    def minimumDeletions(self, s: str) -> int:
        b_count = res = 0
        for c in s:
            if c == 'b':
                b_count += 1
            else:
                res = min(res + 1, b_count)
        return res
