int cmp2271(const void* a, const void* b) {
    return (*(int**)a)[0] - (*(int**)b)[0];
}

int maximumWhiteTiles(int** tiles, int tilesSize, int* tilesColSize, int carpetLen) {
    qsort(tiles, tilesSize, sizeof(int*), cmp2271);
    int res = 0, j = 0;
    long long cover = 0;
    for (int i = 0; i < tilesSize; i++) {
        while (j < tilesSize && tiles[j][1] < tiles[i][0] + carpetLen) {
            cover += tiles[j][1] - tiles[j][0] + 1;
            j++;
        }
        if (j < tilesSize) {
            int partial = tiles[i][0] + carpetLen - tiles[j][0];
            if (partial < 0) partial = 0;
            long long cur = cover + partial;
            if (cur > res) res = (int)cur;
        } else {
            if (cover > res) res = (int)cover;
        }
        cover -= tiles[i][1] - tiles[i][0] + 1;
    }
    return res;
}
