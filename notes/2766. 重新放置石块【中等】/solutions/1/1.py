class Solution:
    def relocateMarbles(self, nums: list[int], moveFrom: list[int], moveTo: list[int]) -> list[int]:
        s = set(nums)
        for f, t in zip(moveFrom, moveTo):
            s.discard(f)
            s.add(t)
        return sorted(s)
