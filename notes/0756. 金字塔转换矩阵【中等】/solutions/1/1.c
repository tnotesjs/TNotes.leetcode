char map[26][26][8]; // map[a][b] = possible chars on top
int mapSize[26][26];

bool build(char* row, int len) {
    if (len == 1) return true;
    char next[len];
    return dfs(row, len, next, 0);
}

bool dfs(char* row, int len, char* next, int i) {
    if (i == len - 1) {
        next[i] = '\0';
        return build(next, len - 1);
    }
    int a = row[i] - 'A', b = row[i + 1] - 'A';
    for (int k = 0; k < mapSize[a][b]; k++) {
        next[i] = map[a][b][k];
        if (dfs(row, len, next, i + 1)) return true;
    }
    return false;
}

bool pyramidTransition(char* bottom, char** allowed, int allowedSize) {
    memset(mapSize, 0, sizeof(mapSize));
    for (int i = 0; i < allowedSize; i++) {
        int a = allowed[i][0] - 'A', b = allowed[i][1] - 'A';
        map[a][b][mapSize[a][b]++] = allowed[i][2];
    }
    return build(bottom, strlen(bottom));
}
