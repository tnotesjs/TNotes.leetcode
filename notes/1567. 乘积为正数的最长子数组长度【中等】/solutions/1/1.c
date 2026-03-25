int getMaxLen(int* nums, int numsSize) {
    int pos = 0, neg = 0, res = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > 0) {
            pos++;
            neg = neg > 0 ? neg + 1 : 0;
        } else if (nums[i] < 0) {
            int np = neg > 0 ? neg + 1 : 0;
            int nn = pos + 1;
            pos = np; neg = nn;
        } else {
            pos = neg = 0;
        }
        if (pos > res) res = pos;
    }
    return res;
}
