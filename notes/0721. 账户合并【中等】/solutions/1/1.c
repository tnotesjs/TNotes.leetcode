// 简化实现：使用数组并查集，邮箱编号映射
#define MAXE 10001

int par[MAXE];

int find(int x) {
    while (par[x] != x) x = par[x] = par[par[x]];
    return x;
}

void unite(int a, int b) {
    par[find(a)] = find(b);
}

char** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {
    // 统计所有邮箱并编号
    char* emails[MAXE];
    int emailCount = 0;
    int emailId[MAXE]; // accounts[i] 的每个邮箱的 id
    // 简化：直接用序号作为并查集索引
    for (int i = 0; i < MAXE; i++) par[i] = i;

    // 收集所有邮箱
    for (int i = 0; i < accountsSize; i++) {
        for (int j = 1; j < accountsColSize[i]; j++) {
            // 查找是否已存在
            int id = -1;
            for (int k = 0; k < emailCount; k++) {
                if (strcmp(emails[k], accounts[i][j]) == 0) { id = k; break; }
            }
            if (id == -1) { id = emailCount; emails[emailCount++] = accounts[i][j]; }
            // 将同一账户的邮箱合并
            if (j > 1) {
                int prevId = -1;
                for (int k = 0; k < emailCount; k++) {
                    if (strcmp(emails[k], accounts[i][1]) == 0) { prevId = k; break; }
                }
                unite(id, prevId);
            }
        }
    }

    // 按根分组
    int groups[MAXE][100];
    int groupSize[MAXE];
    memset(groupSize, 0, sizeof(groupSize));
    for (int i = 0; i < emailCount; i++) {
        int r = find(i);
        groups[r][groupSize[r]++] = i;
    }

    // 构建结果
    *returnSize = 0;
    char** result[MAXE];
    int resultColSize[MAXE];
    for (int i = 0; i < emailCount; i++) {
        if (groupSize[i] == 0) continue;
        // 查找 name
        char* name = NULL;
        for (int a = 0; a < accountsSize && !name; a++) {
            for (int j = 1; j < accountsColSize[a]; j++) {
                if (strcmp(accounts[a][j], emails[groups[i][0]]) == 0) {
                    name = accounts[a][0]; break;
                }
            }
        }
        // 排序邮箱
        for (int a = 0; a < groupSize[i] - 1; a++)
            for (int b = a + 1; b < groupSize[i]; b++)
                if (strcmp(emails[groups[i][a]], emails[groups[i][b]]) > 0) {
                    int tmp = groups[i][a]; groups[i][a] = groups[i][b]; groups[i][b] = tmp;
                }
        int cnt = groupSize[i] + 1;
        result[*returnSize] = (char**)malloc(sizeof(char*) * cnt);
        result[*returnSize][0] = name;
        for (int j = 0; j < groupSize[i]; j++)
            result[*returnSize][j + 1] = emails[groups[i][j]];
        resultColSize[*returnSize] = cnt;
        (*returnSize)++;
    }

    char*** res = (char***)malloc(sizeof(char**) * (*returnSize));
    *returnColumnSizes = (int*)malloc(sizeof(int) * (*returnSize));
    for (int i = 0; i < *returnSize; i++) {
        res[i] = result[i];
        (*returnColumnSizes)[i] = resultColSize[i];
    }
    return res;
}
