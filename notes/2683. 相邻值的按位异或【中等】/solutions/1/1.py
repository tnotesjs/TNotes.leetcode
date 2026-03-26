class Solution:
    def doesValidArrayExist(self, derived: list[int]) -> bool:
        xor = 0
        for d in derived:
            xor ^= d
        return xor == 0
