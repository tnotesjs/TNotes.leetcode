class Solution:
    def filterRestaurants(self, restaurants: list[list[int]], veganFriendly: int, maxPrice: int, maxDistance: int) -> list[int]:
        filtered = [
            r for r in restaurants
            if (not veganFriendly or r[2] == 1) and r[3] <= maxPrice and r[4] <= maxDistance
        ]
        filtered.sort(key=lambda r: (-r[1], -r[0]))
        return [r[0] for r in filtered]
