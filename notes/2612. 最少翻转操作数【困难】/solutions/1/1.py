class Solution:
    def minReverseOperations(self, n: int, p: int, banned: list[int], k: int) -> list[int]:
        from sortedcontainers import SortedList
        ans = [-1] * n
        ans[p] = 0
        ban_set = set(banned)
        # 分奇偶两组
        sets = [SortedList(), SortedList()]
        for i in range(n):
            if i != p and i not in ban_set:
                sets[i % 2].add(i)

        queue = [p]
        while queue:
            nq = []
            for i in queue:
                lo = max(i - k + 1, k - 1 - i)
                hi = min(i + k - 1, 2 * n - k - 1 - i)
                s = sets[lo % 2]
                idx = s.bisect_left(lo)
                while idx < len(s) and s[idx] <= hi:
                    j = s[idx]
                    ans[j] = ans[i] + 1
                    nq.append(j)
                    s.remove(j)
            queue = nq
        return ans
