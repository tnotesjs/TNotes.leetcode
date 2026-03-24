char* optimalDivision(int* nums, int numsSize) {
    char* res = (char*)malloc(1024);
    int pos = 0;
    if (numsSize == 1) {
        sprintf(res, "%d", nums[0]);
        return res;
    }
    if (numsSize == 2) {
        sprintf(res, "%d/%d", nums[0], nums[1]);
        return res;
    }
    pos += sprintf(res + pos, "%d/(%d", nums[0], nums[1]);
    for (int i = 2; i < numsSize; i++) {
        pos += sprintf(res + pos, "/%d", nums[i]);
    }
    res[pos++] = ')';
    res[pos] = '\0';
    return res;
}
