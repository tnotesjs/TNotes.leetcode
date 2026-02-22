class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
        boxTypes.sort(key=lambda x: -x[1])
        remaining = truckSize
        total = 0
        for count, per_box in boxTypes:
            if remaining == 0:
                break
            take = min(count, remaining)
            total += take * per_box
            remaining -= take
        return total
