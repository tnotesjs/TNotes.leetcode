/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const supplySet = new Set(supplies)
  const res = []
  let changed = true
  const made = new Array(recipes.length).fill(false)
  while (changed) {
    changed = false
    for (let i = 0; i < recipes.length; i++) {
      if (made[i]) continue
      if (ingredients[i].every((ing) => supplySet.has(ing))) {
        supplySet.add(recipes[i])
        res.push(recipes[i])
        made[i] = true
        changed = true
      }
    }
  }
  return res
}
