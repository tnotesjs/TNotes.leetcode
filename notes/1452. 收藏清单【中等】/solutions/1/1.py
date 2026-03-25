class Solution:
    def peopleIndexes(self, favoriteCompanies: list[list[str]]) -> list[int]:
        sets = [set(c) for c in favoriteCompanies]
        res: list[int] = []
        for i, si in enumerate(sets):
            if not any(j != i and si < sj for j, sj in enumerate(sets)):
                res.append(i)
        return res
