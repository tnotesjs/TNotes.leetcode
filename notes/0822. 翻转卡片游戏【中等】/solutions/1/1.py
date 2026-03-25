class Solution:
    def flipgame(self, fronts: List[int], backs: List[int]) -> int:
        bad = {f for f, b in zip(fronts, backs) if f == b}
        res = float('inf')
        for x in set(fronts) | set(backs):
            if x not in bad:
                res = min(res, x)
        return 0 if res == float('inf') else res
