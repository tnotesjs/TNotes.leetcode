int encode(int* cells) {
    int code = 0;
    for (int i = 0; i < 8; i++) code |= (cells[i] << i);
    return code;
}

int* prisonAfterNDays(int* cells, int cellsSize, int n, int* returnSize) {
    *returnSize = 8;
    int* state = malloc(8 * sizeof(int));
    for (int i = 0; i < 8; i++) state[i] = cells[i];

    int seen[256];
    for (int i = 0; i < 256; i++) seen[i] = -1;

    for (int day = 0; day < n; day++) {
        int code = encode(state);
        if (seen[code] != -1) {
            int cycleLen = day - seen[code];
            int remaining = (n - day) % cycleLen;
            for (int r = 0; r < remaining; r++) {
                int next[8] = {0};
                for (int i = 1; i < 7; i++)
                    next[i] = (state[i - 1] == state[i + 1]) ? 1 : 0;
                for (int i = 0; i < 8; i++) state[i] = next[i];
            }
            return state;
        }
        seen[code] = day;
        int next[8] = {0};
        for (int i = 1; i < 7; i++)
            next[i] = (state[i - 1] == state[i + 1]) ? 1 : 0;
        for (int i = 0; i < 8; i++) state[i] = next[i];
    }

    return state;
}
