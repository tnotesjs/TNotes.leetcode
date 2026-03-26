int cmpll(const void* a, const void* b) {
    long long x = *(long long*)a, y = *(long long*)b;
    return (x > y) - (x < y);
}

int sumDistance(int* nums, int numsSize, char* s, int d) {
    long long MOD = 1000000007;
    long long* pos = (long long*)malloc(numsSize * sizeof(long long));
    for (int i = 0; i < numsSize; i++) {
        pos[i] = (long long)nums[i] + (s[i] == 'R' ? (long long)d : -(long long)d);
    }
    qsort(pos, numsSize, sizeof(long long), cmpll);
    long long res = 0, prefix = 0;
    for (int i = 0; i < numsSize; i++) {
        long long val = ((long long)i % MOD * ((pos[i] % MOD + MOD) % MOD)) % MOD;
        val = (val - prefix % MOD + MOD + MOD) % MOD;
        res = (res + val) % MOD;
        prefix = (prefix + (pos[i] % MOD + MOD) % MOD) % MOD;
    }
    free(pos);
    return (int)res;
}
