long long fCnt[100001], fSum[100001];
int fSize;

void fUpdate(int i, int dc, long long ds) {
    for (; i <= fSize; i += i & -i) { fCnt[i] += dc; fSum[i] += ds; }
}

long long fQCnt(int i) {
    long long s = 0;
    for (; i > 0; i -= i & -i) s += fCnt[i];
    return s;
}

long long fQSum(int i) {
    long long s = 0;
    for (; i > 0; i -= i & -i) s += fSum[i];
    return s;
}

int cmpInt(const void* a, const void* b) {
    return (*(int*)a > *(int*)b) - (*(int*)a < *(int*)b);
}

int lb(int* arr, int n, int target) {
    int lo = 0, hi = n;
    while (lo < hi) { int mid = (lo + hi) / 2; if (arr[mid] < target) lo = mid + 1; else hi = mid; }
    return lo;
}

long long minimumCost(int* nums, int numsSize, int k, int dist) {
    int n = numsSize, need = k - 1;

    // 坐标压缩
    int* vals = (int*)malloc((n - 1) * sizeof(int));
    for (int i = 1; i < n; i++) vals[i - 1] = nums[i];
    qsort(vals, n - 1, sizeof(int), cmpInt);
    int m = 0;
    for (int i = 0; i < n - 1; i++) {
        if (i == 0 || vals[i] != vals[i - 1]) vals[m++] = vals[i];
    }
    fSize = m;
    memset(fCnt, 0, (m + 1) * sizeof(long long));
    memset(fSum, 0, (m + 1) * sizeof(long long));

    long long ans = LLONG_MAX;
    int left = 1;

    for (int right = 1; right < n; right++) {
        int r = lb(vals, m, nums[right]) + 1;
        fUpdate(r, 1, nums[right]);
        while (right - left > dist) {
            int lr = lb(vals, m, nums[left]) + 1;
            fUpdate(lr, -1, -(long long)nums[left]);
            left++;
        }
        if (right - left + 1 >= need) {
            int lo = 1, hi = m, pos = m;
            while (lo <= hi) {
                int mid = (lo + hi) / 2;
                if (fQCnt(mid) >= need) { pos = mid; hi = mid - 1; }
                else lo = mid + 1;
            }
            long long c = fQCnt(pos), s = fQSum(pos);
            long long topSum = s - (c - need) * (long long)vals[pos - 1];
            if (topSum < ans) ans = topSum;
        }
    }

    free(vals);
    return (long long)nums[0] + ans;
}
