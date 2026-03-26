from sortedcontainers import SortedList

class FoodRatings:
    def __init__(self, foods: list[str], cuisines: list[str], ratings: list[int]):
        self.food_to_cuisine = {}
        self.food_to_rating = {}
        self.cuisine_to_foods = {}
        for f, c, r in zip(foods, cuisines, ratings):
            self.food_to_cuisine[f] = c
            self.food_to_rating[f] = r
            if c not in self.cuisine_to_foods:
                self.cuisine_to_foods[c] = SortedList()
            self.cuisine_to_foods[c].add((-r, f))

    def changeRating(self, food: str, newRating: int) -> None:
        c = self.food_to_cuisine[food]
        old_rating = self.food_to_rating[food]
        self.cuisine_to_foods[c].remove((-old_rating, food))
        self.food_to_rating[food] = newRating
        self.cuisine_to_foods[c].add((-newRating, food))

    def highestRated(self, cuisine: str) -> str:
        return self.cuisine_to_foods[cuisine][0][1]
