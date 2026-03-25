#include <stdlib.h>
#include <string.h>

char* largestMerge(char* word1, char* word2) {
    int n1 = strlen(word1), n2 = strlen(word2);
    char* res = (char*)malloc(n1 + n2 + 1);
    int i = 0, j = 0, k = 0;
    while (i < n1 && j < n2) {
        if (strcmp(word1 + i, word2 + j) >= 0) res[k++] = word1[i++];
        else res[k++] = word2[j++];
    }
    while (i < n1) res[k++] = word1[i++];
    while (j < n2) res[k++] = word2[j++];
    res[k] = '\0';
    return res;
}
