int maxNumberOfFamilies(int n, int** reservedSeats, int reservedSeatsSize, int* reservedSeatsColSize) {
    // 用简单哈希表存每行的占用掩码
    // 由于 reservedSeatsSize <= 10^4，行数也不超过 10^4
    int capacity = 20007;
    int* keys = (int*)calloc(capacity, sizeof(int));
    int* vals = (int*)calloc(capacity, sizeof(int));
    int rowCount = 0;

    for (int i = 0; i < reservedSeatsSize; i++) {
        int row = reservedSeats[i][0], col = reservedSeats[i][1];
        unsigned h = (unsigned)row % capacity;
        while (keys[h] != 0 && keys[h] != row) h = (h + 1) % capacity;
        if (keys[h] == 0) { keys[h] = row; rowCount++; }
        vals[h] |= (1 << col);
    }

    int L = 0b111100;       // bits 2-5
    int M = 0b11110000;     // bits 4-7
    int R = 0b1111000000;   // bits 6-9

    int res = (n - rowCount) * 2;
    for (int i = 0; i < capacity; i++) {
        if (keys[i] == 0) continue;
        int mask = vals[i];
        if (!(mask & L) && !(mask & R)) res += 2;
        else if (!(mask & L) || !(mask & M) || !(mask & R)) res += 1;
    }
    free(keys);
    free(vals);
    return res;
}
