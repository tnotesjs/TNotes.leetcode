class Solution:
    def corpFlightBookings(self, bookings: list[list[int]], n: int) -> list[int]:
        diff = [0] * (n + 2)
        for first, last, seats in bookings:
            diff[first] += seats
            diff[last + 1] -= seats
        res = [0] * n
        res[0] = diff[1]
        for i in range(1, n):
            res[i] = res[i - 1] + diff[i + 1]
        return res
