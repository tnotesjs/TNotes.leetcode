int* numOfBurgers(int tomatoSlices, int cheeseSlices, int* returnSize) {
    if (tomatoSlices % 2 != 0) {
        *returnSize = 0;
        return NULL;
    }
    int jumbo = (tomatoSlices - 2 * cheeseSlices) / 2;
    int small = cheeseSlices - jumbo;
    if (jumbo < 0 || small < 0) {
        *returnSize = 0;
        return NULL;
    }
    int* res = malloc(sizeof(int) * 2);
    res[0] = jumbo;
    res[1] = small;
    *returnSize = 2;
    return res;
}
