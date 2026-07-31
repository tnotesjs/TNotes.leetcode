class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = []
        while columnNumber > 0:
            # 1-indexed → 0-indexed，才能按普通 26 进制取模
            columnNumber -= 1
            result.append(chr(columnNumber % 26 + ord('A')))
            columnNumber //= 26
        return ''.join(reversed(result))
