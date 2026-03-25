class Solution:
    def closestDivisors(self, num: int) -> list[int]:
        def find(n: int) -> list[int]:
            for i in range(int(n**0.5), 0, -1):
                if n % i == 0:
                    return [i, n // i]
            return [1, n]

        a, b = find(num + 1), find(num + 2)
        return a if abs(a[0] - a[1]) <= abs(b[0] - b[1]) else b
