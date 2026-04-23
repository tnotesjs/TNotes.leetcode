#include <stdlib.h>

int countMatchingSubarrays(int* nums, int numsSize, int* pattern,
                           int patternSize) {
    int tLen = numsSize - 1;
    int* text = (int*)malloc(tLen * sizeof(int));
    for (int i = 0; i < tLen; i++) {
        int d = nums[i + 1] - nums[i];
        text[i] = d > 0 ? 1 : (d < 0 ? -1 : 0);
    }
    int* fail = (int*)malloc(patternSize * sizeof(int));
    fail[0] = -1;
    for (int i = 1; i < patternSize; i++) {
        int j = fail[i - 1];
        while (j >= 0 && pattern[j + 1] != pattern[i])
            j = fail[j];
        fail[i] = (pattern[j + 1] == pattern[i]) ? j + 1 : -1;
    }
    int count = 0, j = -1;
    for (int i = 0; i < tLen; i++) {
        while (j >= 0 && pattern[j + 1] != text[i])
            j = fail[j];
        if (pattern[j + 1] == text[i])
            j++;
        if (j == patternSize - 1) {
            count++;
            j = fail[j];
        }
    }
    free(text);
    free(fail);
    return count;
}
