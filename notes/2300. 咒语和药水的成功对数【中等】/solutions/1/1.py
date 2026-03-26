class Solution:
    def successfulPairs(self, spells: list[int], potions: list[int], success: int) -> list[int]:
        from bisect import bisect_left
        potions.sort()
        m = len(potions)
        res = []
        for s in spells:
            # 找到最小的 potion 使得 s * potion >= success
            need = (success + s - 1) // s  # ceil(success / s)
            idx = bisect_left(potions, need)
            res.append(m - idx)
        return res
