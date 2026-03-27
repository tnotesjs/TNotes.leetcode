#include <stdlib.h>
#include <limits.h>

typedef struct { long long key; long long val; int used; } Entry;

long long maximumSubarraySum(int* nums, int numsSize, int k) {
    int cap = numsSize * 4;
    Entry* map = (Entry*)calloc(cap, sizeof(Entry));
    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;
    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    long long ans = LLONG_MIN;
    for (int j = 0; j < numsSize; j++) {
        long long v = nums[j];
        long long targets[2] = {v - k, v + k};
        for (int t = 0; t < 2; t++) {
            unsigned long long h = (unsigned long long)(targets[t] + 1000000001LL) * 2654435761ULL;
            int idx = (int)(h % (unsigned long long)cap);
            while (map[idx].used) {
                if (map[idx].key == targets[t]) {
                    long long sum = prefix[j + 1] - map[idx].val;
                    if (sum > ans) ans = sum;
                    break;
                }
                idx = (idx + 1) % cap;
            }
        }
        unsigned long long h = (unsigned long long)(v + 1000000001LL) * 2654435761ULL;
        int idx = (int)(h % (unsigned long long)cap);
        while (map[idx].used && map[idx].key != v) {
            idx = (idx + 1) % cap;
        }
        if (!map[idx].used || prefix[j] < map[idx].val) {
            map[idx].key = v;
            map[idx].val = prefix[j];
            map[idx].used = 1;
        }
    }
    free(prefix);
    free(map);
    return ans == LLONG_MIN ? 0 : ans;
}
