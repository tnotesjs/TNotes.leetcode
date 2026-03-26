class Solution:
    def latestTimeCatchTheBus(self, buses: list[int], passengers: list[int], capacity: int) -> int:
        buses.sort()
        passengers.sort()
        pass_set = set(passengers)
        j = 0
        space = 0
        for bus in buses:
            space = capacity
            while space > 0 and j < len(passengers) and passengers[j] <= bus:
                j += 1
                space -= 1
        res = buses[-1] if space > 0 else passengers[j - 1]
        while res in pass_set:
            res -= 1
        return res
