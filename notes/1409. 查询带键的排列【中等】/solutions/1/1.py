class Solution:
    def processQueries(self, queries: list[int], m: int) -> list[int]:
        P = list(range(1, m + 1))
        res: list[int] = []
        for q in queries:
            idx = P.index(q)
            res.append(idx)
            P.pop(idx)
            P.insert(0, q)
        return res
