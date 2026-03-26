class Solution:
    def countPalindromePaths(self, parent: list[int], s: str) -> int:
        n = len(parent)
        children = [[] for _ in range(n)]
        for i in range(1, n):
            children[parent[i]].append(i)
        cnt = {0: 1}
        ans = 0
        mask = [0] * n
        stack = [0]
        while stack:
            u = stack.pop()
            ans += cnt.get(mask[u], 0)
            for b in range(26):
                ans += cnt.get(mask[u] ^ (1 << b), 0)
            cnt[mask[u]] = cnt.get(mask[u], 0) + 1
            for v in children[u]:
                mask[v] = mask[u] ^ (1 << (ord(s[v]) - 97))
                stack.append(v)
        return ans
