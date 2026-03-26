class Solution:
    def findAllRecipes(self, recipes: List[str], ingredients: List[List[str]], supplies: List[str]) -> List[str]:
        supply_set = set(supplies)
        res = []
        made = [False] * len(recipes)
        changed = True
        while changed:
            changed = False
            for i in range(len(recipes)):
                if made[i]:
                    continue
                if all(ing in supply_set for ing in ingredients[i]):
                    supply_set.add(recipes[i])
                    res.append(recipes[i])
                    made[i] = True
                    changed = True
        return res
