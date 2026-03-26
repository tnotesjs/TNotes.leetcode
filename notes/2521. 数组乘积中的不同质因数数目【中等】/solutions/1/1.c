int distinctPrimeFactors(int* nums, int numsSize) {
    int seen[1001] = {0};
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        int x = nums[i];
        for (int j = 2; j * j <= x; j++) {
            if (x % j == 0) {
                if (!seen[j]) { seen[j] = 1; count++; }
                while (x % j == 0) x /= j;
            }
        }
        if (x > 1 && !seen[x]) { seen[x] = 1; count++; }
    }
    return count;
}
