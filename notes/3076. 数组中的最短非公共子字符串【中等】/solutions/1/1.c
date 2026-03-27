#include <stdlib.h>
#include <string.h>

char** shortestSubstrings(char** arr, int arrSize, int* returnSize) {
    *returnSize = arrSize;
    char** res = malloc(arrSize * sizeof(char*));
    for (int i = 0; i < arrSize; i++) {
        int slen = strlen(arr[i]);
        char best[21] = "";
        int done = 0;
        for (int len = 1; len <= slen && !done; len++) {
            for (int start = 0; start + len <= slen; start++) {
                char sub[21];
                strncpy(sub, arr[i] + start, len);
                sub[len] = '\0';
                int found = 0;
                for (int j = 0; j < arrSize; j++) {
                    if (j != i && strstr(arr[j], sub)) { found = 1; break; }
                }
                if (!found) {
                    if (best[0] == '\0' || strcmp(sub, best) < 0) {
                        strcpy(best, sub);
                    }
                }
            }
            if (best[0] != '\0') done = 1;
        }
        res[i] = malloc(strlen(best) + 1);
        strcpy(res[i], best);
    }
    return res;
}
