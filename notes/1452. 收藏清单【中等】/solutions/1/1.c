// 用哈希集合检查子集关系
unsigned hashS(const char* s) {
    unsigned h = 0;
    while (*s) h = h * 31 + *s++;
    return h;
}

int* peopleIndexes(char*** favoriteCompanies, int favoriteCompaniesSize,
                   int* favoriteCompaniesColSize, int* returnSize) {
    int n = favoriteCompaniesSize;
    int* res = (int*)malloc(n * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < n; i++) {
        int isSubset = 0;
        for (int j = 0; j < n && !isSubset; j++) {
            if (i == j || favoriteCompaniesColSize[j] <= favoriteCompaniesColSize[i]) continue;
            int allFound = 1;
            for (int k = 0; k < favoriteCompaniesColSize[i] && allFound; k++) {
                int found = 0;
                for (int l = 0; l < favoriteCompaniesColSize[j]; l++) {
                    if (strcmp(favoriteCompanies[i][k], favoriteCompanies[j][l]) == 0) {
                        found = 1; break;
                    }
                }
                if (!found) allFound = 0;
            }
            if (allFound) isSubset = 1;
        }
        if (!isSubset) res[cnt++] = i;
    }
    *returnSize = cnt;
    return res;
}
