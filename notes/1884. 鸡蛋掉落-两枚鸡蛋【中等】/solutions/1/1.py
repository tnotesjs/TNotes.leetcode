class Solution:
    def twoEggDrop(self, n: int) -> int:
        k = 1
        while k * (k + 1) // 2 < n:
            k += 1
        return k
