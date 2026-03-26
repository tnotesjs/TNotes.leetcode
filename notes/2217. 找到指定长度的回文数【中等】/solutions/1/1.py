class Solution:
    def kthPalindrome(self, queries: list[int], intLength: int) -> list[int]:
        half = (intLength + 1) // 2
        start = 10 ** (half - 1)
        limit = 10 ** half - start
        result = []
        for q in queries:
            if q > limit:
                result.append(-1)
            else:
                s = str(start + q - 1)
                if intLength % 2 == 0:
                    result.append(int(s + s[::-1]))
                else:
                    result.append(int(s + s[-2::-1]))
        return result
