#include <string.h>

int minDeletionSize(char** strs, int strsSize) {
    int n = strsSize;
    int m = strlen(strs[0]);
    int deletions = 0;
    int* sorted = calloc(n - 1, sizeof(int));

    for (int j = 0; j < m; j++) {
        int canKeep = 1;
        for (int i = 0; i < n - 1; i++) {
            if (!sorted[i] && strs[i][j] > strs[i + 1][j]) {
                canKeep = 0;
                break;
            }
        }
        if (!canKeep) {
            deletions++;
        } else {
            for (int i = 0; i < n - 1; i++) {
                if (strs[i][j] < strs[i + 1][j]) sorted[i] = 1;
            }
        }
    }

    free(sorted);
    return deletions;
}
