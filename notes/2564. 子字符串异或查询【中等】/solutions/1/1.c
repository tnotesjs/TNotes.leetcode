typedef struct { int key; int left; int right; UT_hash_handle hh; } HM2564;

int** substringXorQueries(char* s, int** queries, int queriesSize, int* queriesColSize, int* returnSize, int** returnColumnSizes) {
    int n = strlen(s);
    HM2564* map = NULL;
    for (int i = 0; i < n; i++) {
        int val = 0;
        for (int j = i; j < i + 30 && j < n; j++) {
            val = val * 2 + (s[j] - '0');
            HM2564* e = NULL;
            HASH_FIND_INT(map, &val, e);
            if (!e) { e = (HM2564*)malloc(sizeof(HM2564)); e->key = val; e->left = i; e->right = j; HASH_ADD_INT(map, key, e); }
            if (val == 0) break;
        }
    }
    *returnSize = queriesSize;
    *returnColumnSizes = (int*)malloc(queriesSize * sizeof(int));
    int** ans = (int**)malloc(queriesSize * sizeof(int*));
    for (int i = 0; i < queriesSize; i++) {
        ans[i] = (int*)malloc(2 * sizeof(int));
        (*returnColumnSizes)[i] = 2;
        int target = queries[i][0] ^ queries[i][1];
        HM2564* e = NULL;
        HASH_FIND_INT(map, &target, e);
        if (e) { ans[i][0] = e->left; ans[i][1] = e->right; }
        else { ans[i][0] = -1; ans[i][1] = -1; }
    }
    HM2564 *cur2, *tmp2;
    HASH_ITER(hh, map, cur2, tmp2) { HASH_DEL(map, cur2); free(cur2); }
    return ans;
}
