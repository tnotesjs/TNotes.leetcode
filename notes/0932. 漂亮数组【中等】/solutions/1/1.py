class Solution:
    def beautifulArray(self, n: int) -> list[int]:
        if n == 1:
            return [1]

        odd = self.beautifulArray((n + 1) // 2)
        even = self.beautifulArray(n // 2)

        return [2 * x - 1 for x in odd] + [2 * x for x in even]
