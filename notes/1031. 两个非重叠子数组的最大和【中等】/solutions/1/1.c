int maxSumTwoNoOverlap(int* nums, int numsSize, int firstLen, int secondLen) {
    int* prefix = calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) prefix[i + 1] = prefix[i] + nums[i];

    int solve(int L1, int L2) {
        int maxFirst = 0, res = 0;
        for (int i = L1 + L2; i <= numsSize; i++) {
            int f = prefix[i - L2] - prefix[i - L1 - L2];
            if (f > maxFirst) maxFirst = f;
            int s = prefix[i] - prefix[i - L2];
            if (maxFirst + s > res) res = maxFirst + s;
        }
        return res;
    }

    int a = solve(firstLen, secondLen);
    int b = solve(secondLen, firstLen);
    free(prefix);
    return a > b ? a : b;
}
