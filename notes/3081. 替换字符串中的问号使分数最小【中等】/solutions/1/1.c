#include <stdlib.h>
#include <string.h>

int cmpInt(const void *a, const void *b) { return *(int*)a - *(int*)b; }

char* minimizeStringValue(char* s) {
    int n = strlen(s);
    int freq[26] = {0};
    for (int i = 0; i < n; i++) {
        if (s[i] != '?') freq[s[i] - 'a']++;
    }
    int *toFill = malloc(n * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '?') {
            int minIdx = 0;
            for (int j = 1; j < 26; j++) {
                if (freq[j] < freq[minIdx]) minIdx = j;
            }
            toFill[cnt++] = minIdx;
            freq[minIdx]++;
        }
    }
    qsort(toFill, cnt, sizeof(int), cmpInt);
    char *res = malloc(n + 1);
    int idx = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '?') res[i] = 'a' + toFill[idx++];
        else res[i] = s[i];
    }
    res[n] = '\0';
    free(toFill);
    return res;
}
