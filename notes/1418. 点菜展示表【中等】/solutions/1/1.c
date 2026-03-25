// 由于 C 语言实现字符串哈希表较复杂，采用数组 + 排序的方式
int cmpStr(const void* a, const void* b) {
    return strcmp(*(char**)a, *(char**)b);
}
int cmpInt(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

/**
 * Return an array of arrays of strings.
 */
char*** displayTable(char*** orders, int ordersSize, int* ordersColSize,
                     int* returnSize, int** returnColumnSizes) {
    // 收集所有菜名
    char* allFoods[50001];
    int foodCount = 0;
    for (int i = 0; i < ordersSize; i++) allFoods[foodCount++] = orders[i][2];
    qsort(allFoods, foodCount, sizeof(char*), cmpStr);
    // 去重
    char* foods[50001];
    int fCnt = 0;
    for (int i = 0; i < foodCount; i++)
        if (i == 0 || strcmp(allFoods[i], allFoods[i-1]) != 0)
            foods[fCnt++] = allFoods[i];

    // 收集所有桌号
    int allTables[50001], tCount = 0;
    for (int i = 0; i < ordersSize; i++) allTables[tCount++] = atoi(orders[i][1]);
    qsort(allTables, tCount, sizeof(int), cmpInt);
    int tables[501], tCnt = 0;
    for (int i = 0; i < tCount; i++)
        if (i == 0 || allTables[i] != allTables[i-1])
            tables[tCnt++] = allTables[i];

    // 计数矩阵 table[t][f]
    int** cnt = (int**)calloc(501, sizeof(int*));
    for (int i = 0; i < 501; i++) cnt[i] = (int*)calloc(fCnt, sizeof(int));
    for (int i = 0; i < ordersSize; i++) {
        int t = atoi(orders[i][1]);
        char* food = orders[i][2];
        // 二分查找 food 在 foods 中的位置
        int lo = 0, hi = fCnt - 1, fi = 0;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            int c = strcmp(foods[mid], food);
            if (c == 0) { fi = mid; break; }
            else if (c < 0) lo = mid + 1;
            else hi = mid - 1;
        }
        cnt[t][fi]++;
    }

    *returnSize = tCnt + 1;
    *returnColumnSizes = (int*)malloc((tCnt + 1) * sizeof(int));
    char*** res = (char***)malloc((tCnt + 1) * sizeof(char**));
    int cols = fCnt + 1;

    // 标题行
    res[0] = (char**)malloc(cols * sizeof(char*));
    (*returnColumnSizes)[0] = cols;
    res[0][0] = "Table";
    for (int j = 0; j < fCnt; j++) res[0][j+1] = foods[j];

    for (int i = 0; i < tCnt; i++) {
        res[i+1] = (char**)malloc(cols * sizeof(char*));
        (*returnColumnSizes)[i+1] = cols;
        res[i+1][0] = (char*)malloc(12);
        sprintf(res[i+1][0], "%d", tables[i]);
        for (int j = 0; j < fCnt; j++) {
            res[i+1][j+1] = (char*)malloc(12);
            sprintf(res[i+1][j+1], "%d", cnt[tables[i]][j]);
        }
    }
    for (int i = 0; i < 501; i++) free(cnt[i]);
    free(cnt);
    return res;
}
