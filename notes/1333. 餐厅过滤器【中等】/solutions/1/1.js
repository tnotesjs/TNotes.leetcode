/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (
  restaurants,
  veganFriendly,
  maxPrice,
  maxDistance,
) {
  return restaurants
    .filter(
      (r) =>
        (!veganFriendly || r[2] === 1) &&
        r[3] <= maxPrice &&
        r[4] <= maxDistance,
    )
    .sort((a, b) => b[1] - a[1] || b[0] - a[0])
    .map((r) => r[0])
}
