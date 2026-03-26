class Solution:
    def mostPopularCreator(self, creators: list[str], ids: list[str], views: list[int]) -> list[list[str]]:
        from collections import defaultdict
        total = defaultdict(int)
        best = {}
        for i, c in enumerate(creators):
            total[c] += views[i]
            if c not in best or views[i] > views[best[c]] or (views[i] == views[best[c]] and ids[i] < ids[best[c]]):
                best[c] = i
        max_total = max(total.values())
        return [[c, ids[best[c]]] for c in total if total[c] == max_total]
