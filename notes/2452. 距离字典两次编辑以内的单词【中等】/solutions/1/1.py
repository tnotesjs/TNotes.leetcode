class Solution:
    def twoEditWords(self, queries: list[str], dictionary: list[str]) -> list[str]:
        res = []
        for q in queries:
            for d in dictionary:
                if len(q) == len(d) and sum(a != b for a, b in zip(q, d)) <= 2:
                    res.append(q)
                    break
        return res
