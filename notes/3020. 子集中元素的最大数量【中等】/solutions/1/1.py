class Solution:
    def maximumLength(self, nums: list[int]) -> int:
        from collections import Counter
        cnt = Counter(nums)
        ans = 1
        if 1 in cnt:
            c = cnt[1]
            ans = c if c % 2 == 1 else c - 1
        for x in cnt:
            if x == 1:
                continue
            cur = x
            length = 0
            while cur in cnt and cnt[cur] >= 2:
                length += 2
                cur = cur * cur
            if cur in cnt:
                length += 1
            else:
                length -= 1
            ans = max(ans, length)
        return ans
