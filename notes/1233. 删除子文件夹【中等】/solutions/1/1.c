int cmp(const void* a, const void* b) {
    return strcmp(*(char**)a, *(char**)b);
}

char** removeSubfolders(char** folder, int folderSize, int* returnSize) {
    qsort(folder, folderSize, sizeof(char*), cmp);
    char** res = (char**)malloc(sizeof(char*) * folderSize);
    res[0] = folder[0];
    *returnSize = 1;
    for (int i = 1; i < folderSize; i++) {
        int len = strlen(res[*returnSize - 1]);
        if (strncmp(folder[i], res[*returnSize - 1], len) != 0 || folder[i][len] != '/') {
            res[(*returnSize)++] = folder[i];
        }
    }
    return res;
}
