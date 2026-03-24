int cmp(const void* a, const void* b) {
    char ab[24], ba[24];
    sprintf(ab, "%s%s", *(char**)b, *(char**)a);
    sprintf(ba, "%s%s", *(char**)a, *(char**)b);
    return strcmp(ab, ba);
}

char* largestNumber(int* nums, int numsSize) {
    char** strs = (char**)malloc(sizeof(char*) * numsSize);
    for (int i = 0; i < numsSize; i++) {
        strs[i] = (char*)malloc(12);
        sprintf(strs[i], "%d", nums[i]);
    }
    qsort(strs, numsSize, sizeof(char*), cmp);
    if (strs[0][0] == '0') {
        for (int i = 0; i < numsSize; i++) free(strs[i]);
        free(strs);
        char* res = (char*)malloc(2);
        res[0] = '0'; res[1] = '\0';
        return res;
    }
    int totalLen = 0;
    for (int i = 0; i < numsSize; i++) totalLen += strlen(strs[i]);
    char* res = (char*)malloc(totalLen + 1);
    res[0] = '\0';
    for (int i = 0; i < numsSize; i++) {
        strcat(res, strs[i]);
        free(strs[i]);
    }
    free(strs);
    return res;
}
