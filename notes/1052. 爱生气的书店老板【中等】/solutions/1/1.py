class Solution:
    def maxSatisfied(self, customers: list[int], grumpy: list[int], minutes: int) -> int:
        n = len(customers)
        base = sum(c for c, g in zip(customers, grumpy) if g == 0)
        extra = sum(customers[i] for i in range(minutes) if grumpy[i] == 1)
        max_extra = extra
        for i in range(minutes, n):
            if grumpy[i] == 1:
                extra += customers[i]
            if grumpy[i - minutes] == 1:
                extra -= customers[i - minutes]
            max_extra = max(max_extra, extra)
        return base + max_extra
