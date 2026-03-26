class Solution:
    def cycleLengthQueries(self, n: int, queries: list[list[int]]) -> list[int]:
        ans = []
        for a, b in queries:
            length = 1
            while a != b:
                if a > b:
                    a >>= 1
                else:
                    b >>= 1
                length += 1
            ans.append(length)
        return ans
