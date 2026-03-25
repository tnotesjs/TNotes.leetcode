/**
 * // This is the definition for customFunction API.
 * // int f(int, int);
 */
int** findSolution(int (*customFunction)(int, int), int z, int* returnSize, int** returnColumnSizes) {
    int** res = malloc(sizeof(int*) * 1000);
    *returnSize = 0;
    int x = 1, y = 1000;
    while (x <= 1000 && y >= 1) {
        int val = customFunction(x, y);
        if (val == z) {
            res[*returnSize] = malloc(sizeof(int) * 2);
            res[*returnSize][0] = x;
            res[*returnSize][1] = y;
            (*returnSize)++;
            x++;
            y--;
        } else if (val < z) {
            x++;
        } else {
            y--;
        }
    }
    *returnColumnSizes = malloc(sizeof(int) * (*returnSize));
    for (int i = 0; i < *returnSize; i++) (*returnColumnSizes)[i] = 2;
    return res;
}
