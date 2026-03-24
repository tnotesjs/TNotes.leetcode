class Solution:
    def pyramidTransition(self, bottom: str, allowed: List[str]) -> bool:
        from collections import defaultdict
        mp = defaultdict(list)
        for s in allowed:
            mp[s[:2]].append(s[2])
        def build(row):
            if len(row) == 1:
                return True
            def dfs(i, cur):
                if i == len(row) - 1:
                    return build(cur)
                for c in mp[row[i] + row[i + 1]]:
                    if dfs(i + 1, cur + c):
                        return True
                return False
            return dfs(0, '')
        return build(bottom)
