void dfs(int* count, int* res) {
    for (int i = 0; i < 26; i++) {
        if (count[i] == 0) continue;
        (*res)++;
        count[i]--;
        dfs(count, res);
        count[i]++;
    }
}

int numTilePossibilities(char* tiles) {
    int count[26] = {0};
    for (int i = 0; tiles[i]; i++) count[tiles[i] - 'A']++;
    int res = 0;
    dfs(count, &res);
    return res;
}
