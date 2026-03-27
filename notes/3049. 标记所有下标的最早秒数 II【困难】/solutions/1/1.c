#include <stdlib.h>
#include <string.h>

// 简化版本：暴力检查
int earliestSecondToMarkIndices(int* nums, int numsSize, int* changeIndices, int changeIndicesSize) {
    int n = numsSize, m = changeIndicesSize;
    long long total = 0;
    for (int i = 0; i < n; i++) total += nums[i];

    int check(int t) {
        int* last = (int*)malloc(n * sizeof(int));
        memset(last, -1, n * sizeof(int));
        for (int s = 0; s < t; s++) last[changeIndices[s] - 1] = s;

        // 收集可归零的（gain, time）
        int gcnt = 0;
        int (*gains)[2] = malloc(n * sizeof(int[2]));
        for (int i = 0; i < n; i++) {
            if (last[i] != -1 && nums[i] >= 2) {
                gains[gcnt][0] = nums[i] - 1;
                gains[gcnt][1] = last[i];
                gcnt++;
            }
        }
        free(last);
        // sort by time
        for (int i = 0; i < gcnt - 1; i++)
            for (int j = i + 1; j < gcnt; j++)
                if (gains[i][1] > gains[j][1]) {
                    int t0 = gains[i][0], t1 = gains[i][1];
                    gains[i][0] = gains[j][0]; gains[i][1] = gains[j][1];
                    gains[j][0] = t0; gains[j][1] = t1;
                }

        // Min-heap simulation with sorted array
        int* pq = (int*)malloc((gcnt + 1) * sizeof(int));
        int pqSize = 0;
        long long saved = 0;
        int slots = 0, gi = 0;
        for (int s = 0; s < t; s++) {
            int isEvent = 0;
            while (gi < gcnt && gains[gi][1] == s) {
                isEvent = 1;
                int g = gains[gi][0];
                if (slots > 0) {
                    slots--;
                    pq[pqSize++] = g;
                    // bubble up (min-heap)
                    for (int k = pqSize - 1; k > 0; k--) {
                        if (pq[k] < pq[k-1]) { int tmp = pq[k]; pq[k] = pq[k-1]; pq[k-1] = tmp; }
                        else break;
                    }
                    saved += g;
                } else if (pqSize > 0 && pq[0] < g) {
                    saved -= pq[0];
                    pq[0] = g;
                    // sift down
                    for (int k = 0; k < pqSize - 1 && pq[k] > pq[k+1]; k++) {
                        int tmp = pq[k]; pq[k] = pq[k+1]; pq[k+1] = tmp;
                    }
                    saved += g;
                }
                gi++;
            }
            if (!isEvent) slots++;
        }
        long long need = (total - saved) + n - pqSize;
        int res = slots >= need;
        free(gains); free(pq);
        return res;
    }

    int lo = n, hi = m, ans = -1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (check(mid)) { ans = mid; hi = mid - 1; }
        else lo = mid + 1;
    }
    return ans;
}
