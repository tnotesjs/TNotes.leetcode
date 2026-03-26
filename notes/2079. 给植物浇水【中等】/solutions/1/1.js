/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let steps = 0,
    water = capacity
  for (let i = 0; i < plants.length; i++) {
    if (water >= plants[i]) {
      water -= plants[i]
      steps++
    } else {
      // 回去装水再走回来
      steps += 2 * i + 1
      water = capacity - plants[i]
    }
  }
  return steps
}
