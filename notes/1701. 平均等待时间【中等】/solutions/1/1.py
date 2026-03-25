class Solution:
    def averageWaitingTime(self, customers: list[list[int]]) -> float:
        cur = 0
        total = 0
        for arrival, time in customers:
            cur = max(cur, arrival) + time
            total += cur - arrival
        return total / len(customers)
