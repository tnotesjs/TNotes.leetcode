class Solution:
    def substringXorQueries(self, s: str, queries: list[list[int]]) -> list[list[int]]:
        mp: dict[int, list[int]] = {}
        n = len(s)
        for i in range(n):
            val = 0
            for j in range(i, min(i + 30, n)):
                val = val * 2 + int(s[j])
                if val not in mp:
                    mp[val] = [i, j]
                if val == 0:
                    break
        return [mp.get(f ^ sc, [-1, -1]) for f, sc in queries]
