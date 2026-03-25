int* parentSlash;

int findSlash(int x) {
    if (parentSlash[x] != x) parentSlash[x] = findSlash(parentSlash[x]);
    return parentSlash[x];
}

void unionSlash(int x, int y) {
    parentSlash[findSlash(x)] = findSlash(y);
}

int regionsBySlashes(char** grid, int gridSize) {
    int n = gridSize;
    int total = n * n * 4;
    parentSlash = malloc(total * sizeof(int));
    for (int i = 0; i < total; i++) parentSlash[i] = i;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int base = (i * n + j) * 4;
            char ch = grid[i][j];

            if (ch == '/') {
                unionSlash(base + 0, base + 3);
                unionSlash(base + 1, base + 2);
            } else if (ch == '\\') {
                unionSlash(base + 0, base + 1);
                unionSlash(base + 2, base + 3);
            } else {
                unionSlash(base + 0, base + 1);
                unionSlash(base + 1, base + 2);
                unionSlash(base + 2, base + 3);
            }

            if (i > 0) unionSlash(base + 0, ((i - 1) * n + j) * 4 + 2);
            if (j > 0) unionSlash(base + 3, (i * n + j - 1) * 4 + 1);
        }
    }

    int regions = 0;
    for (int i = 0; i < total; i++) {
        if (findSlash(i) == i) regions++;
    }

    free(parentSlash);
    return regions;
}
