class Solution:
    def minDominoRotations(self, tops: list[int], bottoms: list[int]) -> int:
        def check(target: int) -> int:
            rot_top = rot_bot = 0
            for i in range(len(tops)):
                if tops[i] != target and bottoms[i] != target:
                    return float('inf')
                if tops[i] != target:
                    rot_top += 1
                if bottoms[i] != target:
                    rot_bot += 1
            return min(rot_top, rot_bot)

        res = min(check(tops[0]), check(bottoms[0]))
        return -1 if res == float('inf') else res
