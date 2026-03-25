#include <string.h>
#include <stdbool.h>
#include <stdlib.h>

int cmp1657(const void* a, const void* b) { return *(int*)a - *(int*)b; }

bool closeStrings(char* word1, char* word2) {
    int f1[26] = {0}, f2[26] = {0};
    for (int i = 0; word1[i]; i++) f1[word1[i] - 'a']++;
    for (int i = 0; word2[i]; i++) f2[word2[i] - 'a']++;
    for (int i = 0; i < 26; i++)
        if ((f1[i] > 0) != (f2[i] > 0)) return false;
    qsort(f1, 26, sizeof(int), cmp1657);
    qsort(f2, 26, sizeof(int), cmp1657);
    return memcmp(f1, f2, sizeof(f1)) == 0;
}
