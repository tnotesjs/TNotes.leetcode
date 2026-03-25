int cmp(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

bool startsWith(const char* s, const char* prefix, int len) {
    return strncmp(s, prefix, len) == 0;
}

char*** suggestedProducts(char** products, int productsSize, char* searchWord, int* returnSize, int** returnColumnSizes) {
    qsort(products, productsSize, sizeof(char*), cmp);
    int sLen = strlen(searchWord);
    *returnSize = sLen;
    char*** res = malloc(sizeof(char**) * sLen);
    *returnColumnSizes = malloc(sizeof(int) * sLen);
    int left = 0, right = productsSize - 1;
    for (int k = 0; k < sLen; k++) {
        while (left <= right && (strlen(products[left]) <= k || products[left][k] < searchWord[k])) left++;
        while (left <= right && (strlen(products[right]) <= k || products[right][k] > searchWord[k])) right--;
        int cnt = right - left + 1;
        if (cnt > 3) cnt = 3;
        if (cnt < 0) cnt = 0;
        res[k] = malloc(sizeof(char*) * cnt);
        (*returnColumnSizes)[k] = cnt;
        for (int i = 0; i < cnt; i++) {
            res[k][i] = products[left + i];
        }
    }
    return res;
}
