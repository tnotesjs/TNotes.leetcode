class Solution:
    def smallestStringWithSwaps(self, s: str, pairs: list[list[int]]) -> str:
        n = len(s)
        parent = list(range(n))

        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x

        for a, b in pairs:
            ra, rb = find(a), find(b)
            if ra != rb:
                parent[ra] = rb

        from collections import defaultdict
        groups = defaultdict(list)
        for i in range(n):
            groups[find(i)].append(i)

        res = list(s)
        for indices in groups.values():
            chars = sorted(s[i] for i in indices)
            for i, idx in enumerate(sorted(indices)):
                res[idx] = chars[i]
        return ''.join(res)
