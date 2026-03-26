class Solution:
    def countServers(self, n: int, logs: list[list[int]], x: int, queries: list[int]) -> list[int]:
        from collections import defaultdict
        logs.sort(key=lambda l: l[1])
        idx = sorted(range(len(queries)), key=lambda i: queries[i])
        res = [0] * len(queries)
        cnt = defaultdict(int)
        active = 0
        left = right = 0
        for i in idx:
            qr = queries[i]
            ql = qr - x
            while right < len(logs) and logs[right][1] <= qr:
                sid = logs[right][0]
                if cnt[sid] == 0:
                    active += 1
                cnt[sid] += 1
                right += 1
            while left < len(logs) and logs[left][1] < ql:
                sid = logs[left][0]
                cnt[sid] -= 1
                if cnt[sid] == 0:
                    active -= 1
                left += 1
            res[i] = n - active
        return res
