int findSmallestInteger(int *nums, int numsSize, int value) {
    int *cnt = calloc(value, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int r = nums[i] % value;
        if (r < 0) r += value;
        cnt[r]++;
    }
    for (int mex = 0; ; mex++) {
        int r = mex % value;
        if (cnt[r] == 0) {
            free(cnt);
            return mex;
        }
        cnt[r]--;
    }
}
