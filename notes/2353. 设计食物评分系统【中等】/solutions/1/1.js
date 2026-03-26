var FoodRatings = function (foods, cuisines, ratings) {
  this.foodToCuisine = new Map()
  this.foodToRating = new Map()
  this.cuisineToFoods = new Map()
  for (let i = 0; i < foods.length; i++) {
    this.foodToCuisine.set(foods[i], cuisines[i])
    this.foodToRating.set(foods[i], ratings[i])
    if (!this.cuisineToFoods.has(cuisines[i])) {
      this.cuisineToFoods.set(cuisines[i], [])
    }
    this.cuisineToFoods.get(cuisines[i]).push(foods[i])
  }
}

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  this.foodToRating.set(food, newRating)
}

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  const foods = this.cuisineToFoods.get(cuisine)
  let bestFood = '',
    bestRating = -1
  for (const food of foods) {
    const rating = this.foodToRating.get(food)
    if (rating > bestRating || (rating === bestRating && food < bestFood)) {
      bestRating = rating
      bestFood = food
    }
  }
  return bestFood
}
