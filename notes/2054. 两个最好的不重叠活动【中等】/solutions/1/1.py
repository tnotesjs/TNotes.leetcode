class Solution:
    def maxTwoEvents(self, events: list[list[int]]) -> int:
        from bisect import bisect_right
        events.sort(key=lambda x: x[1])
        n = len(events)
        max_val = [0] * n
        max_val[0] = events[0][2]
        for i in range(1, n):
            max_val[i] = max(max_val[i - 1], events[i][2])
        ends = [e[1] for e in events]
        ans = max_val[-1]
        for i in range(n):
            pos = bisect_right(ends, events[i][0] - 1, 0, i) - 1
            cur = events[i][2] + (max_val[pos] if pos >= 0 else 0)
            ans = max(ans, cur)
        return ans
