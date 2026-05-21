class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        numbers = [str(i) for i in range(1, n + 1)]
        factorial = [1] * (n + 1)

        for i in range(1, n + 1):
            factorial[i] = factorial[i - 1] * i

        rank = k - 1
        result = []

        for remaining in range(n, 0, -1):
            group_size = factorial[remaining - 1]
            index = rank // group_size

            result.append(numbers.pop(index))
            rank %= group_size

        return "".join(result)
