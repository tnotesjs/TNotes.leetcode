#include <stdlib.h>
#include <string.h>

int maximumUniqueSubarray(int* nums, int numsSize) {
    int* cnt = (int*)calloc(10001, sizeof(int));
    int l = 0, sum = 0, res = 0;
    for (int r = 0; r < numsSize; r++) {
        while (cnt[nums[r]] > 0) {
            cnt[nums[l]]--;
            sum -= nums[l++];
        }
        cnt[nums[r]]++;
        sum += nums[r];
        if (sum > res) res = sum;
    }
    free(cnt);
    return res;
}
