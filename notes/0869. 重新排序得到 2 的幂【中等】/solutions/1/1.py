class Solution:
    def reorderedPowerOf2(self, n: int) -> bool:
        target = sorted(str(n))
        return any(sorted(str(1 << i)) == target for i in range(31))
