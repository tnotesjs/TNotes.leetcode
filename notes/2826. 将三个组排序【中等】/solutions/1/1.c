int minimumOperations(int* nums, int numsSize) {
    int f[3] = {0, 0, 0};
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == 1) f[0]++;
        else if (nums[i] == 2) f[1] = (f[0] > f[1] ? f[0] : f[1]) + 1;
        else {
            int mx = f[0] > f[1] ? f[0] : f[1];
            f[2] = (mx > f[2] ? mx : f[2]) + 1;
        }
    }
    int mx = f[0] > f[1] ? f[0] : f[1];
    return numsSize - (mx > f[2] ? mx : f[2]);
}
