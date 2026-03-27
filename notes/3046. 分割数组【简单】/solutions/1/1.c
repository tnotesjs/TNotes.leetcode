#include <stdbool.h>

bool isPossibleToSplit(int* nums, int numsSize) {
    int freq[101] = {0};
    for (int i = 0; i < numsSize; i++) {
        freq[nums[i]]++;
        if (freq[nums[i]] > 2) return false;
    }
    return true;
}
