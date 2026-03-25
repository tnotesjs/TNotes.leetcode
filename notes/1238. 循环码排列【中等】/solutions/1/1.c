int* circularPermutation(int n, int start, int* returnSize) {
    *returnSize = 1 << n;
    int* res = malloc(sizeof(int) * (*returnSize));
    for (int i = 0; i < *returnSize; i++) {
        res[i] = (i ^ (i >> 1)) ^ start;
    }
    return res;
}
