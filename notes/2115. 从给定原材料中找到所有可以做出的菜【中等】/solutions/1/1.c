/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** findAllRecipes(char** recipes, int recipesSize, char*** ingredients, int ingredientsSize, int* ingredientsColSize, char** supplies, int suppliesSize, int* returnSize) {
    char** res = (char**)malloc(sizeof(char*) * recipesSize);
    *returnSize = 0;
    // 使用简单的集合：supplies + 已制作的菜
    int totalCap = suppliesSize + recipesSize;
    char** supplySet = (char**)malloc(sizeof(char*) * (totalCap + recipesSize));
    int supplyCount = suppliesSize;
    for (int i = 0; i < suppliesSize; i++) supplySet[i] = supplies[i];

    int* made = (int*)calloc(recipesSize, sizeof(int));
    int changed = 1;
    while (changed) {
        changed = 0;
        for (int i = 0; i < recipesSize; i++) {
            if (made[i]) continue;
            int canMake = 1;
            for (int j = 0; j < ingredientsColSize[i]; j++) {
                int found = 0;
                for (int k = 0; k < supplyCount; k++) {
                    if (strcmp(ingredients[i][j], supplySet[k]) == 0) { found = 1; break; }
                }
                if (!found) { canMake = 0; break; }
            }
            if (canMake) {
                supplySet[supplyCount++] = recipes[i];
                res[(*returnSize)++] = recipes[i];
                made[i] = 1;
                changed = 1;
            }
        }
    }
    free(made);
    free(supplySet);
    return res;
}
