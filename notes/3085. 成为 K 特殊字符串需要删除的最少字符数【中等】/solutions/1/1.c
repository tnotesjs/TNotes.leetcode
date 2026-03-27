#include <string.h>

int cmpInt(const void *a, const void *b) { return *(int*)a - *(int*)b; }

int minimumDeletions(char* word, int k) {
    int freq[26] = {0};
    for (int i = 0; word[i]; i++) freq[word[i] - 'a']++;
    int counts[26], cnt = 0;
    for (int i = 0; i < 26; i++) if (freq[i] > 0) counts[cnt++] = freq[i];
    qsort(counts, cnt, sizeof(int), cmpInt);
    int minDel = strlen(word);
    for (int b = 0; b < cnt; b++) {
        int del = 0;
        for (int i = 0; i < cnt; i++) {
            if (counts[i] < counts[b]) del += counts[i];
            else if (counts[i] > counts[b] + k) del += counts[i] - (counts[b] + k);
        }
        if (del < minDel) minDel = del;
    }
    return minDel;
}
