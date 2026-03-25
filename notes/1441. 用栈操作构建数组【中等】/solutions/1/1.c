char** buildArray(int* target, int targetSize, int n, int* returnSize) {
    char** res = (char**)malloc(200 * sizeof(char*));
    int cnt = 0, j = 0;
    for (int i = 1; i <= n && j < targetSize; i++) {
        res[cnt++] = "Push";
        if (target[j] == i) {
            j++;
        } else {
            res[cnt++] = "Pop";
        }
    }
    *returnSize = cnt;
    return res;
}
