long long maxSum(int* nums, int numsSize, int m, int k) {
    int capacity = 40003;
    int* keys = (int*)calloc(capacity, sizeof(int));
    int* vals = (int*)calloc(capacity, sizeof(int));
    int* used = (int*)calloc(capacity, sizeof(int));
    int distinct = 0;
    long long sum = 0, ans = 0;

    for (int i = 0; i < numsSize; i++) {
        sum += nums[i];
        // add nums[i]
        unsigned h = (unsigned)nums[i] % capacity;
        while (used[h] && keys[h] != nums[i]) h = (h + 1) % capacity;
        if (!used[h]) { used[h] = 1; keys[h] = nums[i]; vals[h] = 0; }
        if (vals[h] == 0) distinct++;
        vals[h]++;

        if (i >= k) {
            int old = nums[i - k];
            sum -= old;
            unsigned oh = (unsigned)old % capacity;
            while (keys[oh] != old || !used[oh]) oh = (oh + 1) % capacity;
            vals[oh]--;
            if (vals[oh] == 0) distinct--;
        }
        if (i >= k - 1 && distinct >= m && sum > ans) ans = sum;
    }
    free(keys); free(vals); free(used);
    return ans;
}
