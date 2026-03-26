typedef struct {
    const char* str;
    int idx;
} Pair2343;

int cmp2343(const void* a, const void* b) {
    Pair2343* pa = (Pair2343*)a;
    Pair2343* pb = (Pair2343*)b;
    int c = strcmp(pa->str, pb->str);
    if (c != 0) return c;
    return pa->idx - pb->idx;
}

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* smallestTrimmedNumbers(char** nums, int numsSize, int** queries, int queriesSize, int* queriesColSize, int* returnSize) {
    int* res = (int*)malloc(queriesSize * sizeof(int));
    *returnSize = queriesSize;
    int len = strlen(nums[0]);
    Pair2343* arr = (Pair2343*)malloc(numsSize * sizeof(Pair2343));
    for (int q = 0; q < queriesSize; q++) {
        int k = queries[q][0], trim = queries[q][1];
        for (int i = 0; i < numsSize; i++) {
            arr[i].str = nums[i] + (len - trim);
            arr[i].idx = i;
        }
        qsort(arr, numsSize, sizeof(Pair2343), cmp2343);
        res[q] = arr[k - 1].idx;
    }
    free(arr);
    return res;
}
