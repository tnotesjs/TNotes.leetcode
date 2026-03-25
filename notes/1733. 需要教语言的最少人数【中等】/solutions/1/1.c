#include <stdlib.h>
#include <string.h>

int minimumTeachings(int n, int** languages, int languagesSize, int* languagesColSize, int** friendships, int friendshipsSize, int* friendshipsColSize) {
    int m = languagesSize;
    // langHas[u][l] = 1 if user u knows language l
    int** langHas = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) {
        langHas[i] = (int*)calloc(n + 1, sizeof(int));
        for (int j = 0; j < languagesColSize[i]; j++)
            langHas[i][languages[i][j]] = 1;
    }
    int* needTeach = (int*)calloc(m, sizeof(int));
    int ntCount = 0;
    for (int i = 0; i < friendshipsSize; i++) {
        int u = friendships[i][0] - 1, v = friendships[i][1] - 1;
        int canTalk = 0;
        for (int l = 1; l <= n; l++) {
            if (langHas[u][l] && langHas[v][l]) { canTalk = 1; break; }
        }
        if (!canTalk) {
            if (!needTeach[u]) { needTeach[u] = 1; ntCount++; }
            if (!needTeach[v]) { needTeach[v] = 1; ntCount++; }
        }
    }
    if (ntCount == 0) { for (int i = 0; i < m; i++) free(langHas[i]); free(langHas); free(needTeach); return 0; }
    int res = ntCount;
    for (int l = 1; l <= n; l++) {
        int cnt = 0;
        for (int u = 0; u < m; u++)
            if (needTeach[u] && !langHas[u][l]) cnt++;
        if (cnt < res) res = cnt;
    }
    for (int i = 0; i < m; i++) free(langHas[i]);
    free(langHas); free(needTeach);
    return res;
}
