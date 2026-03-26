class Solution:
    def wateringPlants(self, plants: list[int], capacity: int) -> int:
        steps = 0
        water = capacity
        for i, p in enumerate(plants):
            if water >= p:
                water -= p
                steps += 1
            else:
                steps += 2 * i + 1
                water = capacity - p
        return steps
