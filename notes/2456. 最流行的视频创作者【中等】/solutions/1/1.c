/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */

typedef struct {
    char *creator;
    long long total;
    int bestIdx;
} CreatorInfo2456;

char*** mostPopularCreator(char** creators, char** ids, int* views, int n, int* returnSize, int** returnColumnSizes) {
    CreatorInfo2456 *info = (CreatorInfo2456 *)malloc(n * sizeof(CreatorInfo2456));
    int infoCnt = 0;
    for (int i = 0; i < n; i++) {
        int found = -1;
        for (int j = 0; j < infoCnt; j++) {
            if (strcmp(info[j].creator, creators[i]) == 0) { found = j; break; }
        }
        if (found == -1) {
            info[infoCnt].creator = creators[i];
            info[infoCnt].total = views[i];
            info[infoCnt].bestIdx = i;
            infoCnt++;
        } else {
            info[found].total += views[i];
            int bi = info[found].bestIdx;
            if (views[i] > views[bi] || (views[i] == views[bi] && strcmp(ids[i], ids[bi]) < 0)) {
                info[found].bestIdx = i;
            }
        }
    }
    long long maxTotal = -1;
    for (int i = 0; i < infoCnt; i++) {
        if (info[i].total > maxTotal) maxTotal = info[i].total;
    }
    int cnt = 0;
    for (int i = 0; i < infoCnt; i++) {
        if (info[i].total == maxTotal) cnt++;
    }
    char ***res = (char ***)malloc(cnt * sizeof(char **));
    *returnColumnSizes = (int *)malloc(cnt * sizeof(int));
    int ri = 0;
    for (int i = 0; i < infoCnt; i++) {
        if (info[i].total == maxTotal) {
            res[ri] = (char **)malloc(2 * sizeof(char *));
            res[ri][0] = info[i].creator;
            res[ri][1] = ids[info[i].bestIdx];
            (*returnColumnSizes)[ri] = 2;
            ri++;
        }
    }
    *returnSize = cnt;
    free(info);
    return res;
}
