from collections import Counter

class Solution:
    def minimumHammingDistance(self, source: list[int], target: list[int], allowedSwaps: list[list[int]]) -> int:
        n = len(source)
        parent = list(range(n))
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        for a, b in allowedSwaps:
            pa, pb = find(a), find(b)
            if pa != pb:
                parent[pa] = pb
        groups = {}
        for i in range(n):
            p = find(i)
            if p not in groups:
                groups[p] = []
            groups[p].append(i)
        res = 0
        for indices in groups.values():
            cnt = Counter(source[i] for i in indices)
            for i in indices:
                if cnt[target[i]] > 0:
                    cnt[target[i]] -= 1
                else:
                    res += 1
        return res
