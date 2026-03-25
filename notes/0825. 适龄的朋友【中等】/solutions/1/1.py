class Solution:
    def numFriendRequests(self, ages: List[int]) -> int:
        cnt = [0] * 121
        for a in ages:
            cnt[a] += 1
        res = 0
        for a in range(1, 121):
            for b in range(1, 121):
                if b <= 0.5 * a + 7: continue
                if b > a: continue
                res += cnt[a] * (cnt[b] - (1 if a == b else 0))
        return res
