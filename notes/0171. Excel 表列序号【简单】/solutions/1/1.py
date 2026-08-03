class Solution:
    def titleToNumber(self, columnTitle: str) -> int:
        result = 0
        for ch in columnTitle:
            # A=1 ... Z=26；从左到右累乘 26
            result = result * 26 + (ord(ch) - ord('A') + 1)
        return result
