int numberOfBeams(char** bank, int bankSize) {
    int res = 0, prev = 0;
    for (int i = 0; i < bankSize; i++) {
        int count = 0;
        for (int j = 0; bank[i][j]; j++) {
            if (bank[i][j] == '1') count++;
        }
        if (count > 0) {
            res += prev * count;
            prev = count;
        }
    }
    return res;
}
