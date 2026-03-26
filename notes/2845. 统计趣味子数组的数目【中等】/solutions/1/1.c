long long countInterestingSubarrays(int* nums, int numsSize, int modulo, int k) {
    int cap = modulo < 100003 ? 100003 : modulo + 1;
    long long* table = (long long*)calloc(cap, sizeof(long long));
    table[0] = 1;
    long long ans = 0;
    int prefix = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % modulo == k) prefix++;
        int mod = prefix % modulo;
        int need = ((mod - k) % modulo + modulo) % modulo;
        ans += table[need];
        table[mod]++;
    }
    free(table);
    return ans;
}
