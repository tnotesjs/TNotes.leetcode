#include <string.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int maxPalindromesAfterOperations(char** words, int wordsSize) {
    int freq[26] = {0};
    int* lens = (int*)malloc(wordsSize * sizeof(int));
    for (int i = 0; i < wordsSize; i++) {
        lens[i] = strlen(words[i]);
        for (int j = 0; words[i][j]; j++) {
            freq[words[i][j] - 'a']++;
        }
    }
    int pairs = 0;
    for (int i = 0; i < 26; i++) pairs += freq[i] / 2;
    qsort(lens, wordsSize, sizeof(int), cmp);
    int ans = 0;
    for (int i = 0; i < wordsSize; i++) {
        int need = lens[i] / 2;
        if (pairs >= need) {
            pairs -= need;
            ans++;
        }
    }
    free(lens);
    return ans;
}
