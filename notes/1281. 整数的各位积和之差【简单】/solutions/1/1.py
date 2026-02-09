class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        prod = 1
        total = 0

        while n > 0:
            digit = n % 10
            prod *= digit
            total += digit
            n //= 10

        return prod - total
