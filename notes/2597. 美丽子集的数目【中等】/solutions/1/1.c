int ans;
int *sortedNums;
int sortedLen;
int kVal;
int cnt[2001]; // nums[i] <= 1000

int cmp(const void *a, const void *b) {
    return *(int *)a - *(int *)b;
}

void dfs(int i) {
    if (i == sortedLen) {
        ans++;
        return;
    }
    dfs(i + 1); // 不选
    int prev = sortedNums[i] - kVal;
    if (prev < 0 || cnt[prev] == 0) {
        cnt[sortedNums[i]]++;
        dfs(i + 1); // 选
        cnt[sortedNums[i]]--;
    }
}

int beautifulSubsets(int *nums, int numsSize, int k) {
    ans = 0;
    sortedNums = malloc(numsSize * sizeof(int));
    memcpy(sortedNums, nums, numsSize * sizeof(int));
    qsort(sortedNums, numsSize, sizeof(int), cmp);
    sortedLen = numsSize;
    kVal = k;
    memset(cnt, 0, sizeof(cnt));
    dfs(0);
    free(sortedNums);
    return ans - 1;
}
