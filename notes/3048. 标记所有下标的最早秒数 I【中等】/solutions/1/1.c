#include <stdlib.h>

int cmpPair(const void* a, const void* b) {
    return ((int*)a)[0] - ((int*)b)[0];
}

int earliestSecondToMarkIndices(int* nums, int numsSize, int* changeIndices, int changeIndicesSize) {
    int n = numsSize, m = changeIndicesSize;
    int check(int t) {
        int* lastOccur = (int*)calloc(n + 1, sizeof(int));
        for (int i = 0; i <= n; i++) lastOccur[i] = -1;
        for (int s = 0; s < t; s++) lastOccur[changeIndices[s]] = s;
        for (int i = 1; i <= n; i++) {
            if (lastOccur[i] == -1) { free(lastOccur); return 0; }
        }
        int (*events)[2] = malloc(n * sizeof(int[2]));
        for (int i = 1; i <= n; i++) {
            events[i-1][0] = lastOccur[i];
            events[i-1][1] = nums[i-1];
        }
        free(lastOccur);
        qsort(events, n, sizeof(int[2]), cmpPair);
        int freeSlots = 0, idx = 0;
        for (int s = 0; s < t; s++) {
            if (idx < n && events[idx][0] == s) {
                if (freeSlots < events[idx][1]) { free(events); return 0; }
                freeSlots -= events[idx][1];
                idx++;
            } else {
                freeSlots++;
            }
        }
        free(events);
        return idx == n;
    }
    int lo = 1, hi = m, ans = -1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (check(mid)) { ans = mid; hi = mid - 1; }
        else lo = mid + 1;
    }
    return ans;
}
