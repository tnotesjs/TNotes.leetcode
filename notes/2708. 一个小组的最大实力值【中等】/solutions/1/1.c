int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

long long maxStrength(int* nums, int numsSize) {
    if (numsSize == 1) return nums[0];
    int neg[13], pos[13], negCnt = 0, posCnt = 0, zeroCnt = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] < 0) neg[negCnt++] = nums[i];
        else if (nums[i] > 0) pos[posCnt++] = nums[i];
        else zeroCnt++;
    }
    if (posCnt == 0 && negCnt <= 1) {
        return (negCnt == 1 && zeroCnt == 0) ? neg[0] : 0;
    }
    qsort(neg, negCnt, sizeof(int), cmp);
    long long result = 1;
    for (int i = 0; i < posCnt; i++) result *= pos[i];
    for (int i = 0; i + 1 < negCnt; i += 2) result *= (long long)neg[i] * neg[i + 1];
    return result;
}
